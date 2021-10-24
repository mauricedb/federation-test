import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Movies component', () => {
  render(<App />);
  const linkElement = screen.getByText(/movies/i);
  expect(linkElement).toBeInTheDocument();
});
