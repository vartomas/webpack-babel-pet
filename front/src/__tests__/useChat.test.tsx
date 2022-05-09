import { QueryClient, QueryClientProvider } from 'react-query';
import { act, renderHook } from '@testing-library/react-hooks';
import { useChat } from '../hooks/useChat';

describe('useChat hook', () => {
  test('menu open', () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: any }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;

    const { result: hook } = renderHook(() => useChat('asd', 'adsft4n3k'), { wrapper });
    act(() => {
      hook.current.handleMenuOpen();
    });
    expect(hook.current.menuOpen).toBe(true);
  });

  test('menu close', () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: { children: any }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;

    const { result: hook } = renderHook(() => useChat('asd', 'asdrt4334g'), { wrapper });
    act(() => {
      hook.current.handleMenuClose();
    });
    expect(hook.current.menuOpen).toBe(false);
  });
});
