'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '@/app/(ui)/Button';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import pdf from '@/public/pdf.png';

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    schoolFromFormData: '',
    schoolFromFormDataLevel: '',
    image: null as File | null,
    imagePreview: null as string | null,
  });

  const router = useRouter();

  const toggleLoading = () => {
    setLoading((prevLoading) => !prevLoading);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;

    if (name === 'image' && event.target instanceof HTMLInputElement) {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData({
            ...formData,
            image: file,
            imagePreview: reader.result as string,
          });
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async () => {
    const event = window.event;
    if (!event) {
      return;
    }
    event.preventDefault();

    toast.loading('Creating Exam .....');

    toggleLoading();
    try {
      const create = await fetch('/api/create', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      if (create?.ok && create?.status === 200) {
        toast.success('Exam Created Successfully');
      } else if (create?.status !== 200) {
        toast.error('Something Went wrong');
      }
    } catch (error) {
      toast.error('Server Side error');
    } finally {
      toggleLoading();
    }
  };

  useEffect(() => {
    setDisabled(loading);
  }, [loading]);

  const isImageFile = (file: File) => {
    const acceptedImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
    return acceptedImageTypes.includes(file.type);
  };

  return (
    <>
      <div className='w-full min-h-screen flex flex-col items-center justify-center pb-40'>
        <div className='flex flex-col items-center'>
          <h3 className='text-sky-300 max-[425px]:text-xs'>CREATE AN EXAM</h3>
        </div>

        <div>
          <form className='w-[80vw] flex flex-col gap-2'>
            <div className='w-full flex justify-center items-center flex-col gap-2'>
              <textarea
                name="title"
                id="title"
                title='title'
                placeholder='Exam Title'
                className='resize-none p-2 h-10 w-80 flex items-center rounded-md outline-sky-200 overflow-hidden'
                maxLength={50}
                value={formData.title}
                onChange={handleChange}
              ></textarea>

              <label>
                <select
                  name='schoolFromFormDataLevel'
                  className='bg-white outline-sky-400 px-2 py-1 rounded-md w-80 text-gray-800 text-sm'
                  required
                  title='school'
                  value={formData.schoolFromFormDataLevel}
                  onChange={handleChange}
                >
                  <option disabled value=''>
                    Choose Form Level
                  </option>
                  <option value='Form 1'>Form 1</option>
                  <option value='Form 2'>Form 2</option>
                  <option value='Form 3'>Form 3</option>
                  <option value='Form 4'>Form 4</option>
                </select>
              </label>
              <label>
                <select
                  name='schoolFromFormData'
                  className='bg-white outline-sky-400 px-2 py-1 rounded-md w-80 text-gray-800 text-sm'
                  required
                  title='school'
                  value={formData.schoolFromFormData}
                  onChange={handleChange}
                >
                  <option disabled value=''>
                    Choose Cluster
                  </option>
                  <option value='SONAS'>SONAS</option>
                  <option value='SASS'>SASS</option>
                  <option value='SCI'>SCI</option>
                  <option value='MEDICINE'>MEDICINE</option>
                  <option value='ENGINEERING'>ENGINEERING</option>
                  <option value='LAW'>LAW</option>
                </select>
              </label>
            </div>

            <div className="w-full flex justify-center">
              <div className="w-2/5 mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  {formData.imagePreview ? (
                    isImageFile(formData.image!) ? (
                      <Image
                        src={formData.imagePreview}
                        alt="File Preview"
                        className="mb-4 max-w-full max-h-96"
                        width={120}
                        height={120}
                      />
                    ) : (
                      <Image
                        src={pdf}
                        alt="Document Preview"
                        className="mb-4 max-w-full max-h-96"
                        width={120}
                        height={120}
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
                        onChange={handleChange}
                        name="image"
                        type="file"
                        className="sr-only"
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
