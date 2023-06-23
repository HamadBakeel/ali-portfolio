import './globals.css'
import Sidebar from '../components/sidebar';


import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ali AL-roaini',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className+" flex h-screen"}>
        <Sidebar/>
        <div className='pt-[60px] pl-[80px]'>
          {children}
        </div>

      </body>
    </html>
  )
}
