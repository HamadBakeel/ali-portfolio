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
  children: React.ReactNode, 
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={ibmPlexSans.className+" flex min-h-screen overflow-x-hidden"}>
        <Sidebar/>
        <div className='w-full'>
          {children}
        </div>
      </body>
    </html>
  )
}
