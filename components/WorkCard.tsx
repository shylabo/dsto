import Image from 'next/image'
import Link from 'next-intl/link'

const WorkCard = ({ post }) => {
  const year = post.date.split('-')[0]
  const tag = post.tags.nodes[0]?.name

  return (
    <Link href={`/works/${post.id}`} className="hover:blur-sm transition">
      <Image
        src={post.featuredImage?.node.sourceUrl ?? '/images/default-eye-catch.png'}
        alt={`Cover Image for ${post.title}`}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100vw', height: '40vh' }}
        className="object-cover"
      />
      <div className="flex justify-between px-5 sm:px-0">
        <p className="flex justify-between gap-x-2">
          {post.title}
          {tag && (
            <>
              <span>|</span> <span> {tag}</span>
            </>
          )}
        </p>
        <p>{year}</p>
      </div>
    </Link>
  )
}

export default WorkCard
