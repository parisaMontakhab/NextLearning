
'use client';

import { useParams, useSearchParams } from 'next/navigation';



 export default function News(){
    
    const params = useParams();
    
    const id = params.id;
    
    
   
    return(
        <div className='text-center font-medium'>
            Hello from News {id}
            
        </div>
    )
 }