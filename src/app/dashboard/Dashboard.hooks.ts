"use client"

import { useEffect, useState } from "react"
import { getPosts } from "./Dashboard.helpers"

export function usePosts() {
  const [posts, setPosts] = useState<any[]>([])

  async function fetchPosts() {
    const { posts } = await getPosts()
    setPosts(posts)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return posts
}
