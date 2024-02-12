import prisma from '@/app/lib/prismadb';
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from 'bcrypt'
import { ClusterVisibility, ExamCategory, ExamLevel, UserType } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authUptions';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs/promises';



export const fetchStudentRecentExams = async () => {
  'use server';
  try{

    const user = await getServerSession(authOptions)

    const userId = user?.id

    if (!userId) {
      throw new Error('User ID is required.');
    }
    const student = await prisma.user.findUnique({
      where: {
        id: parseInt(userId),
      },
      include: {
        exams: {
          take: 5,
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
    });

    return student?.exams
    

  }catch(error){
    console.log("Error fetching  Student Recent Exams",error)
  }

  
};

export const fetchUserCreatedExams = async (userId:number | undefined) => {
  'use server';


  try{
    // if  (typeof query === 'string' && query.trim() !== '') {
    //   const examsCreated = await prisma.exam.findMany({
    //     where: {
    //       createdById:parseInt(userId as unknown as string),
    //       title: {
    //         contains: query.trim(),
    //       },
    //     },
    //   });
    //   return examsCreated;
    // }
      const examsCreated = await prisma.exam.findMany(
       {
        where: {
          createdById:parseInt(userId as unknown as string),
        },
       }
      )
      return examsCreated
    

  }catch(error){
    console.log("Error fetching All User Projects",error)
  }

  
};

export const fetchUserCreatedExamsDashboard = async (userId:string | undefined) => {
  'use server';


  try{
   
      const examsCreated = await prisma.exam.findMany(
       {
        where: {
          createdById:parseInt(userId as unknown as string),
        },
        take:5
       }
      )
      return examsCreated
    

  }catch(error){
    console.log("Error fetching All User Created exams",error)
  }

  
};

export const fetchAllClusters = async (query:string) => {
  'use server';

  try{

    if  (typeof query === 'string' && query.trim() !== '') {
      const clusters = await prisma.cluster.findMany({
        where: {
          title: {
            contains: query.trim(),
          },
        },
        include: {
          author: { 
            select: {
              firstName: true,
              secondName: true,
            },
          },
        },
      });
      return clusters;
    }

    const clusters = await prisma.cluster.findMany(
      {
        include: {
          author: { 
            select: {
              firstName: true,
              secondName: true,
            },
          },
        },
      }
    )
      return clusters
    

  }catch(error){
    console.error("Error fetching All Clusters",error)
  }

  
};




export const countAllClusters = async () => {
  'use server';
  try{

        const clusters = await prisma.cluster.count()
      return clusters
    

  }catch(error){
    console.error("Error fetching All Count Clusters",error)
  }

  
};


export const fetchSingleCluster = async (clusterId: string,query:string) => {
  'use server';

  try {

     if (typeof query === 'string' && query.trim()) {

      const cluster = await prisma.cluster.findUnique({
        where: {
          id: parseInt(clusterId),
        },
        include: {
          exams: {
            where: {
              title: {
                contains: query.trim(),
              },
            },
          },
        },
      });
      return cluster;
    }
    const cluster = await prisma.cluster.findUnique({
      where: {
        id: parseInt(clusterId),
      },
      include: {
        exams: true, 
      },
    });

    return cluster;
  } catch (error) {
    console.error('Error fetching Single Cluster Exams', error);
  }
};
export const fetchSingleExam = async (examId:string) => {
  'use server';

  try{

      const exam = await prisma.exam.findUnique({
        where:{
          id:parseInt(examId)
        },
         select: {
          title:true,
          author:true,
          createdAt:true,
          file:true,
          createdBy:true,
          level:true, 
        },
      })
      return exam
   

  }catch(error){
    console.error("Error fetching Single Exam",error)
  }

  
};

export const updateCluster = async (formData: FormData) => {
  'use server';
    const visibility = formData.get('visibility') as string;
    const clusterId = formData.get('clusterId') as string;

  try{
  
      const cluster = await prisma.cluster.update({
        where:{
          id:parseInt(clusterId),
        },
        data:{
          visibility:ClusterVisibility[visibility as keyof typeof ClusterVisibility]
        }
      })

      return cluster

  }catch(error){
    console.error("Error Updating Project",error)
  }
  finally {
    
  }
  
};

export const updateUser = async (formData: FormData) => {
  'use server';
  const userId = formData.get('userId') as string;
  const email = formData.get('email') as string | null;
  const userType = formData.get('userType') as string | null;
  const registrationNumber = formData.get('registrationNumber') as string | null;
  const password = formData.get('password') as string | null;

  try {
    const data: Record<string, string> = {};

    
    if (email !== null && email !== '') {
      data.email = email;
    }
    if (registrationNumber !== null && registrationNumber !== '') {
      data.registrationNumber = registrationNumber;
    }

    if (userType !== null && userType !== '') {
      data.userType = userType;
    }

    if (password !== null && password !== '') {
      data.hashedPassword = await bcrypt.hash(password, 12);
    }

    
    const updatedUser = await prisma.user.update({
      where: {
        id: parseInt(userId),
      },
      data: data,
    });

    revalidatePath(`/SuperAdmin/Users/${userId}`);

    return updatedUser;
  } catch (error) {
    console.log('Error Updating User', error);
  } finally {
  }
};

export const fetchUser = async (email:string) => {
  'use server';


  try{


    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(email),
      },
      select: {
        id: true,
        email:true,
        userType:true,
        firstName:true,
        secondName:true,
        registrationNumber:true,
        hashedPassword:true,
        exams:true,
        createdExams:true,
      },
    });


    return user;

  }catch(error){
    console.log("Error Fetching User",error)
  }

  
};



export const countStudents = async () => {
  'use server';
  try{
      const users = await prisma.user.count({
        where:{
          userType:UserType.STUDENT
        }
      })
      return users
   

  }catch(error){
    console.error("Error Counting all Students",error)
  }

  
};
export const countAll = async () => {
  'use server';
  try{
      const users = await prisma.user.count()
      return users
   

  }catch(error){
    console.error("Error Counting all Students",error)
  }

  
};
export const countTeachers = async () => {
  'use server';
  try{
    const users = await prisma.user.count({
      where:{
        userType:{
          in:[UserType.TEACHER,UserType.ADMIN]
        }
      }
    })
    return users
   

  }catch(error){
    console.error("Error counting Teachers",error)
  }

  
};




export const fetchStudents = async (query: string) => {
  'use server'
  try {
    if (typeof query === 'string' && query.trim()) {

      const users = await prisma.user.findMany({
        where: {
          userType: {
            in: [UserType.STUDENT],
          }, 
          OR: [
            {
              registrationNumber: {
                contains: query.trim(),
              },
            },
            {
              firstName: {
                contains: query.trim(),
              },
            },
          ],
        },
      });
      return users;
    }

    const users = await prisma.user.findMany(
      {
        where:{
          userType: {
            in: [UserType.STUDENT],
          }
        }
      }
    );
    return users;
  } catch (error) {
    console.log('Error fetching All Students ', error);
  } finally {
    await prisma.$disconnect();
  }
};
export const fetchTeachers = async (query: string) => {
  'use server'
  try {
    if (typeof query === 'string' && query.trim()) {
      const users = await prisma.user.findMany({
        where: {
          userType: {
            in: [UserType.TEACHER,UserType.ADMIN],
          }, 
          OR: [
            {
              registrationNumber: {
                contains: query.trim(),
              },
            },
            {
              firstName: {
                contains: query.trim(),
              },
            },
          ],
        },
      });
      return users;
    }

    const users = await prisma.user.findMany(
      {
        where:{
          userType: {
            in: [UserType.TEACHER,UserType.ADMIN],
          }
        }
      }
    );
    return users;
  } catch (error) {
    console.log('Error fetching All Teachers ', error);
  } finally {
    await prisma.$disconnect();
  }
};



export const deleteSingleUser = async (formData: FormData) => {
  'use server';

  const userId = formData.get('userId') as string;

  try {
    const projectsToDelete = await prisma.exam.findMany({
      where: {
        authorId: parseInt(userId),
        createdById:parseInt(userId)
      },
    });


    // await Promise.all(projectsToDelete.map(async (project) => {
    //   await prisma.exam.delete({
    //     where: {
    //     },
    //   });
    // }));

    const deletedUser = await prisma.user.delete({
      where: {
        id: parseInt(userId),
      },
    });


    revalidatePath('/SuperAdmin/Users');
  } catch (error) {
    console.error("Error Deleting Single User", error);
  }
};


export const deleteSingleExam = async (formData: FormData) => {
  'use server';


  const examId = formData.get('examId') as string;

  try{

      const deletedExam=await prisma.exam.delete({
        where:{
          id:parseInt(examId),
        }
      })

  }catch(error){
    console.error("Error Deleting Exam",error)
  }

  
};

export const deleteSingleCluster = async (formData: FormData) => {
  'use server';


  const clusterId = formData.get('clusterId') as string;

  try{

      const deletedCluster=await prisma.cluster.delete({
        where:{
          id:parseInt(clusterId),
        }
      })

  }catch(error){
    console.error("Error Deleting Cluster",error)
  }

  
};


export const createExam = async (formData: FormData) => {
  'use server'

  console.log(formData)
  try {
    const title = formData.get('title') as string;
    const file = formData.get('file') as File | null;
    const category = formData.get('category') as string | null;
    const type = formData.get('type') as string | null;
    const level = formData.get('level') as string | null;

    if (!title || !file || !category || !level) {
      throw new Error('Required field is missing');
    }

    const session = await getServerSession(authOptions);

    if (!session) {
      throw new Error('Unauthorized');
    }

    const authorId = parseInt(session?.id);

    const convertFileToBase64 = (file: File) => {
      return new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve((reader.result as string).split(',')[1] || '');
        };
        reader.readAsDataURL(file);
      });
    };

    const fileBase64 = file ? await convertFileToBase64(file) : '';

    if (fileBase64) {
      const cloudinaryResponse = await cloudinary.uploader.upload(fileBase64, {
        resource_type: 'auto',
      });


      console.log('DATA URL',cloudinaryResponse.secure_url)
      const newExam = await prisma.exam.create({
        data: {
          title,
          authorId: authorId,
          createdById: authorId,
          file: cloudinaryResponse.secure_url,
          level: ExamLevel[level as keyof typeof ExamLevel],
        },
      });

      return newExam;
    } else {
      throw new Error('Error uploading file to Cloudinary');
    }
  } catch (error) {
    console.error(error, 'CREATING PROJECT');
  }
};


export const fetchStudentExamClusters = async (query:string) => {
  'use server';

  try{

    if  (typeof query === 'string' && query.trim() !== '') {
      const clusters = await prisma.cluster.findMany({
        where: {
          title: {
            contains: query.trim(),
          },
          visibility:ClusterVisibility.VISIBLE,
          category:ExamCategory.REVISION  
        },
        include: {
          author: { 
            select: {
              firstName: true,
              secondName: true,
            },
          },
        },
      });
      return clusters;
    }

    const clusters = await prisma.cluster.findMany(
      {
        where:{
          visibility:ClusterVisibility.VISIBLE,
          category:ExamCategory.REVISION

        },
        include: {
          author: { 
            select: {
              firstName: true,
              secondName: true,
            },
          },
        },
      }
    )
      return clusters
    

  }catch(error){
    console.error("Error fetching Exam Clusters",error)
  }

  
};
export const fetchStudentAssignmentClusters = async (query:string) => {
  'use server';

  try{

    if  (typeof query === 'string' && query.trim() !== '') {
      const clusters = await prisma.cluster.findMany({
        where: {
          title: {
            contains: query.trim(),
          },
          visibility:ClusterVisibility.VISIBLE,
          category:ExamCategory.ASSIGNMENT  
        },
        include: {
          author: { 
            select: {
              firstName: true,
              secondName: true,
            },
          },
        },
      });

      return clusters;
    }

    const clusters = await prisma.cluster.findMany(
      {
        where:{
          visibility:ClusterVisibility.VISIBLE,
          category:ExamCategory.ASSIGNMENT

        },
        include: {
          author: { 
            select: {
              firstName: true,
              secondName: true,
            },
          },
        },
      }
    )

      return clusters
    

  }catch(error){
    console.error("Error fetching Assignment Clusters",error)
  }

  
};
export const fetchStudentBookClusters = async (query:string) => {
  'use server';

  try{

    if  (typeof query === 'string' && query.trim() !== '') {
      const clusters = await prisma.cluster.findMany({
        where: {
          title: {
            contains: query.trim(),
          },
          visibility:ClusterVisibility.VISIBLE,
          category:ExamCategory.BOOK  
        },
        include: {
          author: { 
            select: {
              firstName: true,
              secondName: true,
            },
          },
        },
      });
      return clusters;
    }

    const clusters = await prisma.cluster.findMany(
      {
        where:{
          visibility:ClusterVisibility.VISIBLE,
          category:ExamCategory.BOOK

        },
        include: {
          author: { 
            select: {
              firstName: true,
              secondName: true,
            },
          },
        },
      }
    )     

      return clusters
    

  }catch(error){
    console.error("Error fetching Book Clusters",error)
  }

  
};