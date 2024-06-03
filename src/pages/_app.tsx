// src/pages/_app.tsx

import { AuthProvider } from '../context/AuthContext'
import { Provider as SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </SessionProvider>
  )
}

export default MyApp
