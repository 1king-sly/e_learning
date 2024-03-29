'use server'

import prisma from '@/app/lib/prismadb';
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from 'bcrypt'
import { ClusterVisibility, ExamCategory, ExamLevel, UserType } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/utils/authUptions';
import cloudinary from '@/utils/cloudinary';
import { Readable } from 'stream';
import { AnyARecord } from 'dns';




export const fetchStudentRecentExams = async () => {
  'use server';
  try{

    const user = await getServerSession(authOptions)

    const userId = user?.id

    if (!userId) {
      throw new Error('User ID is required.');
    }
    const exams = await prisma.examOpening.findMany({
      where:{
        userId:parseInt(userId)
      },
      include:{
        exam:{
          select:{
            title:true,
            createdAt:true,
            author:true,
            file:true,
            id:true,
          },



        }

      },
        take:5,
        orderBy:{
          openedAt:'desc'
        }
       
    })

    return exams
    

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
        orderBy:{
          createdAt:'desc'
        }
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
        take:5,
        orderBy:{
          createdAt:'desc'
        }
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
        orderBy: {
          createdAt: 'desc',
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
        orderBy: {
          createdAt: 'desc',
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
            select:{
              createdAt:true,
              file:true,
              author:true,
              title:true,
              id:true,
            },
            orderBy: {
              createdAt: 'desc',
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
        exams: {
          select:{
            createdAt:true,
            file:true,
            author:true,
            title:true,
            id:true,
          },
          orderBy: {
            createdAt: 'desc',
          },
        }, 
        
      },
    });

    return cluster;
  } catch (error) {
    console.error('Error fetching Single Cluster Exams', error);
  }
};

export const fetchSingleExam = async (examId:string) => {
  'use server';
    const user = await getServerSession(authOptions)
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

      if(exam){

        const existing= await prisma.examOpening.findMany({
          where:{
            userId:parseInt(user?.id),
            examId:parseInt(examId)
          }
        })

        if(existing){
          const delExist = await prisma.examOpening.deleteMany({
            where:{
            userId:parseInt(user?.id),
            examId:parseInt(examId)
            }
          })
          if(delExist){
            const openedExam = await prisma.examOpening.create({
              data:{
                userId:parseInt(user?.id),
                examId:parseInt(examId)
              }
            })
          }
        }else{
          const openedExam = await prisma.examOpening.create({
            data:{
              userId:parseInt(user?.id),
              examId:parseInt(examId)
            }
          })
        }
 
      }
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
};

export const updateUser = async (formData: FormData) => {
  const userId = formData.get('userId') as string ;
  const email = formData.get('email') as string;
  const registrationNumber = formData.get('registrationNumber') as string
  const password = formData.get('password') as string;
  const image = formData.get('file') as string
  const firstName = formData.get('firstName') as string
  const secondName = formData.get('secondName') as string

  try {
    const data: Record<string, string> = {};

    
    if (email !== null && email !== '') {
      data.email = email;
    }
    if (firstName !== null && firstName !== '') {
      data.firstName = email;
    }
    if (secondName !== null && secondName !== '') {
      data.secondName = email;
    }
    if (registrationNumber !== null && registrationNumber !== '') {
      data.registrationNumber = registrationNumber;
    }
    if (password !== null && password !== '') {
      data.hashedPassword = await bcrypt.hash(password, 12);
    }

    if (image !== null) {
 
      data.image = image


    }

    const updatedUser = await prisma.user.update({
      where: {
        id: parseInt(userId),
      },
      data: data,
    });

    revalidatePath(`/NewAdmin/Student/${userId}`);
    revalidatePath(`/NewAdmin/Teachers/${userId}`);

    return updatedUser;
  } catch (error) {
    console.log('Error Updating User', error);
  } finally {
  }
};

export const fetchUser = async (id:string) => {
  'use server';


  try{


    const user = await prisma.user.findUnique({
      where: {
        registrationNumber: id,
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
        image:true,
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




export const fetchStudents = async (query: any) => {

  'use server'

  const search = query as unknown as string
  try {
    if (search && search.trim()) {

      const users = await prisma.user.findMany({
        where: {
          userType: {
            in: [UserType.STUDENT],
          }, 
          OR: [
            {
              registrationNumber: {
                contains: search.trim(),
              },
            },
            {
              firstName: {
                contains: search.trim(),
              },
            },
          ],
        },
        orderBy:{
          createdAt:'desc'
        }
      });
      return users;
    }

    const users = await prisma.user.findMany(
      {
        where:{
          userType: {
            in: [UserType.STUDENT],
          }
        },
        orderBy:{
          createdAt:'desc'
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
export const fetchTeachers = async (query: any) => {
  'use server'
  const search = query as unknown as string
  try {
    if (search && search.trim()) {
      const users = await prisma.user.findMany({
        where: {
          userType: {
            in: [UserType.TEACHER],
          }, 
          OR: [
            {
              registrationNumber: {
                contains: search.trim(),
              },
            },
            {
              firstName: {
                contains: search.trim(),
              },
            },
            {
              email: {
                contains: search.trim(),
              },
            },
          ],
        },
        orderBy:{
          createdAt:'desc'
        }
      });
      return users;
    }

    const users = await prisma.user.findMany(
      {
        where:{
          userType: {
            in: [UserType.TEACHER,UserType.ADMIN],
          }
        },
        orderBy:{
          createdAt:'desc'
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
    const examsToDelete = await prisma.exam.findMany({
      where: {
        OR: [
          { authorId: parseInt(userId) },
          { createdById: parseInt(userId) },
        ],
      },
      include: {
        examOpenings: true,
      },
    });

    const examOpeningIds = examsToDelete.flatMap((exam) =>
      exam.examOpenings.map((opening) => opening.id)
    );

    await prisma.examOpening.deleteMany({
      where: {
        id: {
          in: examOpeningIds,
        },
      },
    });

    await prisma.exam.deleteMany({
      where: {
        OR: [
          { authorId: parseInt(userId) },
          { createdById: parseInt(userId) },
        ],
      },
    });

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

  try {
    const exam = await prisma.exam.findUnique({
      where: {
        id: parseInt(examId),
      },
      include: {
        examOpenings: true,
        clusters: true,
      },
    });

    if (!exam) {
      throw new Error('Exam not found');
    }

    
    await prisma.examOpening.deleteMany({
      where: {
        examId: parseInt(examId),
      },
    });

    await prisma.exam.update({
      where: {
        id: parseInt(examId),
      },
      data: {
        clusters: {
          disconnect: exam.clusters.map((cluster) => ({ id: cluster.id })),
        },
      },
    });

    const deletedExam = await prisma.exam.delete({
      where: {
        id: parseInt(examId),
      },
    });

  } catch (error) {
    console.error("Error Deleting Exam", error);
  }
};


export const deleteSingleCluster = async (formData: FormData) => {
  'use server';

  const clusterId = formData.get('clusterId') as string;

  try {
    const cluster = await prisma.cluster.findUnique({
      where: {
        id: parseInt(clusterId),
      },
      include: {
        exams: true,
      },
    });

    if (!cluster) {
      throw new Error('Cluster not found');
    }

    await Promise.all(cluster.exams.map(async (exam) => {
      await prisma.examOpening.deleteMany({
        where: {
          examId: exam.id,
        },
      });
    }));

    await Promise.all(cluster.exams.map(async (exam) => {
      await prisma.exam.delete({
        where: {
          id: exam.id,
        },
      });
    }));

    const deletedCluster = await prisma.cluster.delete({
      where: {
        id: parseInt(clusterId),
      },
    });

    revalidatePath(`/NewAdmin/Cluster`)
    return deletedCluster;
  } catch (error) {
    console.error('Error deleting cluster and associated exams:', error);
  }
};



export const createExam = async (formData:FormData) => {

  try {
    const title = formData.get('title') as string
    const file = formData.get('file') as string  
    const category = formData.get('category') as string
    const level = formData.get('level') as string

  

    if(!title || !file || !category || !level ){
      throw new Error('Misssing Required Info')
    }
 
    

    const session = await getServerSession(authOptions);

    if (!session) {
      throw new Error('Unauthorized');
    }

    const authorId = parseInt(session?.id);

    const newExam = await prisma.exam.create({
      data: {
        title: title,
        authorId: authorId,
        createdById: authorId,
        file: file,
        level: ExamLevel[level as keyof typeof ExamLevel],
        clusters: {
          connect: { id: parseInt(category) },
        },
      },
    });
    revalidatePath(`/Admin/Cluster/${category}`);
    revalidatePath(`/Teacher/Cluster/${category}`);
    return newExam;
  } catch (error) {
    console.error(error, 'CREATING EXAM');
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


export const createCluster = async (formData: FormData) => {
  try {
    const title = formData.get('title') as string;
    const Visibility = formData.get('Visibility') as string | null;
    const category = formData.get('category') as string | null;
    

    if (!title || !Visibility || !category ) {
      throw new Error('Required field is missing');
    }

    const session = await getServerSession(authOptions);

    if (!session) {
      throw new Error('Unauthorized');
    }

    const authorId = parseInt(session?.id);

  
      const newCluster = await prisma.cluster.create({
        data: {
          title:title,
          authorId: authorId,
          category:ExamCategory[category as keyof typeof ExamCategory],
          visibility:ClusterVisibility[Visibility as keyof typeof ClusterVisibility ]
        },
      });
      revalidatePath('/Admin/Cluster')
      return newCluster;
     
  } catch (error) {
    console.error(error, 'CREATING CLUSTER');
  }
}

export const createUser = async (formData: any) => {
  try {
    const firstName = formData.FName;
    const secondName = formData.SName
    const regNo = formData.regNo
    let email = formData.email
    const userType = formData.userType

    if(!email){
      email = regNo+'@gmail.com'
    }
    

    if (!firstName || !secondName || !regNo || !email ) {
      throw new Error('Required field is missing');
    }    
    const hashedPassword = await bcrypt.hash(email, 12);  
    const newUser = await prisma.user.create({
      data: {
        firstName:firstName,
        secondName:secondName,
        email:email,
        registrationNumber:regNo,
        userType:UserType[userType as  keyof typeof UserType],
        hashedPassword:hashedPassword,
    },
    });
      revalidatePath('/Admin/Students')
      revalidatePath('/Admin/Teachers')
      return newUser;
     
  } catch (error) {
    console.error(error, 'CREATING USER');
  }
}