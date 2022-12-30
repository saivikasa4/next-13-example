"use client"

import Link from "next/link"
import { usePost } from "./Post.hooks"

interface PageProps {
  params: {
    slug: string
  }
}

function Post({ params }: PageProps) {
  const { post, isLoading, error } = usePost({ postId: params.slug })

  if (isLoading) {
    return <p>Loading post...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  return post ? (
    <div>
      <Link href="/dashboard" className="text-xs text-blue-500 block mb-2">
        Back to dashboard
      </Link>
      <h1 className="text-xl md:text-3xl font-bold mb-5">{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </div>
  ) : null
}

export default Post
