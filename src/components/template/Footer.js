import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Logo from './Logo';
import Link from 'next/link';
import LogoWhite from './LogoWhite';

const Footer = () => {

  const links = "https://docs.google.com/forms/d/e/1FAIpQLSdLhGhdfN-0cklK9HP9myWuHDPeMkhx1V6dC69DRunDIb0ktw/viewform"
  return (
    <footer className='bg-gray-800 text-white py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          {/* Logo and Social Media Links */}
          <div className='flex flex-col  items-center md:items-start gap-4 md:gap-8 mb-6 md:mb-0'>
            <div>
              {/* <img src='/logo.png' alt='Logo' className='h-12' /> */}
              <LogoWhite />
            </div>
            <div className='flex gap-4'>
              <Link href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
                <FaFacebook className='h-6 w-6 hover:text-teal-400' />
              </Link>
              <Link href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                <FaTwitter className='h-6 w-6 hover:text-teal-400' />
              </Link>
              <Link href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
                <FaInstagram className='h-6 w-6 hover:text-teal-400' />
              </Link>
            </div>
          </div>

          {/* Links in Groups */}
          <div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
            <div>
              <h4 className='font-semibold mb-3'>Business</h4>
              <ul className='space-y-2'>
                <li><Link href={links} target='_blank' className='hover:text-teal-400'>Funding</Link></li>
                <li><Link href={links} className='hover:text-teal-400'>Risk Management</Link></li>
                <li><Link href={links} className='hover:text-teal-400'>Liquidity and Trading</Link></li>
                <li><Link href={links} className='hover:text-teal-400'>Trade Intelligence</Link></li>
              </ul>
            </div>
            <div>
              <h4 className='font-semibold mb-3'>Support</h4>
              <ul className='space-y-2'>
                <li><Link href='/home/contact' className='hover:text-teal-400'>Help Center</Link></li>
                <li><Link href='/home/contact' className='hover:text-teal-400'>Contact Us</Link></li>
                {/* <li><Link href='#' className='hover:text-teal-400'>FAQ</Link></li> */}
              </ul>
            </div>
            <div>
              <h4 className='font-semibold mb-3'>Legal</h4>
              <ul className='space-y-2'>
                <li><Link href='privacy' className='hover:text-teal-400'>Privacy Policy</Link></li>
                <li><Link href='terms' className='hover:text-teal-400'>Terms of Service</Link></li>
                {/* <li><Link href='#' className='hover:text-teal-400'>Cookie Policy</Link></li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className='mt-8 text-center text-sm text-gray-500'>
          &copy; {new Date().getFullYear()} Acacia. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
