import { FaInstagram } from 'react-icons/fa6'
import { notoSans } from '../../../lib/font'
import { blur } from '../../../components/styles'
import { cn } from '@/lib/utils'

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-7 h-[calc(100dvh-92px)] sm:h-[calc(100dvh-130px)] lg:h-screen lg:-ml-[330px] pb-[92px] sm:pb-[130px] lg:pb-0">
      <a href="mailto:keishi.tomiya@d-s-to.com" className={cn(notoSans.className, blur)}>
        keishi.tomiya@d-s-to.com
      </a>
      <a href="https://www.instagram.com/d_s_to" target="_blank" rel="noopener noreferrer" className={blur}>
        <FaInstagram size={24} />
      </a>
    </div>
  )
}

export default page
