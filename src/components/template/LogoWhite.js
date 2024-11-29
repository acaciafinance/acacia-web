import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LogoWhite = () => {
  return (
    <div>
      <Link href={'/'}>
        <Image src={'/assets/logo/acacia-white.png'} alt='Orlando Brothers' width={100} height={100} />
      </Link>
      {/* <p className=' font-semibold text-xl text-blue-800 '>
        Travela
      </p> */}
    </div>
  )
}

export default LogoWhite
