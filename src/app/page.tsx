import Link from "next/link"

export default function  Home(){
  return(
    <div>
      Hello Next.js
      <Link className="p-8 bg-green-100 rounded-2xl text-center hover:bg-blue-500" href="/dashboard"> go to dashboard </Link>
    </div>
  )
}