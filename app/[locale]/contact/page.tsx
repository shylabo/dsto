import { FaInstagram } from 'react-icons/fa6'

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-7 min-h-[calc(100vh-75px)] md:min-h-screen pb-[75px] md:p-0">
      <a href="mailto:keishi.tomiya@d-s-to.com">keishi.tomiya@d-s-to.com</a>
      <a href="https://www.instagram.com/d_s_to" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={24} />
      </a>
    </div>
  )
}

export default page
