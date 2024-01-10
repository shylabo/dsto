import Link from 'next-intl/link'

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
    <article className="custom-article">
      <Link className="inline-block pl-4 md:pb-4 md:pl-0 underline" href={'/works'}>
        Back
      </Link>
      <div className="text-xl mb-8 text-center md:text-left" dangerouslySetInnerHTML={{ __html: post.title }} />
      <div
        className="text-sm leading-5 md:leading-6 pb-16 md:pb-0"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  )
}

export default WorkPage
