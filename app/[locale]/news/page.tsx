import Link from 'next-intl/link'

import { getPosts } from '@/lib/api'
import { Locale } from '@/middleware'
import { blur } from '@/components/styles'

interface Props {
  params: { locale: Locale }
}

const NewsIndex: React.FC<Props> = async ({ params: { locale } }) => {
  const categoryName = `news-${locale}`
  const { edges: posts } = await getPosts(categoryName, locale.toUpperCase())
  return (
    <div className="flex flex-col justify-center min-h-[calc(100dvh-70px)] lg:min-h-screen px-5 lg:px-0 pb-[75px] lg:pb-0">
      <ul className="space-y-7">
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
