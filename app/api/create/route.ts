import prisma from '@/app/lib/prismadb';
import { authOptions } from '@/utils/authUptions';
import { ExamCategory, ExamLevel } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { Readable } from 'stream';
import cloudinary from '@/utils/cloudinary';
import { revalidatePath } from 'next/cache';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, file, examType, level,category } = body;

    if (!title || !file || !level || !examType ) {
      return new NextResponse('Missing info', { status: 400 });
    }

    const { data, type } = file;

    const uniqueFilename = `${uuidv4()}.${type.split('/')[1]}`;

    const bufferData = Buffer.from(data, 'base64');

   
    const uploadPromise = new Promise<string>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          resource_type: 'raw',
          use_filename: true,
          unique_filename: false,
          format: 'pdf', 
        },
        async (error, result) => {
          if (error) {
            console.error(error);
            reject('Cloudinary upload error');
          } else {
            console.log(result?.secure_url)
            resolve(result?.secure_url || '');
          }
        }
      );

      const readableStream = new Readable();
      readableStream.push(bufferData);
      readableStream.push(null);

      readableStream.pipe(uploadStream);
    });

    
    const cloudinaryFileUrl = await uploadPromise;

    const user = await getServerSession(authOptions);
    const newExam = await prisma.exam.create({
      data: {
        title,
        authorId: parseInt(user.id),
        createdById: parseInt(user.id),
        file: cloudinaryFileUrl,
        category: ExamCategory[examType as keyof typeof ExamCategory],
        level: ExamLevel[level as keyof typeof ExamLevel],
        clusters: {
          connect: { id:parseInt(category)  }
        },
      },
    });

    revalidatePath(`/NewAdmin/Cluster/${category}`)
    return new NextResponse(JSON.stringify(newExam), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.log(error, 'CREATING PROJECT');
    return new NextResponse('Internal Error', { status: 500 });
  }
}
