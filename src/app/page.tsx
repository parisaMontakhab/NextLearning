'use client';

import Link from "next/link"
import { useRouter } from 'next/navigation'

export default function  Home(){
  const router = useRouter()
  return(
    <div className="p-4">
      Hello Next.js
      <div className="mt-14 p-2 bg-blue-400 w-48 text-center text-white rounded-2xl hover:bg-blue-700 transition-all duration-300 ">
         <Link  href="/dashboard"> go to dashboard </Link>
      
      
      </div>

      <button className="mt-14 w-48 p-4 bg-purple-950 text-center text-slate-300 rounded-2xl hover:bg-purple-400 hover:text-white transition-all duration-300"
       type="button"
      onClick={()=>router.push('/dashboard')}
      
      >move to dashboard</button>
      
    </div>
  )
}