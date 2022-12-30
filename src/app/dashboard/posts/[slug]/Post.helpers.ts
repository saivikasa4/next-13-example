import { BASE_URL } from "@/constants"

export async function getPost(postId: string) {
  const response = await fetch(`${BASE_URL}/api/posts/${postId}`)
  const post = await response.json()

  return post
}
