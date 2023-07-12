import Image from 'next/image'
import { Inter } from 'next/font/google'
import Calculadora from '@/components/Calculadora'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='w-screen h-screen'>
      <Calculadora />
    </main>
  )
}
