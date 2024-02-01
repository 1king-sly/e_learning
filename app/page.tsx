
import Image from "next/image";
import student from "../public/images/students.jpg";
import logo from "../public/images/logo.png";
import AuthForm from "./(ui)/AuthForm";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen  flex bg-gray-100">
        <div className="w-full h-full hidden sm:block ">
          <Image src={student} alt="Students" className="w-full h-full object-cover"/>
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center">
          <Image src={logo} alt="logo" className="w-20 h-20"/>
          <h2>Sign in Now</h2>
          <div className="mx-auto">
            <AuthForm></AuthForm>
          </div>  
        </div>
      </div>
    </>
  );
}
