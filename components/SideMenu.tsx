'use client'

import Image from 'next/image'
import Link from 'next-intl/link'

import { cn } from '@/lib/utils'
import LocaleSwitcher from './LocaleSwitcher'
import { blur } from './styles'
import { useEffect, useRef } from 'react'

interface SideMenuProps {
  className?: string
}

export const navItems = [
  {
    value: 'works',
    label: 'Works',
    destination: '/works',
  },
  {
    value: 'news',
    label: 'News',
    destination: '/news',
  },
  {
    value: 'about',
    label: 'About',
    destination: '/about',
  },
  {
    value: 'contact',
    label: 'Contact',
    destination: '/contact',
  },
]

const SideMenu: React.FC<SideMenuProps> = ({ className }) => {
  const sidebarRef = useRef(null)

  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault()
    }

    const sidebar = sidebarRef.current
    if (sidebar) {
      // @ts-ignore
      sidebar.addEventListener('wheel', handleWheel, { passive: false })
    }

    return () => {
      if (sidebar) {
        // @ts-ignore
        sidebar.removeEventListener('wheel', handleWheel)
      }
    }
  }, [])

  return (
    <aside className={cn('h-screen py-20 pl-16', className)} ref={sidebarRef}>
      {/* Menu wrapper */}
      <div className="h-full flex flex-col justify-between">
        <div>
          <Link href="/" className={cn('inline-block -mt-3')}>
            <Image src="/images/logo.png" alt="company logo" width={90} height={91} />
          </Link>
          <nav className="pt-20 pl-11">
            <ul className="space-y-8 text-xl">
              {navItems.map((item) => (
                <li key={item.value}>
                  <Link href={item.destination} className={blur}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <LocaleSwitcher className={cn('pl-11 pt-8 text-xl', blur)} />
      </div>
    </aside>
  )
}

export default SideMenu
