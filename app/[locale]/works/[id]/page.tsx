import NotFound from '@/components/NotFound'
import { getPostById } from '@/lib/api'
import '@/styles/post.css'

interface WorkPageProps {
  params: {
    id: string
    locale: string
  }
}

const WorkPage: React.FC<WorkPageProps> = async ({ params: { id, locale } }) => {
  const originalId = decodeURIComponent(id)
  const post = await getPostById(originalId, locale)
  if (!post) return <NotFound locale={locale} />

  const yearTag = post.tags.nodes.find((tag) => Number(tag.name))
  return (
    <article className="custom-article pb-20 sm:pb-[120px] lg:pb-40 lg:pt-[122px] lg:pr-20">
      <div className="flex justify-center items-end lg:justify-between pb-8 lg:pb-10">
        <div
          className="text-base sm:text-xl text-center lg:text-left"
          dangerouslySetInnerHTML={{ __html: post.title }}
        />
        {yearTag && <span className="hidden lg:block">{yearTag.name}</span>}
      </div>
      <div className="leading-5 sm:leading-6" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}

export default WorkPage
