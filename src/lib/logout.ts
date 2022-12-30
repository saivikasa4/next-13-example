import { BASE_URL } from "@/constants"

async function logout() {
  const response = await fetch(`${BASE_URL}/api/auth/logout`)
  if (response.ok) {
    return true
  }

  return false
}

export default logout
