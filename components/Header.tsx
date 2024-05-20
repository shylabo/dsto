'use client'

import { useState } from 'react'
import Link from 'next-intl/link'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import { navItems } from './SideMenu'
import LocaleSwitcher from './LocaleSwitcher'
import { blur } from './styles'
import { AnimatePresence, motion } from 'framer-motion'
import { notoSans } from '@/lib/font'

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
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={cn('z-50 w-screen px-5 pt-[14px] pb-9 sm:px-10 sm:py-[30px]', className)}
    >
      <div className="flex items-end justify-between w-full">
        <Link href="/" className={`inline-block z-50 ${blur}`} onClick={handleMenuClose}>
          <div className="relative h-[42px] w-[42px] sm:h-[70px] sm:w-[70px] -ml-[3px]">
            <Image src="/images/logo.png" alt="company logo" sizes="100%" fill className="object-contain" />
          </div>
        </Link>

        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="z-40 bg-primary fixed top-0 right-0 bottom-0 left-0 flex flex-col"
            >
              <div className="flex h-dvh pt-[70px] sm:pt-[130px] justify-center items-center flex-col text-xl">
                <ul className="space-y-9 text-base sm:text-xl">
                  {navItems.map((item) => (
                    <li key={item.value}>
                      <Link onClick={handleMenuOpen} href={item.destination} className={blur}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  <LocaleSwitcher className={`pt-10 ${blur}`} />
                </ul>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>

        <button
          className={`z-50 space-y-2 lg:hidden text-base sm:text-xl sm:pb-1 tracking-wider ${blur} ${notoSans.className}`}
          onClick={handleMenuOpen}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>
    </motion.header>
  )
}

export default Header
