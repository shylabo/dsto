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
    next: {
      revalidate: 60,
    },
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getPostById(id: string) {
  const data = await fetchAPI(
    `
    query Post($id: ID!) {
      post(id: $id) {
        id
        title
        content
        date
        status
      }
    }`,
    {
      variables: { id },
    }
  )
  return data.post
}

export async function getPosts(categoryName: string) {
  const data = await fetchAPI(
    `
    query Posts($categoryName: String!) {
      posts(first: 20, where: {categoryName: $categoryName, orderby: { field: DATE, order: DESC } }) {
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
      variables: { categoryName },
    }
  )

  return data?.posts
}
