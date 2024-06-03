// src/pages/api/auth/login.ts

import { signIn } from 'next-auth/react'

export default signIn('credentials')
