import { getPostById } from '@/lib/api'

interface NewsPageProps {
  params: {
    id: string
  }
}

const NewsPage: React.FC<NewsPageProps> = async ({ params: { id } }) => {
  const originalId = decodeURIComponent(id)
  const post = await getPostById(originalId)
  return (
    <article className="custom-article pt-10 md:pt-32">
      <div className="text-xl pb-10 text-center md:text-left" dangerouslySetInnerHTML={{ __html: post.title }} />
      <div
        className="text-sm leading-5 md:leading-6 pb-16 md:pb-0"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  )
}

export default NewsPage
