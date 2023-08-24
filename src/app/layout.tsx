import '/src/assets/globals.css'
import localFont from '@next/font/local'
// import '../assets/tailwindcss.css'

const poppins = localFont({
  src: [
    {
      path: '../../public/fonts/Poppins-Regular.ttf',
      weight: '400'
    },
    {
      path: '../../public/fonts/Poppins-Medium.ttf',
      weight: '500'
    },
    {
      path: '../../public/fonts/Poppins-SemiBold.ttf',
      weight: '600'
    },
    {
      path: '../../public/fonts/Poppins-Bold.ttf',
      weight: '700'
    },
    {
      path: '../../public/fonts/Poppins-ExtraBold.ttf',
      weight: '800'
    },
    {
      path: '../../public/fonts/Poppins-Black.ttf',
      weight: '900'
    },

  ],
  variable: '--font-Poppins'
})

export const metadata = {
  title: 'Wout Blomme',
  description: 'Portfolio Wout Blomme',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html  lang="en" className={`${poppins.variable} font-Poppins`}>
      <body className="bg-primary-400">{children}</body>
    </html>
  )
}
