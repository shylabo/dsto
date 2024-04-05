import { FaInstagram } from 'react-icons/fa6'

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-7 h-[calc(100dvh-70px)] lg:-ml-[330px] lg:h-screen pb-[75px] lg:pb-0">
      <a href="mailto:keishi.tomiya@d-s-to.com">keishi.tomiya@d-s-to.com</a>
      <a href="https://www.instagram.com/d_s_to" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={24} />
      </a>
    </div>
  )
}

export default page
