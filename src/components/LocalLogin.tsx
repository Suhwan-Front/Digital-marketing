'use client'

import Link from "next/link";
import { useEffect, useState } from "react"

const LocalLogin = () => {
    const [localID, setLocalID] = useState<string | null>();
    useEffect(() => {
        setLocalID(localStorage.getItem('LoginItem'))
        console.log(localID)
    }, [])
    const handleLogout = () => {
        localStorage.removeItem('LoginItem')
        setLocalID(null)
    }
    return(
    <>{ localID === null ? 
        (<button><Link href={'/auth/Login'}>로그인</Link></button>) : (<button onClick={handleLogout}>로그아웃</button>)}
        </>)
}

export default LocalLogin