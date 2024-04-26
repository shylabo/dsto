import { getPostById } from '@/lib/api'

interface WorkPageProps {
  params: {
    id: string
  }
}

const WorkPage: React.FC<WorkPageProps> = async ({ params: { id } }) => {
  const originalId = decodeURIComponent(id)
  const post = await getPostById(originalId)

  const year = post.date.split('-')[0]
  return (
    <article className="custom-article lg:pt-[122px] lg:pr-20 pb-20 sm:pb-[120px] lg:pb-40">
      <div className="flex justify-center lg:justify-between pb-8 lg:pb-10">
        <div
          className="text-base sm:text-xl text-center lg:text-left"
          dangerouslySetInnerHTML={{ __html: post.title }}
        />
        <p className="hidden lg:block">{year}</p>
      </div>
      <div className="text-sm leading-5 lg:leading-6" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}

export default WorkPage
