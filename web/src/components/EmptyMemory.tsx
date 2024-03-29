import React from 'react'

export default function EmptyMemory() {
   return (
      <div className="flex flex-1 items-center justify-center">
         <p className="w-[368px] text-center leading-relaxed">
            Vocé aindaa não registrou nenhuma lembrança, comece a{' '}
            <a href="" className="underline hover:text-gray-50">
               criar agora
            </a>
         </p>
      </div>
   )
}
