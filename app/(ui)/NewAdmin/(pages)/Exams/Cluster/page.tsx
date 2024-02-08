'use client'
import React, { useEffect, useState } from 'react';
import Button from '@/app/(ui)/Button';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';


export default  function Page() {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    Visibility: '',
  });

  const router = useRouter();

  const toggleLoading = () => {
    setLoading((prevLoading) => !prevLoading);
  };

  const handleChange = (event: React.ChangeEvent< HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
   {
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

    console.log(formData)

    toast.loading('Creating Cluster .....')

    toggleLoading();
    try {
      const create = await fetch('/api/createCluster', {
        method: 'POST',
        body:JSON.stringify(formData)
        });

      if (create?.ok && create?.status === 200) {
        toast.dismiss()
        toast.success('Cluster Created Successfully')
      } else if (create?.status !== 200) {
        toast.dismiss()
        toast.error('Something Went wrong')
      }

    } catch (error) {
      toast.dismiss()

      toast.error('Server Side error')
    } finally {
      toggleLoading();
    }
  };

  useEffect(() => {
    setDisabled(loading);
  }, [loading]);
  

  return (
    <>
      <div className='w-full min-h-screen flex flex-col items-center justify-center pb-40'>
        <div className='flex flex-col  items-center'>
          {/* <Image src={logo} alt='logo' className='lg:h-24 lg:w-24 object-cover h-16 w-16'></Image> */}
          <h3 className='text-sky-300 max-[425px]:text-xs'>CREATE A CLUSTER</h3>
        </div>

        <div>
          <form  className='w-[80vw] flex flex-col gap-2' >
            <div className='w-full flex justify-center items-center flex-col gap-2'>
              <textarea
                name="title"
                id="title"
                title='title'
                placeholder='Cluster Title'
                className='resize-none p-2 h-10 w-80 flex items-center rounded-md outline-sky-200 overflow-hidden'
                maxLength={50}
                value={formData.title}
                onChange={handleChange}

                
                
              ></textarea>
             
             <label>
                
                <select
                  name='Visibility'
                  className='bg-white outline-sky-400 px-2 py-1 rounded-md w-80 text-gray-800 text-sm  '
                  required
                  title='school'
                  value={formData.Visibility}
                  onChange={handleChange}

                >
                   <option disabled value=''>
                   Choose Visibility
                  </option> 
                  <option value='Hidden'>Hidden</option>
                  <option value='Visible'>Visible</option>
                </select>
              </label>     
            
             
            </div>

            

           

            <div className='w-full md:w-2/5 flex justify-center items-center mx-auto'>
              <Button type='submit'              
              onClick={handleSubmit}
              disabled={disabled}

               >Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}


