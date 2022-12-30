"use client"

import Link from "next/link"
import { usePosts } from "./Dashboard.hooks"

function Posts() {
  const posts = usePosts()

  return (
    <section className="mt-10">
      <h2 className="text-xl md:text-2xl font-bold mb-5">All Posts</h2>
      <div className="grid md:grid-cols-4 gap-4">
        {posts &&
          posts.length > 0 &&
          posts.map((post: any) => (
            <Link
              key={post.id}
              href="/dashboard/post/create"
              className="md:w-[160px] md:h-[160px] font-medium hover:bg-gray-50 hover:text-black transition-all duration-150 ease-in-out dark:hover:text-black rounded-xl flex items-center justify-center text-white border border-white"
            >
              {post.title}
            </Link>
          ))}
      </div>
    </section>
  )
}

export default Posts
