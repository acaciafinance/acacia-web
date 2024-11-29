import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div>
      <Link href={'/'}>
        <Image src={'/assets/logo/acacia-colored.png'} alt='Acacia' width={100} height={100} />
      </Link>
      {/* <p className=' font-semibold text-xl text-blue-800 '>
        Acacia
      </p> */}
    </div>
  )
}

export default Logo
