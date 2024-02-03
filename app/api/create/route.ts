import prisma from '@/app/lib/prismadb';
import { authOptions } from '@/utils/authUptions';
import { ExamCategory, ExamLevel } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

import { Readable } from 'stream';

import cloudinary from '@/utils/cloudinary'

export async function POST(request: Request) {
  try {
    const body = await request.json();


    const { title, file, category, level } = body;

    if (!title || !file || !level) {
      return new NextResponse('Missing info', { status: 400 });
    }

    const imageData = file.name;

    const cloudinaryResponse = await cloudinary.uploader.upload(imageData, {
      resource_type: 'auto',
      // fromBase64: true,
    });

    console.log(cloudinaryResponse.secure_url)

    const user = await getServerSession(authOptions)
    const newExam = await prisma.exam.create({
      data: {
        title,
        authorId: parseInt(user.id),
        createdById: parseInt(user.id),
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


