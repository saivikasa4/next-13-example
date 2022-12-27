import { TLoginForm } from "@/types"

export async function login(form: TLoginForm) {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  })

  return response.status
}
