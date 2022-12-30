"use client"

import { TPost } from "@/types"
import { useEffect, useState } from "react"
import { getPost } from "./Post.helpers"

export function usePost({ postId }: { postId: string }) {
  const [post, setPost] = useState<TPost | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    async function fetchPosts(postId: string) {
      try {
        const { post } = await getPost(postId)
        setPost(post)
        setIsLoading(false)
      } catch (error) {
        setError(error)
        setIsLoading(false)
      }
    }

    fetchPosts(postId)
  }, [postId])

  return { post, isLoading, error }
}
