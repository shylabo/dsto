'use client'

import { useState } from 'react'
import Link from 'next-intl/link'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import { navItems } from './SideMenu'
import LocaleSwitcher from './LocaleSwitcher'

interface HeaderProps {
  className?: string
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const handleMenuOpen = () => {
    setOpen(!isOpen)
    document.body.style.overflow = isOpen ? 'auto' : 'hidden'
  }

  const handleMenuClose = () => {
    setOpen(false)
    document.body.style.overflow = isOpen ? 'auto' : 'hidden'
  }

  return (
    <header className={cn('flex items-center justify-between w-full p-5 sm:p-10', className)}>
      <Link href="/" className="inline-block z-50" onClick={handleMenuClose}>
        <Image src="/images/logo.png" alt="company logo" width={42} height={42} />
      </Link>

      <nav className={isOpen ? 'z-40 bg-primary fixed top-0 right-0 bottom-0 left-0 h-screen flex flex-col' : 'hidden'}>
        <div className={isOpen ? 'flex h-screen justify-center items-center flex-col text-xl' : 'hidden'}>
          <ul className="space-y-10">
            {navItems.map((item) => (
              <li key={item.value}>
                <Link onClick={handleMenuOpen} href={item.destination}>
                  {item.label}
                </Link>
              </li>
            ))}
            <LocaleSwitcher className="pt-10" />
          </ul>
        </div>
      </nav>

      <button className="z-50 space-y-2 lg:hidden text-base tracking-wider" onClick={handleMenuOpen}>
        {isOpen ? 'Close' : 'Menu'}
      </button>
    </header>
  )
}

export default Header
