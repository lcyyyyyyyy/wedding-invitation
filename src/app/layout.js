import localFont from 'next/font/local'
import '../styles/default.scss'

const ChenYuluoyan = localFont({ src: '../../public/fonts/ChenYuluoyan-Thin.ttf' })

export const metadata = {
  title: 'FU & LIN Wedding Invitation',
  description: 'Joyfully invite you to our wedding.'
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
