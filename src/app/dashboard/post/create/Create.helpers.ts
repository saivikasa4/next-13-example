import { BASE_URL } from "@/constants"

export async function createPost(title: string, content: string) {
  const response = await fetch(`${BASE_URL}/api/post/create`, {
    method: "POST",
    body: JSON.stringify({ title, content }),
    headers: {
      "Content-Type": "application/json",
    },
  })

  return response.status
}
