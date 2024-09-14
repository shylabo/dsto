'use client'
import Image from 'next/image'
import Link from 'next-intl/link'
import { blur } from './styles'
import useHover from '@/hooks/useHover'
import { PostSingle } from '@/types/getPosts'

interface WorkCardProps {
  post: PostSingle
}

const WorkCard: React.FC<WorkCardProps> = ({ post }) => {
  const { isHovered, handleHover, handleHoverOut } = useHover()
  const yearTag = post.node.tags.nodes.find((tag) => Number(tag.name))
  const categoryTags = post.node.tags.nodes.filter((tag) => !Number(tag.name))

  return (
    <div className="grid grid-cols-1 sm:grid-cols-5 w-full sm:gap-x-4">
      <Link
        href={`/works/${post.node.id}`}
        className="sm:col-span-3"
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
      >
        <Image
          src={post.node.featuredImage?.node.sourceUrl ?? '/images/default-eye-catch.png'}
          alt={`Cover Image for ${post.node.title}`}
          width={1200}
          height={0}
          style={{ aspectRatio: '3/2' }}
          className={`object-cover ${blur} ${isHovered && 'blur-xs'}`}
        />
      </Link>
      <div className="flex flex-col pt-4 px-5 sm:p-0 gap-y-4 sm:gap-y-8 w-full sm:col-span-2">
        <Link
          href={`/works/${post.node.id}`}
          className={`flex justify-between gap-x-2 w-max ${blur} ${isHovered && 'blur-xs'}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverOut}
        >
          {post.node.title}
        </Link>
        <Link
          href={`/works/${post.node.id}`}
          className={`flex items-center gap-x-2 w-max ${blur} ${isHovered && 'blur-xs'}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverOut}
        >
          {categoryTags.length > 0 &&
            categoryTags.map((tag) => (
              <div key={tag.id}>
                <span>{tag.name}</span>
              </div>
            ))}
          {yearTag && (
            <>
              <span>|</span>
              <span>{yearTag.name}</span>
            </>
          )}
        </Link>
      </div>
    </div>
  )
}

export default WorkCard
