import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './config/theme';
import ChatPage from './pages/ChatPage';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ChatPage />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
