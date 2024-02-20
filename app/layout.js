import './globals.css'
import {NavBar} from './components/NavBar'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>VYarn</title>
      </head>
      <body>
          <NavBar/>
        {children}
      </body>
    </html>
  )
};