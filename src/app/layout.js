import localFont from 'next/font/local'

import Favicon from './icon.ico'
import '../styles/default.scss'

const ChenYuluoyan = localFont({ src: '../../public/fonts/ChenYuluoyan-Thin.ttf' })

export const metadata = {
  icons: [{ rel: 'icon', url: Favicon.src }],
  title: 'FU & LIN Wedding Invitation',
  description: 'Joyfully invite you to our wedding.',
  openGraph: {
    images: ['../../public/2X0A4321.jpg']
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
