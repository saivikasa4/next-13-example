async function logout() {
  const response = await fetch("http://localhost:3000/api/auth/logout")
  if (response.ok) {
    return true
  }

  return false
}

export default logout
