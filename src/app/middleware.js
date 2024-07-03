import { url } from 'inspector';
import { NextResponse } from 'next/server';
import { URL } from 'url';

export default function Middleware(request){
    if(request.nextUrl.pathname === '/postlist'){
        return NextResponse.redirect(new URL('/dashboard',request.url),{status: 301});

    }

    return NextResponse.next();

}

export const config ={
    matcher:'/postlist'
};