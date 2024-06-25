'use client';

import Link from "next/link"
import { useRouter } from 'next/navigation'

export default function  Home(){
  const router = useRouter()
  return(
    <div className="p-4 flex items-center justify-center ">
      <div className="flex flex-col space-y-8">
      <h1 className="text-center font-black text-3xl "> Main Page</h1>
      <div className=" p-2 bg-blue-400 w-48 text-center text-white rounded-2xl hover:bg-blue-700 transition-all duration-300 ">
         <Link  href="/dashboard"> go to dashboard </Link>
      
      
      </div>
      <div className="">
      <button className="   w-48 p-2 bg-purple-950 text-center text-slate-300 rounded-2xl hover:bg-purple-400 hover:text-white transition-all duration-300"
       type="button"
      onClick={()=>router.push('/news')}>
        go to News
      </button>
      </div>
      </div>
    

     
      
    </div>
  )
}