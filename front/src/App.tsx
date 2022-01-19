import { CssBaseline } from '@mui/material';
import Layout from './components/Layout';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './config/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  );
};

export default App;
