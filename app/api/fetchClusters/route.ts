import prisma from '@/app/lib/prismadb';
import { authOptions } from '@/utils/authUptions';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import { redirect } from 'next/navigation';
import { UserType } from '@prisma/client';


export async function GET(request:Request) {
    try{
        const clusters = await prisma.cluster.findMany();
            return new NextResponse(JSON.stringify(clusters), {
                headers: { 'Content-Type': 'application/json' },
              });             
   } catch(error:any){
        console.log(error, "FETCHING CLUSTERS")
        return new NextResponse('Internal Error', {status:500})
    }  
 }