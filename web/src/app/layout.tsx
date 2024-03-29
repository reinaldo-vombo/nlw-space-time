import Profile from '@/components/Profile'
import './globals.css'
import { Roboto_Flex as Roboto, Baloo_Bhaijaan_2 as Baijanjuree, } from 'next/font/google'
import Signin from '@/components/Signin'
import EmptyMemory from '@/components/EmptyMemory'
import { cookies } from 'next/headers'
import Hero from '@/components/Hero'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

const baiJamjuree = Baijanjuree({ subsets: ['latin'], variable: '--font-bai-jamjuree' })

export const metadata = {
  title: 'Time capsule',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isAuthenticated = cookies().has('token')
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans bg-gray-900 text-gray-100`}>
        <main className="grid grid-cols-2 min-h-screen">
          <div className=" relative flex flex-col items-start bg-[url(../assets/bg-stars.svg)] bg-cover justify-between px-28 py-16 overflow-hidden border-r border-white/10">
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
            <div className="absolute right-2 bottom-0 w-2 top-0 bg-stripes" />
            {isAuthenticated ? <Profile /> : <Signin />}
            <Hero />

          </div>
          <div className='className="flex max-h-screen overflow-y-scroll flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16"'>
            {children}
          </div>
        </main>

      </body>
    </html>
  )
}
