import React from 'react';
import { Typography, Button,Box, Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import AppBar from '../../components/AppBar';
import AddIcon from '@mui/icons-material/Add';

import AuthWrapper from '../../utils/AuthWrapper';

const Dashboard = () => {
    const prospects = [
        // ... your prospects data here
      ];
    
      const handleAddProspect = () => {
        // Handle the add prospect action
      };
  
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1 }}>
          {/* Placeholder for scorecards */}
          <Card sx={{flexGrow:1, m:2}}>
            <CardContent>
              <Typography variant="h5" component="div">Scorecard 1</Typography>
              {/* Content */}
            </CardContent>
          </Card>
          <Card sx={{flexGrow:1, m:2}}>
            <CardContent>
              <Typography variant="h5" component="div">Scorecard 2</Typography>
              {/* Content */}
            </CardContent>
          </Card>
          <Card sx={{flexGrow:1, m:2}}>
            <CardContent>
              <Typography variant="h5" component="div">Scorecard 3</Typography>
              {/* Content */}
            </CardContent>
          </Card>
          {/* Add more scorecards as needed */}
        </Box>
        <TableContainer component={Paper} sx={{ mx: 3, mb: 3, width: 'auto' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
            {/* <Typography variant="h6">Prospects</Typography> */}
            <Button variant="contained" size='small' startIcon={<AddIcon />} onClick={handleAddProspect}>
              Prospect
            </Button>
          </Box>
          <Table sx={{ minWidth: 650, width: '100%' }} aria-label="prospects table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Company</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Phone</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {prospects.map((prospect) => (
                <TableRow key={prospect.id}>
                  <TableCell component="th" scope="row">{prospect.name}</TableCell>
                  <TableCell align="right">{prospect.company}</TableCell>
                  <TableCell align="right">{prospect.email}</TableCell>
                  <TableCell align="right">{prospect.phone}</TableCell>
                  <TableCell align="right">{prospect.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    );
};


const DashboardPage = AuthWrapper(Dashboard);
export default DashboardPage;
