import prisma from '@/app/lib/prismadb';
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from 'bcrypt'
import { ClusterVisibility, UserType } from '@prisma/client';

export const fetchStudentRecentExams = async (userId:number | undefined) => {
  'use server';
  try{

    if (!userId) {
      throw new Error('User ID is required.');
    }
    const student = await prisma.user.findUnique({
      where: {
        id: parseInt(userId as unknown as string),
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

export const fetchUserCreatedExams = async (userId:number | undefined, query: string) => {
  'use server';


  try{
    if  (typeof query === 'string' && query.trim() !== '') {
      const examsCreated = await prisma.exam.findMany({
        where: {
          createdById:parseInt(userId as unknown as string),
          title: {
            contains: query.trim(),
          },
        },
      });
      return examsCreated;
    }
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
      });
      return clusters;
    }

    const clusters = await prisma.cluster.findMany()
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


export const fetchSingleCluster = async (clusterId:string) => {
  'use server';

  try{

      const cluster = await prisma.cluster.findUnique({
        where:{
          id:parseInt(clusterId)
        },
         select: {
          title:true,
          author:true,
          createdAt:true,
          visibility:true,
          examsForm1:true,
          examsForm2:true,
          examsForm3:true,
          examsForm4:true,  
        },
      })
      return cluster
   

  }catch(error){
    console.error("Error fetching Single Cluster",error)
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
          category:true,
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
        email: email,
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
    console.log('Error fetching All Users ', error);
    throw error; 
  } finally {
    await prisma.$disconnect();
  }
};
export const fetchTeachers = async (query: string) => {
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
    throw error; 
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