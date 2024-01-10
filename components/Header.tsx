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
    <header className={cn('flex items-center justify-between w-full p-4', className)}>
      <Link href="/" className="inline-block z-50" onClick={handleMenuClose}>
        <Image src="/images/logo.png" alt="company logo" width={40} height={40} />
      </Link>

      <nav className={isOpen ? 'z-40 bg-primary fixed top-0 right-0 bottom-0 left-0 h-screen flex flex-col' : 'hidden'}>
        <ul className={isOpen ? 'flex h-screen justify-center items-center flex-col gap-y-12 text-xl' : 'hidden'}>
          {navItems.map((item) => (
            <li key={item.value}>
              <Link onClick={handleMenuOpen} href={item.destination}>
                {item.label}
              </Link>
            </li>
          ))}
          <LocaleSwitcher />
        </ul>
      </nav>

      <button className="z-50 space-y-2 md:hidden" onClick={handleMenuOpen}>
        <span
          className={
            isOpen
              ? 'block w-8 h-0.5 bg-gray-900 translate-y-2.5 rotate-45 duration-300'
              : 'block w-8 h-0.5 bg-gray-900 duration-300'
          }
        />
        <span className={isOpen ? 'block opacity-0 duration-300' : 'block w-8 h-0.5 bg-gray-900 duration-300'} />
        <span
          className={
            isOpen ? 'block w-8 h-0.5 bg-gray-900 -rotate-45 duration-300' : 'block w-8 h-0.5 bg-gray-900 duration-300'
          }
        />
      </button>
    </header>
  )
}

export default Header
