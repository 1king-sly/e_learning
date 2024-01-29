
import Image from "next/image";
import student from "../public/images/students.jpg";
import logo from "../public/images/logo.png";
import AuthForm from "./(ui)/AuthForm";
import SideNav from "./(ui)/Student/Components/SideNav";
import HelloSection from "./(ui)/Student/Components/HelloSection";
import NavBar from "./(ui)/Student/Components/NavBar";

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
          {/* <input type="email" placeholder="Email"/><br/>
          <input type="password" placeholder="password"/><br/>
          <button>Sign In</button><br/>
          <button>Create account</button> */}
        </div>
      </div>
      <div>
            <NavBar/>
            <SideNav/>
            <HelloSection/>
      </div>
    </>
  );
}
