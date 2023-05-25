import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Know Yourself', () => {
  render(<App />);
  const text = screen.getByText(/Know Yourself/i);
  expect(text).toBeInTheDocument();
});

test('renders Know Your Opportunity', () => {
  render(<App />);
  const text = screen.getByText(/Know Your Opportunity/i);
  expect(text).toBeInTheDocument();
});

test('renders Be Prepared', () => {
  render(<App />);
  const text = screen.getByText(/Be Prepared/i);
  expect(text).toBeInTheDocument();
});

test('renders GitHub link', () => {
  render(<App />);
  const linkElement = screen.getByText(/BRamey/i);
  expect(linkElement).toBeInTheDocument();
});