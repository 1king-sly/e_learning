import prisma from '@/app/lib/prismadb';
import { authOptions } from '@/utils/authUptions';
import { getServerSession } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import { redirect } from 'next/navigation';
import { UserType } from '@prisma/client';


export async function POST(request:Request) {
    try{
        const body=await request.json()


        const{
            firstName,
            secondName,
            email,
            registrationNumber,
            userType,
            password
        } = body


        if(  !firstName || !secondName || !email || !registrationNumber || !userType  || !password){
            return new NextResponse('Required field is missing', {status:400})
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const session = await getServerSession(authOptions)

        if(!session){
            return new NextResponse('Unauthorized', {status:401})

        }

        const newUser = await prisma.user.create({
            data: {
              firstName:firstName,
              secondName:secondName,
              email:email,
              registrationNumber:registrationNumber,
              userType:UserType[userType as  keyof typeof UserType],
              hashedPassword:hashedPassword,
          },
          });
            return new NextResponse(JSON.stringify(newUser), {
                headers: { 'Content-Type': 'application/json' },
              });             
   } catch(error:any){
        console.log(error, "CREATING USER")
        return new NextResponse('Internal Error', {status:500})
    }  
 }