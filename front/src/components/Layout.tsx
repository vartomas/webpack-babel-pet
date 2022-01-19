import { Box, Paper } from '@mui/material';

const Layout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: ['column', 'column', 'row'], height: '100vh' }}>
      <Paper sx={{ width: [1, 1, 200], height: [50, 50, 1] }}></Paper>
      <Box sx={{ flex: 1, height: 1 }}></Box>
    </Box>
  );
};

export default Layout;
