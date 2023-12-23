import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { getAuth } from 'firebase/auth';
import LogoutIcon from '@mui/icons-material/Logout';
import PeopleIcon from '@mui/icons-material/People';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const MyAppBar = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    auth.signOut(); // Implement sign-out functionality with Firebase
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
            Prospects Management
          </Link>
        </Typography>
        <Box sx={{display:'flex', gap: 2}}>
          <Button color="inherit" size="small" startIcon={<PeopleIcon />} onClick={() => navigate("/users")}>Users</Button>
          <Button color="inherit" size="small" startIcon={<LogoutIcon />} onClick={handleSignOut}>Sign out</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;