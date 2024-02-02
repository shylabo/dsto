import Image from 'next/image'
import Link from 'next-intl/link'

const WorkCard = ({ post }) => {
  const year = post.date.split('-')[0]
  const tag = post.tags.nodes[0]?.name

  return (
    <Link
      href={`/works/${post.id}`}
      className="grid grid-cols-1 sm:grid-cols-5 w-full sm:gap-x-4 hover:blur-sm transition"
    >
      <Image
        src={post.featuredImage?.node.sourceUrl ?? '/images/default-eye-catch.png'}
        alt={`Cover Image for ${post.title}`}
        width={1200}
        height={0}
        style={{ aspectRatio: '3/2' }}
        className="object-cover sm:col-span-3"
      />
      <div className="flex flex-col pt-5 px-5 sm:p-0 gap-y-5 sm:gap-y-11 w-full sm:col-span-2">
        <p className="flex justify-between gap-x-2">{post.title}</p>
        <p className="flex items-center gap-x-2">
          {tag && (
            <>
              <span> {tag} </span>
              <span>|</span>
            </>
          )}
          <span>{year}</span>
        </p>
      </div>
    </Link>
  )
}

export default WorkCard
