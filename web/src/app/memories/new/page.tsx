import { NewMemoryForm } from '@/components/NewMemoryform'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function NewMemory() {
  return (
    <div className='flex flex-1 flex-col gap-4'>
      <Link href='/' className='flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100'>
        <ChevronLeft className='h-4 w-4' />
        Voltar a timeline
      </Link>
      <NewMemoryForm />
    </div>
  )
}
