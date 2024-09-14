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
    <ul className="flex flex-col items-start gap-y-9 lg:gap-y-10 pb-20 lg:pt-20 sm:px-10 lg:px-0">
      {posts.map((post) => (
        <li key={post.node.id} className="w-full">
          <WorkCard post={post} />
        </li>
      ))}
    </ul>
  )
}

export default WorksIndex
