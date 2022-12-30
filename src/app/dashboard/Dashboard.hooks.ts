"use client"

import { useEffect, useState } from "react"
import { getPosts } from "./Dashboard.helpers"

export function usePosts() {
  const [posts, setPosts] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<any>(null)

  async function fetchPosts() {
    try {
      const { posts } = await getPosts()
      setPosts(posts)
      setIsLoading(false)
    } catch (error) {
      setError(error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return { posts, isLoading, error }
}
