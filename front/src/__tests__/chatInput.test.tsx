import * as React from 'react';
import { render, screen } from '@testing-library/react';
import ChatInput from '../components/ChatInput';

describe('rendering chat input', () => {
  test('input rendered', () => {
    const mockFn = jest.fn();
    render(<ChatInput postMessage={mockFn} />);
    const input = screen.getByRole('msgInput');
    expect(input).toBeInTheDocument();
  });

  test('input button rendered', () => {
    const mockFn = jest.fn();
    render(<ChatInput postMessage={mockFn} />);
    const button = screen.getByRole('inputBtn');
    expect(button).toBeInTheDocument();
  });
});
