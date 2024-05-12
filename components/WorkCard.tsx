'use client'
import Image from 'next/image'
import Link from 'next-intl/link'
import { blur } from './styles'
import { useState } from 'react'

const WorkCard = ({ post }) => {
  const [isHovered, setIsHovered] = useState(false)
  const year = post.tags.nodes.find((tag) => Number(tag.name)).name
  const tags = post.tags.nodes.filter((tag) => !Number(tag.name))

  const handleHover = () => {
    setIsHovered(true)
  }

  const handleHoverOut = () => {
    setIsHovered(false)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-5 w-full sm:gap-x-4">
      <Link
        href={`/works/${post.id}`}
        className="sm:col-span-3"
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
      >
        <Image
          src={post.featuredImage?.node.sourceUrl ?? '/images/default-eye-catch.png'}
          alt={`Cover Image for ${post.title}`}
          width={1200}
          height={0}
          style={{ aspectRatio: '3/2' }}
          className={`object-cover ${blur} ${isHovered && 'blur-xs'}`}
        />
      </Link>
      <div className="flex flex-col pt-4 px-5 sm:p-0 gap-y-4 sm:gap-y-10 lg:gap-y-11 w-full sm:col-span-2">
        <Link
          href={`/works/${post.id}`}
          className={`flex justify-between gap-x-2 w-max ${blur} ${isHovered && 'blur-xs'}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverOut}
        >
          {post.title}
        </Link>
        <Link
          href={`/works/${post.id}`}
          className={`flex items-center gap-x-2 w-max ${blur} ${isHovered && 'blur-xs'}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverOut}
        >
          {tags.length > 0 &&
            tags.map((tag) => (
              <div key={tag.id}>
                <span>{tag.name}</span>
              </div>
            ))}
          <span>|</span>
          <span>{year}</span>
        </Link>
      </div>
    </div>
  )
}

export default WorkCard
