import { render, screen } from '@testing-library/react'
import { Main } from '.'

describe('<Main/>', () => {
  it('should render the heading', () => {
    //renderiza o componente
    render(<Main />)

    //busca o elemento e verifica a existência
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
  })

  it('should render the colors correctly', () => {
    //renderiza o componente
    const { container } = render(<Main />)

    //busca o elemento e verifica se existe a cor
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
