import { TRegisterForm } from "@/types"

export async function register(form: TRegisterForm) {
  const response = await fetch("/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  })

  return response.status
}
