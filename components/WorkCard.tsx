import Image from 'next/image'
import Link from 'next-intl/link'
import { blur } from './styles'

const WorkCard = ({ post }) => {
  const year = post.date.split('-')[0]
  const tag = post.tags.nodes[0]?.name

  return (
    <div className="grid grid-cols-1 sm:grid-cols-5 w-full sm:gap-x-4">
      <Link href={`/works/${post.id}`} className="sm:col-span-3">
        <Image
          src={post.featuredImage?.node.sourceUrl ?? '/images/default-eye-catch.png'}
          alt={`Cover Image for ${post.title}`}
          width={1200}
          height={0}
          style={{ aspectRatio: '3/2' }}
          className={`object-cover ${blur}`}
        />
      </Link>
      <div className="flex flex-col pt-4 px-5 sm:p-0 gap-y-4 sm:gap-y-10 lg:gap-y-11 w-full sm:col-span-2">
        <Link href={`/works/${post.id}`} className={`flex justify-between gap-x-2 w-max ${blur}`}>
          {post.title}
        </Link>
        <Link href={`/works/${post.id}`} className={`flex items-center gap-x-2 w-max ${blur}`}>
          {tag && (
            <>
              <span> {tag} </span>
              <span>|</span>
            </>
          )}
          <span>{year}</span>
        </Link>
      </div>
    </div>
  )
}

export default WorkCard
