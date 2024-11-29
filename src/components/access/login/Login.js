import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { signIn, useSession} from 'next-auth/react'
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";
import { login } from "@/redux/apiCalls";
import { useState } from "react";

const Login = () => {


  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null)
    const [isClicked, setIsClicked] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const dispatch = useDispatch()
    const router = useRouter()
    const searchParams = useSearchParams()

    const tid = searchParams.get('tid')
    const user = searchParams.get('user')

    const query = {};
    if (tid) query.tid = tid;
    if (user) query.user = user;

    

    console.log(query)

    
    const handleSubmit = async(e)=> {
      e.preventDefault();
      try {
        setIsClicked(true)
        const res = await login({email, password}, dispatch)
        console.log(res.data)
        if(res.status ===  200) {
          router.push(`/?${searchParams}`)
        }
      } catch (error) {
        console.log(error)
        setError(error?.response?.data)
        setIsClicked(false)
      }
    }

  const handleGoogleSignin = async ()=> {
    await signIn('google', {
      redirect: true,
      callbackUrl: '/'
    })
  }
    return (
      <div className="flex min-h-screen">
        {/* Left Section - Login Form */}
        <div className="flex flex-col justify-center px-8 py-12 md:w-1/2 w-full">
          {/* <div className="flex justify-center mb-8">
            <Image src="/logo.png" alt="Logo" className="w-24" /> 
          </div> */}
          <h1 className="text-xl font-bold text-gray-800 mb-6">Login</h1>
          {error && <p className="text-red-500 text-sm mb-8">{error}</p>}
  
          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword? "text" : "password"}
                  name="password" 
                  id="password" 
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button 
                  type="button" 
                  onClick={()=> setShowPassword(!showPassword)}
                  className="absolute right-3 top-3">
                  <svg
                    className="h-6 w-6 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12H9m0 0h-.01m0 0a7.002 7.002 0 0114 0A7.002 7.002 0 019 12z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
                />
                <span className="ml-2 text-sm text-gray-700">Remember me</span>
              </label>
              <a href="#" className="text-sm text-pink-500">
                Forgot Password
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-neutral-500 text-white py-2 rounded-md hover:bg-green-600"
            >
              {isClicked? (
                  <div className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
                      <span className="sr-only">Loading...</span>
                  </div>
              ):(
                  <p>
                      Login
                  </p>
              ) }
            </button>
          </form>
  
          <p className="text-center text-sm text-gray-500 mt-6">
            Don’t have an account?{" "}
            <Link href={{
              pathname: "/signup",
              query: query
            }} className="text-pink-500">
              Sign up
            </Link>
          </p>
  
          {/* Social Login */}
          {/* <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">Or login with</span>
              </div>
            </div>
  
            <div className="flex justify-center mt-6 space-x-4">
              
              <button onClick={handleGoogleSignin} className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 gap-2 hover:bg-gray-100">
                <FcGoogle />
                Google
              </button>
              
            </div>
          </div> */}
        </div>
  
        {/* Right Section - Image (Hidden on mobile) */}
        <div className="hidden md:flex w-1/2 bg-white p-10">
          <Image
            src="/assets/bgs/login.jpg" // Replace with actual image
            width={500}
            height={500}
            alt="Resort"
            className="object-cover rounded-3xl w-full h-full"
          />
        </div>
      </div>
    );
  };
  
  export default Login;
  