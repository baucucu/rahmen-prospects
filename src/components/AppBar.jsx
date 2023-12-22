import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { getAuth } from 'firebase/auth';
import LogoutIcon from '@mui/icons-material/Logout';

const MyAppBar = () => {
  const auth = getAuth();

  const handleSignOut = () => {
    auth.signOut(); // Implement sign-out functionality with Firebase
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Prospects Management
        </Typography>
        <Button color="inherit" size="small" startIcon={<LogoutIcon />} onClick={handleSignOut}>Sign out</Button>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;