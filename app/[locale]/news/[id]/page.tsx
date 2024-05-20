import NotFound from '@/components/NotFound'
import { getPostById } from '@/lib/api'
import '@/styles/post.css'

interface NewsPageProps {
  params: {
    id: string
    locale: string
  }
}

const NewsPage: React.FC<NewsPageProps> = async ({ params: { id, locale } }) => {
  const originalId = decodeURIComponent(id)
  const post = await getPostById(originalId, locale)
  if (!post) return <NotFound locale={locale} />

  const year = post.date.split('-')[0]
  const month = post.date.split('-')[1]
  return (
    <article className="custom-article pb-20 sm:pb-[120px] lg:pb-40 lg:pt-[120px] lg:pr-20">
      <div className="flex justify-center items-end lg:justify-between pb-8 lg:pb-10">
        <div
          className="text-base sm:text-xl text-center lg:text-left px-4 md:px-0"
          dangerouslySetInnerHTML={{ __html: post.title }}
        />
        <span className="hidden lg:block">
          {year}.{month}
        </span>
      </div>
      <div className="leading-5 sm:leading-6" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}

export default NewsPage
