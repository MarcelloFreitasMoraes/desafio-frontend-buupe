import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '@/components/ui/button'

jest.mock('@/lib/utils', () => ({
  cn: (...classes: string[]) => classes.filter(Boolean).join(' '),
}))

describe('Button Component', () => {
  it('renders the button with default variant', () => {
    render(<Button>Click me</Button>)
    const buttonElement = screen.getByText('Click me')
    expect(buttonElement).toBeInTheDocument()
  })

  it('applies the correct variant class', () => {
    render(<Button variant="destructive">Delete</Button>)
    const buttonElement = screen.getByText('Delete')
    expect(buttonElement).toHaveClass('bg-destructive')
  })

  it('calls onClick when clicked', async () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Click me</Button>)

    const buttonElement = screen.getByText('Click me')
    await userEvent.click(buttonElement)

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('renders as a child component when asChild is true', () => {
    render(
      <Button asChild>
        <a href="/test">Link</a>
      </Button>
    )

    const linkElement = screen.getByText('Link')
    expect(linkElement).toBeInTheDocument()
    expect(linkElement.tagName).toBe('A')
  })
})