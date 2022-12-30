import { render, screen } from "@testing-library/react"
import Home from "./page"
import "@testing-library/jest-dom"

describe("Homepage with 'Welcome! Home' heading", () => {
  it("renders a heading", () => {
    render(<Home />)

    const heading = screen.getByRole("heading", {
      name: /Welcome! Home/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
