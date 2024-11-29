'use client'

import { FadeLoader } from "react-spinners"

const { useRouter } = require("next/navigation")
const { useEffect } = require("react")

const NotFound = ()=> {

    const router = useRouter()
    useEffect(()=> {
        router.push('/')
    }, [router])

    return (
        <div className=' h-screen flex justify-center items-center'>
            <FadeLoader color='#0e4e40' />
        </div>
    )
}

export default NotFound