import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface PostFrontmatter {
  title: string
  description: string
  date: string
  image?: string
  slug?: string
}

export interface Post {
  slug: string
  frontmatter: PostFrontmatter
  content: string
}

export async function getAllPosts(): Promise<Post[]> {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      // Garantir que data existe
      let date = data.date
      if (!date) {
        const stats = fs.statSync(fullPath)
        date = stats.birthtime.toISOString().split('T')[0]
      }

      return {
        slug: data.slug || slug,
        frontmatter: {
          title: data.title || 'Sem título',
          description: data.description || '',
          date: date,
          image: data.image,
        },
        content,
      }
    })
    .sort((a, b) => {
      if (a.frontmatter.date < b.frontmatter.date) {
        return 1
      } else {
        return -1
      }
    })

  return posts
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  // Tentar buscar pelo slug exato
  let fullPath = path.join(postsDirectory, `${slug}.md`)
  
  if (!fs.existsSync(fullPath)) {
    // Tentar buscar todos os posts e encontrar pelo campo slug
    const allPosts = await getAllPosts()
    const post = allPosts.find(p => p.slug === slug)
    if (post) {
      fullPath = path.join(postsDirectory, `${post.slug}.md`)
    } else {
      return null
    }
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  let date = data.date
  if (!date) {
    const stats = fs.statSync(fullPath)
    date = stats.birthtime.toISOString().split('T')[0]
  }

  return {
    slug: data.slug || slug,
    frontmatter: {
      title: data.title || 'Sem título',
      description: data.description || '',
      date: date,
      image: data.image,
    },
    content,
  }
}
