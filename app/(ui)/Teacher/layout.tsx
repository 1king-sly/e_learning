import SideNav from './Component/SideNav'
import Header from './Component/Header'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/utils/authUptions'
import NavBar from './Component/NavBar'
// import { fetchUser } from '@/app/lib/actions'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions)
  if(!session){
    redirect('/')
  }
  const userType = session?.userType

  if(userType === 'STUDENT'){
    
    redirect('/Student/Dashboard')
  }
  if(userType === 'ADMIN'){
    
    redirect('/Admin/Dashboard')
  }
  return (
    <>
    <div className='w-screen h-screen flex flex-col overflow-hidden gap-1'>
      <div className='w-full bg-gray-200 shadow-md h-[10vh]'>
      <NavBar></NavBar>
      </div>
      <div className='w-full  max-h-full h-full flex flex-row'>
        <div className='h-full overflow-hidden w-[15vw]   bg-sky-500  flex justify-center' >
          <SideNav></SideNav>

        </div>
        <div className='h-full overflow-y-auto w-full bg-gray-200 overflow-x-clip'>{children}
        </div>
      </div>
     
    </div>
    </>
  )
}
