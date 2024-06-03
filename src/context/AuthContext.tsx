// src/context/AuthContext.tsx

import { createContext, useContext } from 'react'
import { useSession } from 'next-auth/react'

interface AuthContextType {
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType>({ isAuthenticated: false })

export const AuthProvider: React.FC = ({ children }) => {
  const { data: session } = useSession()
  const isAuthenticated = !!session

  return <AuthContext.Provider value={{ isAuthenticated }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
