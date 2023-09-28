import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <h1 className='text-4xl text-center my-6'>Welcome to Boxing World </h1>
      <p className='text-2xl text-center mb-10'>Get trained by professional coaches </p>
      <p className='text-lg text-center mb-10'>
        <Link href="/">Home</Link>
      </p>

        {children}
        </body>
    </html>
  )
}
