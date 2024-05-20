import { notFound } from 'next/navigation'

const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query = '', { variables }: Record<string, any> = {}) {
  const headers = { 'Content-Type': 'application/json' }

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  }

  const res = await fetch(API_URL!, {
    headers,
    method: 'POST',
    body: JSON.stringify({
      query,
      variables,
    }),
    cache: 'no-store',
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getPostById(id: string, locale: string) {
  const query = `
    query Post($id: ID!, $languageCode: LanguageCodeEnum!) {
      post(id: $id) {
        id
        title
        content
        date
        status
        translation (language: $languageCode) {
          id
        }
        language{
          slug
        }
        tags {
          nodes {
            id
            name
          }
        }
      }
    }`

  try {
    const { post } = await fetchAPI(query, {
      variables: { id, languageCode: locale.toUpperCase() },
    })
    // Fetch localized content if the current locale doesn't match the language of the post
    if (post.language.slug !== locale) {
      const localizedPostId = post.translation.id
      if (localizedPostId) {
        const data = await fetchAPI(query, {
          variables: { id: localizedPostId, languageCode: locale.toUpperCase() },
        })
        return data.post
      } else {
        notFound()
      }
    }
    return post
  } catch (error: any) {
    console.error(error)
  }
}

export async function getPosts(categoryName: string, language: string) {
  const data = await fetchAPI(
    `
    query Posts($categoryName: String!, $language: LanguageCodeFilterEnum!) {
      posts(first: 20, where: {language:$language, categoryName: $categoryName, orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            id
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            tags {
              nodes {
                id
                name
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: { language, categoryName },
    }
  )

  return data?.posts
}
