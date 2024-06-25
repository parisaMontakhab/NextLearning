import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learning Next.js",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>

        <main> {children}</main>
         
         <Footer/>
        
       </body>

    </html>
  );
}


function Header(){
  return(
    <div>
      <h1 className="w-96 bg-pink-400 text-white rounded-2xl text-center m-auto p-8 mt-8 mb-8"> HEADER</h1>
    </div>
  )
}

function Footer(){
  return(
    <div>
      <h1 className="w-96 bg-blue-200 text-white rounded-2xl text-center m-auto p-8 mt-8"> FOOTER</h1>
    </div>
  )
}