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

export const updateUser = async (formData: any) => {
  'use server';
  const userId = formData.userId;
  const email = formData.email;
  const userType = formData.userType;
  const registrationNumber = formData.registrationNumber;
  const password = formData.password;
  const image = formData.file

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

    if (image !== null && image !== '') {
      const { data, type } = image;

      const bufferData = Buffer.from(data, 'base64');


      const uploadPromise = new Promise<string>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            resource_type: 'auto',
            use_filename: true,
            unique_filename: false,
          },
          async (error, result) => {
            if (error) {
              console.error(error);
              reject('Cloudinary upload error');
            } else {
              console.log(result?.secure_url);
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

      data.image = cloudinaryFileUrl

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
        id: parseInt(id),
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


export const createExam = async (formData:any) => {
  try {
    const title = formData.title
    const file = formData.file 
    const category = formData.category
    const level = formData.level

    if(!title || !file || !category || !level ){
      throw new Error('Misssing Required Info')
    }
   
    const { data, type } = file;


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
            console.log(result?.secure_url);
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
        file: cloudinaryFileUrl,
        level: ExamLevel[level as keyof typeof ExamLevel],
        clusters: {
          connect: { id: parseInt(category) },
        },
      },
    });
    revalidatePath(`/NewAdmin/Cluster/${category}`);
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
      revalidatePath('/NewAdmin/Cluster')
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
      revalidatePath('/NewAdmin/Students')
      revalidatePath('/NewAdmin/Teachers')
      return newUser;
     
  } catch (error) {
    console.error(error, 'CREATING USER');
  }
}