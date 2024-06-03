// src/pages/api/auth/[...nextauth].ts

import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Add custom logic to validate credentials
        if (credentials.username === 'test@example.com' && credentials.password === 'password') {
          return Promise.resolve({ id: 1, name: 'Test User', email: 'test@example.com' })
        } else {
          // Return null if credentials are invalid
          return Promise.resolve(null)
        }
      },
    }),
  ],
  session: {
    jwt: true,
  },
  pages: {
    signIn: '/auth/login',
    signOut: '/api/auth/logout',
  },
})
// src/pages/api/auth/[...nextauth].ts

import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Add custom logic to validate credentials
        if (credentials.username === 'test@example.com' && credentials.password === 'password') {
          return Promise.resolve({ id: 1, name: 'Test User', email: 'test@example.com' })
        } else {
          // Return null if credentials are invalid
          return Promise.resolve(null)
        }
      },
    }),
  ],
  session: {
    jwt: true,
  },
  pages: {
    signIn: '/auth/login',
    signOut: '/api/auth/logout',
  },
})
