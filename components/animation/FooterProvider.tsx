'use client'

import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

const FooterProvider = ({ children }: { children: ReactNode }) => {
  const pathName = usePathname()

  if (pathName === '/password') return null
  if (pathName === '/not-found') return null
  return (
    <footer className="bottom-0 w-full xl:sticky  ">
      {children}
    </footer>
  )
}

export default FooterProvider
