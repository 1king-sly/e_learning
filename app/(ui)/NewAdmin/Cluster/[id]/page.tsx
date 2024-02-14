'use server'
import SearchBar from '@/app/(ui)/Student/Component/SearchBar';
import { fetchSingleCluster,deleteSingleExam } from '@/app/lib/actions';
import Link from 'next/link';
import CreateExam from '../../Components/CreateExam';
import { TrashIcon, EyeIcon } from '@heroicons/react/24/outline';

export default async function Page({ params,searchParams }: { params: { id: string },searchParams:string }) {
    const search = new URLSearchParams(searchParams);
    const q = search.get('query') || '';
  const clusterId = params.id;
  const datas = await fetchSingleCluster(clusterId,q);

  return (
    <>
      <div className='p-10 pb-40 max-[425px]:p-1'>
        <CreateExam clusterId={clusterId}/>
      <SearchBar placeholder='Search'/>
        <div className='mx-20'>
        {datas && datas.exams && datas.exams.length > 0 ? (
          <table className='w-full'>
            <tbody className='flex-col mt-4 gap-3 flex'>
              {datas.exams.map((exam) => (
                  <tr className='min-[426px]:justify-around  flex bg-gray-100 py-2 w-full pr-2 items-center max-[425px]:gap-6' key={exam.id}>
                    <td className='w-1/3 truncate'>{exam.title}</td>
                    <td className='w-1/3 max-[425px]:hidden'>{new Date(exam.createdAt).toLocaleDateString()}</td>
                    <Link href={`/NewAdmin/Exams/${exam.id}`} key={exam.id}>
                      <td className='w-1/12 mx-4' >
                      <button className='bg-sky-300 p-2 text-white text-sm lg:rounded-md rounded-full w-[6vw]'>
                        <div>
                          <EyeIcon className=' h-3 w-3 md:w-4 md:h-4 lg:hidden'/>
                          <p className='hidden lg:block text-xs'>
                            View

                          </p>
                        </div>
                        </button>
                      </td>
                      </Link>
                      <td className='w-1/12 mx-4' >
                      <form action={deleteSingleExam} className=''>
              <input type="text" title='examId' name='examId' className='hidden ' value={exam.id}/>
              <button className='bg-rose-500 p-2 text-white text-sm lg:rounded-md w-full flex items-center justify-center rounded-full mx-3' type='submit'>
                <div>
                  <TrashIcon className='h-3 w-3 md:w-4 md:h-4 lg:hidden'/>
                  <p className='hidden lg:block text-xs'>
                  Delete
                  </p>
                </div>
            </button>

              </form></td>
                  </tr>
              ))}
            </tbody>
          </table> 
        ) : (
          <div className='w-full h-full flex items-center justify-center'>
            <p>No Exams available</p>
          </div>
        )}</div>
      </div>
    </>
  );
}
