'use client'

import { SessionProvider } from 'next-auth/react'
import { AppContextProvider } from '@/context/AppContext'
import { Toaster } from 'react-hot-toast'

export function Providers({ children }) {
  return (
    <SessionProvider>
      <AppContextProvider>
        <Toaster />
        {children}
      </AppContextProvider>
    </SessionProvider>
  )
}