import { test, expect } from "@playwright/test"

test("Homepage has title and link to login page", async ({ page }) => {
  await page.goto("/")

  await expect(page).toHaveTitle("Example App")

  const loginLink = page.getByRole("link", { name: "Login" })

  await expect(loginLink).toHaveAttribute("href", "/accounts/login")

  await loginLink.click()

  await expect(page).toHaveURL(/.*login/)
})
