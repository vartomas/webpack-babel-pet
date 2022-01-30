import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import ChatPage from './components/ChatPage';
import { theme } from './config/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ChatPage />
    </ThemeProvider>
  );
};

export default App;
