import Link from 'next/link'
import React from 'react'

const newsList = [
  {
    date: '2023.12',
    title: 'IFDA Gold Leaf 賞 受賞',
    url: '',
  },
  {
    date: '2023.12',
    title: 'Milan salone 2024 出展',
    url: '',
  },
  {
    date: '2023.12',
    title: 'スタッフ募集中　グラフィックデザイナー　１名',
    url: '',
  },
  {
    date: '2023.12',
    title: 'ZA faucet が Reddot Design Award 受賞',
    url: '',
  },
]

const page = () => {
  return (
    <section className="flex flex-col justify-center h-full px-5 -mt-32 md:mt-0 md:px-0">
      <ul className="space-y-7">
        {newsList.map((news) => (
          <li key={news.title}>
            <Link href={news.url} className="hover:blur-sm transition">
              {news.date} {news.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default page
