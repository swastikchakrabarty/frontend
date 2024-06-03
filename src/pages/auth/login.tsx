// src/pages/auth/login.tsx

import { signIn } from 'next-auth/react'

export default function LoginPage() {
  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    await signIn('credentials', { callbackUrl: '/' })
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  )
}
