import { getPosts } from '@/lib/api'
import WorkCard from '@/components/WorkCard'

interface Props {
  params: { locale: string }
}

const WorksIndex: React.FC<Props> = async ({ params: { locale } }) => {
  const { edges: posts } = await getPosts('Works')
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 lg:gap-x-20 lg:gap-y-16">
      {posts.map(({ node: post }) => (
        <li key={post.id}>
          <WorkCard post={post} />
        </li>
      ))}
    </ul>
  )
}

export default WorksIndex
