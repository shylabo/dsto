interface Tag {
  id: string
  name: string
}

interface FeaturedImage {
  node: {
    sourceUrl: string
  }
}

export interface PostSingle {
  node: {
    id: string
    slug: string
    title: string
    date: string
    excerpt: string
    featuredImage: FeaturedImage
    tags: {
      nodes: Tag[]
    }
  }
}

export interface PostCollection {
  edges: PostSingle[]
}
