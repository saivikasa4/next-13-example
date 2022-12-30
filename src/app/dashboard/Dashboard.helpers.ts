import { BASE_URL } from "@/constants"

export async function getPosts() {
  const response = await fetch(`${BASE_URL}/api/posts`)
  const posts = (await response).json()

  return posts
}
