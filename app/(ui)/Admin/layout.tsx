import SideNav from './Component/SideNav'
import Header from './Component/Header'
// import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import NavBar from './Component/NavBar'
// import { fetchUser } from '@/app/lib/actions'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

//   const session = await getServerSession()
//   if(!session){
//     redirect('/')
//   }
//   const email = session.user.email


//   const data =await fetchUser(email)

//   const userType = data?.userType

//   if(userType === 'STUDENT'){
    
//     redirect('/User/Dashboard')
//   }
//   if(userType === 'SUPERADMIN'){
    
//     redirect('/SuperAdmin/Dashboard')
//   }
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
