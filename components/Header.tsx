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
    <header className={cn('sticky top-0 z-50 pl-4 px-5 py-[14px] sm:pl-9 sm:px-10 sm:py-[30px]', className)}>
      <div className="flex items-end justify-between w-full">
        <Link href="/" className="inline-block z-50" onClick={handleMenuClose}>
          <div className="relative h-[42px] w-[42px] sm:h-[70px] sm:w-[70px]">
            <Image src="/images/logo.png" alt="company logo" sizes="100%" fill className="object-contain" />
          </div>
        </Link>

        <nav
          className={isOpen ? 'z-40 bg-primary fixed top-0 right-0 bottom-0 left-0 h-screen flex flex-col' : 'hidden'}
        >
          <div
            className={
              isOpen ? 'flex h-screen pt-[70px] sm:pt-[130px] justify-center items-center flex-col text-xl' : 'hidden'
            }
          >
            <ul className="space-y-10 text-base">
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

        <button className="z-50 space-y-2 lg:hidden text-base sm:text-xl tracking-wider" onClick={handleMenuOpen}>
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>
    </header>
  )
}

export default Header
