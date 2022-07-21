import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('full app rendering/navigating', () => {
  render(<App />, { wrapper: BrowserRouter });
  const titleElement = screen.getByText(/Git Repos!/i);
  expect(titleElement).toBeInTheDocument();

  userEvent.click(screen.getByText(/about/i));

  expect(screen.getByText(/Who are we/i)).toBeInTheDocument();
});
