import localFont from 'next/font/local'

import Favicon from './icon.ico'
import '../styles/default.scss'

const ChenYuluoyan = localFont({ src: '../../public/fonts/ChenYuluoyan-Thin.ttf' })

const isProd = process.env.NODE_ENV === 'production'
const rootUrl = process.env.NEXT_PUBLIC_ROOT_URL

export const metadata = {
  icons: {
    icon: [
      {
        rel: 'icon',
        url: Favicon.src
      }
    ],
    apple: {
      url: isProd ? `${rootUrl}/icon.png` : '../../public/icon.png'
    }
  },
  title: 'FU & LIN Wedding Invitation',
  description: 'Joyfully invite you to our wedding.',
  openGraph: {
    images: isProd ? `${rootUrl}/2X0A4321.webp` : '../../public/2X0A4321.webp'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang='zh-TW'>
      <body className={ChenYuluoyan.className}>
        {children}
      </body>
    </html>
  )
}
