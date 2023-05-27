import React from 'react'
import { getUser } from '@/lib/auth'
import Image from 'next/image'

export default function Profile() {

   const { name, avatarUrl } = getUser()
   return (
      <>
         <div className="flex items-center gap-3 text-left">
            <Image
               src={avatarUrl}
               width={40}
               height={40}
               alt='use photo'
               className='w-10 h-10 rounded-full'
            />
            <p className="text-sm max-w-[148px] leading-snug">
               {name}
               <a href="/api/auth/logout" className='block text-red-400 hover:text-red-300'>
                  Quero sair
               </a>
            </p>
         </div>
      </>
   )
}
