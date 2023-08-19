import styles from '../styles/globals.css'
import { Nunito } from 'next/font/google'
import Link from 'next/link'
import Navigation from '../components/Navigation'

const font = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '700']
})

export const metadata = {
  title: 'Next.JS v13',
  description: 'Practice Next v13 in react',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navigation />
        
        {children}
      </body>
    </html>
  )
}
