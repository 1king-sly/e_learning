import Image from "next/image";
import student from "../public/images/students.jpg";
import logo from "../public/images/logo.png";
import AuthForm from "./(ui)/AuthForm";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen  flex ">
        <div className="w-1/2 ">
          <Image src={student} alt="Students" className=""/>
        </div>
        <div className="w-1/2 bg-gray-500 flex items-center justify-center flex-col">
          <Image src={logo} alt="logo" className=""/>
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
    </>
  );
}
