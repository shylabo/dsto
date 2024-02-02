import { getPostById } from '@/lib/api'

interface NewsPageProps {
  params: {
    id: string
  }
}

const NewsPage: React.FC<NewsPageProps> = async ({ params: { id } }) => {
  const originalId = decodeURIComponent(id)
  const post = await getPostById(originalId)

  const year = post.date.split('-')[0]
  const month = post.date.split('-')[1]
  return (
    <article className="custom-article pt-10 lg:pt-32 lg:pr-20">
      <div className="flex justify-center lg:justify-between pb-8 lg:pb-10">
        <div className="text-xl pb-10 text-center lg:text-left" dangerouslySetInnerHTML={{ __html: post.title }} />
        <p className="hidden lg:block">
          {year}.{month}
        </p>
      </div>
      <div
        className="text-sm leading-5 lg:leading-6 pb-16 lg:pb-0"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  )
}

export default NewsPage
