import React, { useState } from 'react'
import Logo from './Logo'
// import { topNavData } from '../data/navData'
import Link from 'next/link'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '@/redux/userSlice'
import { persistor } from '@/redux/store'

const TopNav = () => {

    const pathname = usePathname()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.info)
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    

    // console.log(pathname)
  return (
    <div className=' p-5 md:px-12 flex bg-white justify-between relative'>
      <div className=' flex items-center'>
          <Logo />
      </div>
  
      
      {/* Menu Button for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            ></path>
          </svg>
        </button>
      </div>

      {/* Nav Links */}
      <div className={`md:flex md:items-center space-x-8 absolute md:relative md:w-auto w-full bg-white md:bg-transparent top-full left-0 right-0 md:top-0 z-20 ${isOpen ? 'block' : 'hidden'}`}>
        {!user ? (
          <div className="md:flex items-center gap-4 px-10 md:px-0 py-5 md:py-0 shadow md:shadow-none">
            <Link href="/login">
              <p className="text-sm font-semibold text-center text-blue-600 hover:underline hover:text-blue-700 transition duration-300">
                Login
              </p>
            </Link>
            
            <Link href="/signup">
              <p className="text-sm font-semibold text-center text-white bg-blue-600 py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 mt-5 md:mt-0">
                Sign Up
              </p>
            </Link>
          </div>
        ) : (
          <div className="md:flex items-center gap-4 space-y-0 md:space-y-0 px-10 py-5 md:py-0 shadow md:shadow-none">
            {/* Add user menu items */}
            <Link href="/transactions">
              <p className="text-sm font-semibold text-gray-800 hover:text-blue-600 transition duration-300">
                Transactions
              </p>
            </Link>
            <Link href="/account">
              <p className="text-sm font-semibold text-gray-800 hover:text-blue-600 transition duration-300">
                Account
              </p>
            </Link>
            <Link href="/home/contact">
              <p className="text-sm font-semibold text-gray-800 hover:text-blue-600 transition duration-300">
                Support
              </p>
            </Link>
            <div onClick={()=> {dispatch(logoutUser()); router.push('/home')}}>
              <p className="text-sm font-semibold text-red-600 hover:text-red-700 transition duration-300">
                Logout ({user?.fullName})
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TopNav
