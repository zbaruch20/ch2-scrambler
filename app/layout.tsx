import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.css'
import './globals.css'
import BootstrapClient from './components/bootstrap-client'
import Header from './components/header'
import Footer from './components/footer'


export const metadata: Metadata = {
  title: "Corner Helicopter 2x2 Scrambler",
  description: "Scrambler for the Corner Helicopter 2x2 twisty puzzle",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  )
}
