import React from 'react'
import Link from 'next-intl/link'

import { getPosts } from '@/lib/api'

interface Props {
  params: { locale: string }
}

const NewsIndex: React.FC<Props> = async ({ params: { locale } }) => {
  const { edges: posts } = await getPosts('News')
  return (
    <section className="flex flex-col justify-center h-full px-5 -mt-32 md:mt-0 md:px-0">
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
    </section>
  )
}

export default NewsIndex
