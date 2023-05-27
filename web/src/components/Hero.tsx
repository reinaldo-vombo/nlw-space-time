import React from 'react'
import Image from 'next/image'
import logo from '../assets/nlw-spacetime-logo.svg'
import Link from 'next/link'


export default function Hero() {
   return (
      <div className="space-y-5">
         <Image src={logo} alt="logo" />
         <div className="max-w-[420px] space-y-1">
            <h1 className="mt-5 text-5xl font-bold leading-tight text-gray-50">Sua cápsula do tempo</h1>
            <p>
               Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com mundo
            </p>
         </div>
         <Link href="/memories/new" className="inline-block rounded-full bg-green-500 px-5 py-3 text-sm uppercase leading-none text-black hover:bg-green-700 ">
            CADASTRAR LEMBRANÇA
         </Link>
      </div>
   )
}
