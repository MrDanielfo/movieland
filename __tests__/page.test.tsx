

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'; 
import Page from '../src/app/page';
import MovieBox from '@/app/components/MovieBox/MovieBox';

const moviesMock = [
  {
    id: 239394,
    title: 'Great Value',
    poster_path: 'https://google.com',
    release_date: '2024-02-22',
    vote_average: 7.43212,
    overview: 'Great story based on II World War'
  }
]

 
describe('Page', () => {
  it('renders h1 from the banner', () => {
    render(<Page />)
    const heading = screen.getByRole('heading', { level: 1 })
 
    expect(heading).toBeInTheDocument()
  })
})

describe('Banner', () => {
  it('renders the Banner with his Link button', () => {
    render(<Page />)
    expect(screen.getByText('See More').closest('a')).toBeInTheDocument();
  })
})

describe('Sidebar', () => {
  it('renders the Sidebar within the Page with the two Links button', () => {
    render(<Page />)
    expect(screen.getByTestId('go-home').closest('a')).toHaveAttribute('href', '/')
    expect(screen.getByTestId('login').closest('a')).toHaveAttribute('href', '/auth/login')
  })
})

test('renders MovieBox component with its data', () => {
  render(<MovieBox movieData={moviesMock[0]} />);
  // single image container
  expect(screen.getByTestId('small-movie')).toBeInTheDocument();
  // single image Link button to single page
  expect(screen.getByTestId('single-movie').closest('a')).toHaveAttribute('href', '/movie/Great Value')
});