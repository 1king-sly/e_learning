 'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '@/app/(ui)/Button';
import { useRouter } from 'next/navigation';
import pdf from '@/public/pdf.png';
import toast from 'react-hot-toast';



type Category = {
  id: number; 
  title: string;
};
export default function Page() {
 
  const [loading, setisLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    level: '',
    file: null as { name: string, type: string, data: string } | null,
    examType: '',
    imagePreview: null as string | null,
  });

  const toggleLoading = () => {
    setisLoading((prevLoading) => !prevLoading);
  };

 

  const router = useRouter()

  const [categories, setCategories] = useState<Category[]>([]);
  const handleFetch = async () => {
    try {
      const response = await fetch('/api/fetchClusters', {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch clusters (status: ${response.status})`);
      }

      const clusters: Category[] = await response.json(); 
      
      setCategories(clusters);
      return clusters;
    } catch (error) {
      console.error('Error fetching clusters:', error);
      throw error;
    }
  };

  useEffect(() => {
    
    handleFetch();
  }, []);
  


  const handleSubmit = async () => {
    const event = window.event;
    if (!event) {
      return;
    }
    event.preventDefault();


  
    toggleLoading();
    try {
      toast.loading('Creating exam...');
      const create = await fetch('/api/create', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (create?.ok && create?.status === 200) {
        toast.dismiss();
        toast.success('Exam Created Successfully');
        router.push('/Admin/Dashboard');
      } else if ( create?.status !== 200) {
        toast.dismiss();
        toast.error('Something went wrong');
      }
    } catch (error) {
      toast.dismiss();
      toast.error('Server Side error');
    } finally {
      toggleLoading();
    }
  };
  
  useEffect(() => {
    setDisabled(loading);
  }, [loading]);
 

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement | HTMLInputElement>) => {
    const { name, value, files } = event.target as HTMLInputElement;
  
    if (name === 'file' && files && files.length > 0) {
      const file = files[0];
      
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result?.toString().split(',')[1];
        setFormData({
          ...formData,
          file: {
            name: file.name,      
            type: file.type,
            data: base64String || '',
          },
          imagePreview: reader.result as string,
        });
      };
  
      reader.readAsDataURL(file);
    } else {
      setFormData({
        ...formData,
        file: null,
        [name]: value,
      });
    }
  };
  
  return (
    <>
      <div className='w-full min-h-screen flex flex-col items-center justify-center pb-40'>
        <div className='flex flex-col items-center'>
          <h3 className='text-sky-300 max-[425px]:text-xs'>CREATE AN EXAM</h3>
        </div>        
        <div>
          <form  className='w-[80vw] flex flex-col gap-2'>
            <div className='w-full flex justify-center items-center flex-col gap-2'>
              <textarea
                name="title"
                id="title"
                title='title'
                placeholder='Exam Title'
                className='resize-none p-2 h-10 w-80 flex items-center rounded-md outline-sky-200 overflow-hidden'
                value={formData.title}
                onChange={handleChange}
                disabled={disabled}
              ></textarea>

              <label>
                <select
                  name='examType'
                  className='bg-white outline-sky-400 px-2 py-1 rounded-md w-80 text-gray-800 text-sm'
                  required
                  title='type'
                  value={formData.examType}
                  onChange={handleChange}
                  disabled={disabled}  
                >
                  <option disabled value=''>
                    Type
                  </option>
                  <option value='REVISION'>REVISION</option>
                  <option value='ASSIGNMENT'>ASSIGNMENT</option>
                  <option value='BOOK'>BOOK</option>
                </select>
              </label>
              <label>
                <select
                  name='level'
                  className='bg-white outline-sky-400 px-2 py-1 rounded-md w-80 text-gray-800 text-sm'
                  required
                  title='level'
                  value={formData.level}
                  onChange={handleChange}
                  disabled={disabled}
                  
                >
                  <option disabled value=''>
                    Choose Form Level
                  </option>
                  <option value='Form1'>Form 1</option>
                  <option value='Form2'>Form 2</option>
                  <option value='Form3'>Form 3</option>
                  <option value='Form4'>Form 4</option>
                </select>
              </label>
       <label>
    
        
       <select
        name='category'
        className='bg-white outline-sky-400 px-2 py-1 rounded-md w-80 text-gray-800 text-sm'
        required
        title='category'
        value={formData.category}
        onChange={handleChange}
        disabled={disabled}
        
      >
      <option disabled value=''>
                    Choose cluster
      </option>
      {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
      </select>
      

        
      
        </label>

            </div>

        <div className="w-full flex justify-center">
              <div className="w-2/5 mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">

                 {formData.imagePreview ? (
    /\.(jpg|jpeg|png|gif|jfif)$/i.test(formData.file?.name || '') ? (
      <Image
        src={formData.imagePreview}
        alt="File Preview"
        className="mb-4 max-w-full max-h-96"
        width={150}
        height={150}
      />
    ) : (
      <Image
        src={pdf}
        alt="Document Preview"
        className="mb-4 max-w-full max-h-96"
        width={150}
        height={150}
      />
    )
  ) : null}
                  
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500 w-[110px] h-[30px] "
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file"
                        type="file"
                        className="sr-only"
                        onChange={handleChange}
                        disabled={disabled}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='w-full md:w-2/5 flex justify-end'>
              <Button
                type='submit'
                onClick={handleSubmit}
                disabled={disabled}
              >
                Submit
              </Button>
            </div>
          </form>

        </div>
      </div>
    </>
  );
}


