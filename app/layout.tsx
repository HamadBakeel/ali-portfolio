import './globals.css'
import Sidebar from '../components/sidebar';

import { IBM_Plex_Sans } from 'next/font/google'

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'], 
  style: ['italic', 'normal'],
  weight: ['100', '200', '300', '400', '500', '600', '700']
})

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
      <body className={ibmPlexSans.className+" flex min-h-screen"}>
        <Sidebar/>
        <div className='pt-[60px] pl-[80px]'>
          {children}
        </div>
      </body>
    </html>
  )
}
