"use client";

import { login } from "@/actions/login.action";
import { signUp } from "@/actions/signup.action";
import { signIn } from "@/auth";
import { SignUpFormPayload } from "@/interfaces/signup.interface";
import { redirect } from "next/navigation";
import { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaGithub,
  FaGoogle,
  FaLinkedin,
} from "react-icons/fa";
import Swal from "sweetalert2";

const LoginSignUpForm = () => {
  const [loginTabActive, SetLoginTabActive] = useState<boolean>(true);
  return (
    <>
      <div className="flex justify-center gap-8 relative z-50">
        <button
          className={`p-4 text-white cursor-pointer ${
            loginTabActive ? "border-b-2 border-red-400" : "border-transparent"
          }`}
          onClick={() => SetLoginTabActive(true)}
        >
          Login
        </button>
        <button
          className={`p-4 text-white cursor-pointer ${
            !loginTabActive ? "border-b-2 border-red-400" : "border-transparent"
          }`}
          onClick={() => SetLoginTabActive(false)}
        >
          Sign Up
        </button>
      </div>
      {loginTabActive ? <LoginForm /> : <SignUpForm />}
    </>
  );
};

const LoginForm = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleFormSubmit = async () => {
    const err = await login(loginCredentials)

    if(!err){
      Swal.fire({
        title: "Login Successful",
        text: `Welcome back!`,
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        setLoginCredentials({ email: "", password: "" });
        redirect("/")
      });
    } else {
      Swal.fire({
        title: "Login Failed",
        text: String(err) || "Something went wrong",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  }

  return (
    <form action={handleFormSubmit} className="relative z-50 h-full flex flex-col p-4 sm:p-6 md:py-8 md:px-12 max-w-[500px] m-auto gap-3 sm:gap-5 md:gap-8">
      <input
        type="email"
        placeholder="Enter your Email address"
        required
        className="bg-white/70 placeholder:text-black/65 px-6 py-4 rounded-2xl text-black outline-none"
        value={loginCredentials.email}
        onChange={(e) => {
          setLoginCredentials({ ...loginCredentials, email: e.target.value });
        }}
      />
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          className="bg-white/70 placeholder:text-black/65 px-6 py-4 rounded-2xl text-black outline-none w-full"
          required
          value={loginCredentials.password}
          onChange={(e) => {
            setLoginCredentials({
              ...loginCredentials,
              password: e.target.value,
            });
          }}
        />
        <button
          type="button"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
      <button
        type="submit"
        className="bg-red-700 rounded-2xl cursor-pointer px-6 py-4"
      >
        Login
      </button>
      <div className="flex items-center gap-2">
        <span className="h-[1px] flex flex-1 bg-red-400"></span>
        <span>Or Connect With</span>
        <span className="h-[1px] flex flex-1 bg-red-400"></span>
      </div>
      <div className="flex justify-around">
        <button className="text-4xl bg-white p-2 rounded cursor-pointer" >
          <FaGoogle color="black" />
        </button>
        <button className="text-4xl bg-white p-2 rounded cursor-pointer">
          <FaGithub color="black" />
        </button>
        <button className="text-4xl bg-white p-2 rounded cursor-pointer">
          <FaLinkedin color="black" />
        </button>
      </div>
    </form>
  );
};

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [signUpCredentials, setSignUpCredentials] = useState<SignUpFormPayload>(
    {
      name: "",
      year: "",
      department: "",
      rollNumber: "",
      credentials: {
        email: "",
        password: "",
        phoneNumber: "",
      },
    }
  );

  const handleFormSubmit = async()=>{
    const response = await signUp(signUpCredentials);
    if(response?.success){
      Swal.fire({
        title: "User Created Successfully",
        text: `User Email: ${response?.userEmail}`,
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        setSignUpCredentials({
          name: "",
          year: "",
          department: "",
          rollNumber: "",
          credentials: {
            email: "",
            password: "",
            phoneNumber: "",
          },
        })
      })
    }else{
      Swal.fire({
        title: "User Creation Failed",
        text: response?.message || "Something went wrong",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  }

  return (
    <form action={handleFormSubmit}  className="relative z-50 h-full flex flex-col p-4 sm:p-6 md:py-8 md:px-12 max-w-[500px] m-auto gap-3 sm:gap-5 md:gap-8">
      <input
        type="email"
        placeholder="Email"
        required
        className="bg-white/70 placeholder:text-black/65 px-6 py-4 rounded-2xl text-black outline-none"
        value={signUpCredentials?.credentials.email}
        onChange={(e) => {
          setSignUpCredentials({
            ...signUpCredentials,
            credentials: {
              ...signUpCredentials?.credentials,
              email: e.target.value,
            },
          });
        }}
      />
      <input
        type="text"
        placeholder="Full Name"
        required
        className="bg-white/70 placeholder:text-black/65 px-6 py-4 rounded-2xl text-black outline-none"
        value={signUpCredentials.name}
        onChange={(e) => {
          setSignUpCredentials({
            ...signUpCredentials,
            name: e.target.value,
          });
        }}
      />
      <div className="flex justify-between gap-3 md:items-center flex-col md:flex-row">
        <span>Year</span>
        <select
          value={signUpCredentials.year}
          onChange={(e) =>
            setSignUpCredentials({ ...signUpCredentials, year: e.target.value })
          }
          className="p-2 flex flex-1 bg-white/70 placeholder:text-black/65 px-6 py-4 rounded-2xl text-black outline-none"
        >
          <option value="1st">1st</option>
          <option value="2nd">2nd</option>
          <option value="3rd">3rd</option>
          <option value="4th">4th</option>
        </select>
        <span>Department</span>
        <select
          value={signUpCredentials.department}
          onChange={(e) =>
            setSignUpCredentials({
              ...signUpCredentials,
              department: e.target.value,
            })
          }
          className="p-2 flex flex-1 bg-white/70 placeholder:text-black/65 px-6 py-4 rounded-2xl text-black outline-none"
        >
          <option value="CE">CE</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="EE">EE</option>
          <option value="ME">ME</option>
        </select>
      </div>
      <input
        type="text"
        placeholder="Roll Number"
        required
        className="bg-white/70 placeholder:text-black/65 px-6 py-4 rounded-2xl text-black outline-none"
        value={signUpCredentials.rollNumber}
        onChange={(e) =>
          setSignUpCredentials({
            ...signUpCredentials,
            rollNumber: e.target.value,
          })
        }
      />
      <input
        type="text"
        placeholder="Phone Number"
        required
        className="bg-white/70 placeholder:text-black/65 px-6 py-4 rounded-2xl text-black outline-none"
        value={signUpCredentials.credentials.phoneNumber}
        onChange={(e) =>
          setSignUpCredentials({
            ...signUpCredentials,
            credentials : {
              ...signUpCredentials.credentials,
              phoneNumber : e.target.value
            }
          })
        }
      />
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="bg-white/70 placeholder:text-black/65 px-6 py-4 rounded-2xl text-black outline-none w-full"
          required
          value={signUpCredentials.credentials.password}
          onChange={(e) =>
            setSignUpCredentials({
              ...signUpCredentials,
              credentials: {
                ...signUpCredentials.credentials,
                password: e.target.value,
              },
            })
          }
        />
        <button
          type="button"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
      <button
        type="submit"
        className="bg-red-700 rounded-2xl cursor-pointer px-6 py-4"
      >
        Sign Up
      </button>
      <div className="flex items-center gap-2">
        <span className="h-[1px] flex flex-1 bg-red-400"></span>
        <span>Or Connect With</span>
        <span className="h-[1px] flex flex-1 bg-red-400"></span>
      </div>
      <div className="flex justify-around">
        <button className="text-4xl bg-white p-2 rounded cursor-pointer">
          <FaGoogle color="black" />
        </button>
        <button className="text-4xl bg-white p-2 rounded cursor-pointer">
          <FaGithub color="black" />
        </button>
        <button className="text-4xl bg-white p-2 rounded cursor-pointer">
          <FaLinkedin color="black" />
        </button>
      </div>
    </form>
  );
};

export default LoginSignUpForm;
