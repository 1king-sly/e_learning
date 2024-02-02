import prisma from '@/app/lib/prismadb';
import { authOptions } from '@/utils/authUptions';
import { ExamCategory, ExamLevel } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { title,file,category,level } = body;

    if (!title || !file || !category || !level) {
      return new NextResponse('Missing info', { status: 400 });
    }

    const session = await getServerSession(authOptions);


    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const authorId = parseInt(session?.id);


    const newExam = await prisma.exam.create({
      data: {
        title,
        authorId:authorId,
        createdById:authorId,
        file:file,
        category:ExamCategory[category as keyof typeof ExamCategory],
        level:ExamLevel[level as keyof typeof ExamLevel]
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
