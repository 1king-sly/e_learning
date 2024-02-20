import { authOptions } from '@/utils/authUptions';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { Readable } from 'stream';
import cloudinary from '@/utils/cloudinary';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {  file } = body;



    if ( !file   ) {
      return new NextResponse('Missing info', { status: 400 });
    }

    const { data, type } = file;

    const uniqueFilename = `${uuidv4()}.${type.split('/')[1]}`;

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



    const user = await getServerSession(authOptions);
    

    return new NextResponse(JSON.stringify(cloudinaryFileUrl), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.log(error, 'Uploading File');
    return new NextResponse('Internal Error', { status: 500 });
  }
}
