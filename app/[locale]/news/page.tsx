import Link from 'next-intl/link'

import { getPosts } from '@/lib/api'
import { Locale } from '@/middleware'

interface Props {
  params: { locale: Locale }
}

const NewsIndex: React.FC<Props> = async ({ params: { locale } }) => {
  const categoryName = `news-${locale}`
  const { edges: posts } = await getPosts(categoryName, locale.toUpperCase())
  return (
    <div className="flex flex-col justify-center min-h-[calc(100vh-75px)] md:min-h-screen px-5 md:px-0 pb-[75px] md:pb-0">
      <ul className="space-y-7">
        {posts.map(({ node: post }) => {
          const year = post.date.split('-')[0]
          const month = post.date.split('-')[1]
          return (
            <li key={post.id}>
              <Link href={`/news/${post.id}`} className="hover:blur-sm transition">
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
