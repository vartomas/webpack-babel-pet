import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ChatInput from '../components/ChatInput';

describe('rendering chat input', () => {
  test('input rendered', () => {
    const mockFn = jest.fn();
    render(<ChatInput postMessage={mockFn} />);
    const input = screen.getByRole<HTMLInputElement>('msgInput');
    expect(input).toBeInTheDocument();
  });

  test('input button rendered', () => {
    const mockFn = jest.fn();
    render(<ChatInput postMessage={mockFn} />);
    const button = screen.getByRole('inputBtn');
    expect(button).toBeInTheDocument();
  });

  test('can type message', () => {
    const mockFn = jest.fn();
    render(<ChatInput postMessage={mockFn} />);
    const input = screen.getByRole<HTMLInputElement>('msgInput');
    fireEvent.change(input, { target: { value: 'asd' } });
    expect(input.value).toBe('asd');
  });
});
