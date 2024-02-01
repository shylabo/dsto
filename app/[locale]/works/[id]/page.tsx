import { getPostById } from '@/lib/api'

interface WorkPageProps {
  params: {
    id: string
  }
}

const WorkPage: React.FC<WorkPageProps> = async ({ params: { id } }) => {
  const originalId = decodeURIComponent(id)
  const post = await getPostById(originalId)
  return (
    <article className="custom-article pt-10 lg:pt-32">
      <div
        className="text-xl pb-8 lg:pb-10 text-center lg:text-left"
        dangerouslySetInnerHTML={{ __html: post.title }}
      />
      <div
        className="text-sm leading-5 lg:leading-6 pb-16 lg:pb-0"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  )
}

export default WorkPage
