import Link from 'next-intl/link'

import { getPosts } from '@/lib/api'
import { Locale } from '@/middleware'
import { blur, mainHeight } from '@/components/styles'

interface Props {
  params: { locale: Locale }
}

const NewsIndex: React.FC<Props> = async ({ params: { locale } }) => {
  const categoryName = `news-${locale}`
  const { edges: posts } = await getPosts(categoryName, locale.toUpperCase())
  return (
    <div className={`flex flex-col justify-center ${mainHeight} px-5 sm:px-[42px] lg:px-0 pb-[75px] lg:pb-0`}>
      <ul className="space-y-7 sm:text-xl">
        {posts.map(({ node: post }) => {
          const year = post.date.split('-')[0]
          const month = post.date.split('-')[1]
          return (
            <li key={post.id}>
              <Link href={`/news/${post.id}`} className={`${blur}`}>
                {year}.{month} {post.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default NewsIndex
