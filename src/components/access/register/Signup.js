'use client'
import { login } from "@/redux/apiCalls";
import { publicRequest } from "@/requestMethods";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import { useDispatch } from "react-redux";

const SignUp = () => {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false)
    const [formErrors, setFormErrors] = useState([]);
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

    const registerUser = async ()=> {
        try {
            setIsClicked(true)
            const res = await publicRequest.post('auth/register', {
                fullName: name,
                email: email,
                password: password
            })
            // console.log(res)
            if (res.status === 201) {
                const loginRes = await login({email, password}, dispatch)
                if (loginRes.status === 200) {
                  router.push(`/?${searchParams}`)
                }
            }  
        } catch (error) {
            // console.log(error)
            setIsClicked(false)
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        let errors = [];

        

        if (!name || !email || !password || !acceptTerms) {
            errors.push('All fields are required.');
        }

        // if (password !== confirmPassword) {
        //     errors.push('Passwords do not match.');
        // }

        if (password.length < 8) {
            errors.push('Password must be at least 8 characters long.');
        }

        const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailFormat.test(email)) {
            errors.push('Please enter a valid email address.');
        }

        if (!acceptTerms) {
            errors.push("You must accept terms of service and privacy policy")
        }

        setFormErrors(errors);

        if (errors.length === 0) {
            // Proceed with form submission or further processing
            // console.log('Form is valid');
            registerUser()
            // nextPage()
            // Reset form or redirect user
        }
    };



  return (
    <div className="flex min-h-screen">
      {/* Left Section - Image (hidden on mobile) */}
      <div className="hidden md:flex w-1/2 bg-gray-100">
        <Image
          src="/assets/bgs/login.jpg" // Replace with actual image
          alt="Resort"
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Section - Sign Up Form */}
      <div className="flex flex-col justify-center px-8 py-12 md:w-1/2 w-full">
        {/* <div className="flex justify-center mb-8">
          <img src="/logo.png" alt="Logo" className="w-24" /> 
        </div> */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Sign up</h1>
        {/* <p className="text-gray-500 mb-8">Let’s get you all set up so you can access your personal account.</p> */}


        <div className=' mt-2 space-y-1'>
            {formErrors.length > 0 && (
                <ul>
                    {formErrors.map((error, index) => (
                        <li className=' text-xs text-red-500 font-light'  key={index}>{error}</li>
                    ))}
                </ul>
            )}
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex space-x-4">
            <div className="w-full">
              <label className="block text-sm text-gray-700">Full name</label>
              <input
                type="text"
                name="name"
                onChange={(e)=> setName(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            {/* <div className="w-1/2">
              <label className="block text-sm text-gray-700">Last Name</label>
              <input
                type="text"
                defaultValue="Doe"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div> */}
          </div>
          <div className="flex space-x-4">
            <div className="w-full">
              <label className="block text-sm text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                onChange={(e)=> setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            {/* <div className="w-1/2">
              <label className="block text-sm text-gray-700">Phone Number</label>
              <input
                type="tel"
                defaultValue="john.doe@gmail.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div> */}
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
          {/* <div>
            <label className="block text-sm text-gray-700">Confirm Password</label>
            <div className="relative">
              <input
                type="password"
                defaultValue="password"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button type="button" className="absolute right-3 top-3">
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
          </div> */}
          <div className="flex items-center">
            <input onClick={()=> setAcceptTerms(!acceptTerms)} type="checkbox" className="form-checkbox text-green-600" />
            <span className="ml-2 text-sm text-gray-700">
              I agree to all the{" "}
              <a href="#" className="text-pink-500">Terms</a> and{" "}
              <a href="#" className="text-pink-500">Privacy Policies</a>
            </span>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
          >
            Create account
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link href={{
            pathname: '/login',
            query: query
          }} className="text-pink-500">Login</Link>
        </p>

        {/* Social Sign Up */}
        {/* <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">Or Sign up with</span>
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-4">
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
              <FaFacebook className="h-5 w-5 mr-2" /> Facebook
            </button>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
              <FaGoogle className="h-5 w-5 mr-2" /> Google
            </button>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
              <FaApple className="h-5 w-5 mr-2" /> Apple
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SignUp;
