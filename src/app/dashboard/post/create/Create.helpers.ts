import { BASE_URL } from "@/constants"

export async function createPost(
  title: string,
  content: string,
  isPublished: boolean
) {
  const response = await fetch(`${BASE_URL}/api/post/create`, {
    method: "POST",
    body: JSON.stringify({ title, content, published: isPublished }),
    headers: {
      "Content-Type": "application/json",
    },
  })

  return response.status
}
