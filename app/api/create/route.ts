import prisma from '@/app/lib/prismadb';
import { authOptions } from '@/utils/authUptions';
import { ExamCategory, ExamLevel } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { UploadApiResponse, v2 as cloudinary } from 'cloudinary';
import { Readable } from 'stream';

cloudinary.config({
  cloud_name: 'dwav3nker',
  api_key: '621821631817116',
  api_secret: 'G5igqMnD8nki-4q4LAj5S56EFjo',
});



export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { title, file, category, level } = body;

    if (!title || !file || !level) {
      return new NextResponse('Missing info', { status: 400 });
    }

    // const uploadedVideoResponse = await cloudinary.uploader.upload(file.name, { folder: 'flashcards', resource_type: 'auto' });


    const imageData = file.name;

    const cloudinaryResponse = await cloudinary.uploader.upload(imageData, {
      resource_type: 'auto',
      fromBase64: true,
    });

    console.log(cloudinaryResponse.secure_url)


    const newExam = await prisma.exam.create({
      data: {
        title,
        authorId: 1,
        createdById: 1,
        file: cloudinaryResponse.secure_url,
        category: ExamCategory[category as keyof typeof ExamCategory],
        level: ExamLevel[level as keyof typeof ExamLevel],
      },
    });

    return new NextResponse(JSON.stringify(newExam), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.log(error, 'CREATING PROJECT');
    return new NextResponse('Internal Error', { status: 500 });
  }
}


