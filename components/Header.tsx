import Link from 'next/link'
import Image from 'next/image'
import { RxHamburgerMenu } from 'react-icons/rx'

import { cn } from '@/lib/utils'

interface HeaderProps {
  className?: string
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn('flex items-center justify-between w-full p-4', className)}>
      <Link href="/" className="inline-block">
        <Image src="/images/logo.png" alt="company logo" width={40} height={40} />
      </Link>
      <p className=" text-base">Menu</p>
    </header>
  )
}

export default Header
