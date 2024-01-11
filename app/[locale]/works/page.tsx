import { getPosts } from '@/lib/api'
import WorkCard from '@/components/WorkCard'
import { Locale } from '@/middleware'

interface Props {
  params: { locale: Locale }
}

const WorksIndex: React.FC<Props> = async ({ params: { locale } }) => {
  const categoryName = `works-${locale}`
  const { edges: posts } = await getPosts(categoryName, locale.toUpperCase())
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
