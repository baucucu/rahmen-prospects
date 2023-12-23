import React from 'react';
import { Box } from '@mui/material';
import AppBar from '../../components/AppBar';
import AuthWrapper from '../../utils/AuthWrapper';

const Users = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar />
            <h1>Users</h1>
        </Box>
    );
};


const UsersPage = AuthWrapper(Users);
export default UsersPage;