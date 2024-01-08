'use client'

import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'

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
  return (
    <aside className={cn('h-screen py-16', className)}>
      {/* Menu wrapper */}
      <div className="h-full flex flex-col justify-between text-base">
        <div>
          <Link href="/" className="inline-block">
            <Image src="/images/logo.png" alt="company logo" width={92} height={93} />
          </Link>
          <nav className="pt-28 pl-11">
            <ul className="space-y-8">
              {navItems.map((item) => (
                <li key={item.value}>
                  <Link href={item.destination} className="hover:blur-sm transition">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div onClick={() => alert('todo')} className="pl-11 hover:blur-sm transition" role="button">
          En
        </div>
      </div>
    </aside>
  )
}

export default SideMenu
