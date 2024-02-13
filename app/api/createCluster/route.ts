import prisma from '@/app/lib/prismadb';
import { authOptions } from '@/utils/authUptions';
import { ClusterVisibility, ExamCategory } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();


    const { title,Visibility,category } = body;

    if (!title) {
      return new NextResponse('Missing info', { status: 400 });
    }

    const session = await getServerSession(authOptions);

    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const authorId = parseInt(session?.id);

    const newCluster = await prisma.cluster.create({
      data: {
        title,
        authorId:authorId,
        category:ExamCategory[category as keyof typeof ExamCategory],
        visibility:ClusterVisibility[Visibility as keyof typeof ClusterVisibility ]
      },
    });

    revalidatePath(`/NewAdmin/Cluster`)
    return new NextResponse(JSON.stringify(newCluster), {
      headers: { 'Content-Type': 'application/json' },
    });


  } catch (error: any) {
    console.log(error, 'CREATING CLUSTER');
    return new NextResponse('Internal Error', { status: 500 });
  }
}
