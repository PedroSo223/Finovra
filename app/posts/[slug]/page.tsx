import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface PostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post não encontrado | Finovra',
    }
  }

  const url = `https://finovra.com/posts/${post.slug}`
  
  return {
    title: `${post.frontmatter.title} | Finovra`,
    description: post.frontmatter.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      url: url,
      type: 'article',
      publishedTime: post.frontmatter.date,
      authors: ['Finovra'],
      images: post.frontmatter.image ? [{
        url: post.frontmatter.image,
        alt: post.frontmatter.title,
      }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: post.frontmatter.image ? [post.frontmatter.image] : [],
    },
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    datePublished: post.frontmatter.date,
    author: {
      '@type': 'Organization',
      name: 'Finovra',
    },
    image: post.frontmatter.image,
    url: `https://finovra.com/posts/${post.slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <article className="container-custom py-12">
        <header className="mb-8">
          <div className="text-sm text-[#00C27A] mb-4 font-semibold">
            {new Date(post.frontmatter.date).toLocaleDateString('pt-BR')}
          </div>
          <h1 className="text-4xl font-bold mb-4 text-[#0A1F44]">{post.frontmatter.title}</h1>
          <p className="text-xl text-gray-600">{post.frontmatter.description}</p>
        </header>

        {post.frontmatter.image && (
          <div className="relative h-96 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.frontmatter.image}
              alt={post.frontmatter.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="prose-custom">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </>
  )
}
