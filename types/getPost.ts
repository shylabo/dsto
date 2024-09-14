interface Translation {
  id: string
}

interface Language {
  slug: string
}

interface Tag {
  id: string
  name: string
}

export interface Post {
  id: string
  title: string
  content: string
  date: string
  status: string
  translation: Translation
  language: Language
  tags: {
    nodes: Tag[]
  }
}
