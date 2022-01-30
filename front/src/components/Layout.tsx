import { useEffect, useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, Button, Dialog, DialogContent, Divider, IconButton, Menu, MenuItem, Paper, TextField, Typography } from '@mui/material';
import { useProfile } from '../hooks/useProfile';

const Layout = () => {
  const [menuAnchor, setmenuAnchor] = useState<null | HTMLElement>(null);
  const [nameChangeDialogOpen, setNameChangeDialogOpen] = useState(false);
  const menuOpen = Boolean(menuAnchor);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setmenuAnchor(event.currentTarget);
  };

  useEffect(() => {
    if (nameChangeDialogOpen) {
      setmenuAnchor(null);
    }
  }, [nameChangeDialogOpen]);

  const { name, nameForm, onSubmit } = useProfile();

  const submitNameChange = () => {
    nameForm.handleSubmit(onSubmit)();
    setNameChangeDialogOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: ['column', 'column', 'row'], height: '100vh' }}>
      <Paper sx={{ width: [1, 1, 200], height: [50, 50, 1] }}>
        <Box sx={{ px: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 50 }}>
          <Typography>{name}</Typography>

          <IconButton size="small" onClick={handleClick}>
            <SettingsIcon fontSize="small" />
          </IconButton>

          <Menu anchorEl={menuAnchor} open={menuOpen} onClose={() => setmenuAnchor(null)}>
            <MenuItem key="name" onClick={() => setNameChangeDialogOpen(true)}>
              Change name
            </MenuItem>
          </Menu>
        </Box>

        <Divider />
      </Paper>

      <Box sx={{ flex: 1, height: 1 }}></Box>

      <Dialog open={nameChangeDialogOpen} onClose={() => setNameChangeDialogOpen(false)}>
        <DialogContent sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
          <TextField
            sx={{ minWidth: 300 }}
            autoComplete="off"
            variant="standard"
            label="Name"
            {...nameForm.register('name')}
            onKeyPress={(e) => e.key === 'Enter' && submitNameChange()}
          />

          <Button sx={{ mt: 2 }} onClick={submitNameChange}>
            Save
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Layout;
