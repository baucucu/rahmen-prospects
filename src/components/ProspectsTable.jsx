import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


export default function ProspectsTable() {
    const prospects = [
        // ... your prospects data here
    ];
    
    const handleAddProspect = () => {
    // Handle the add prospect action
    };

    return(
        <TableContainer component={Paper} sx={{ mx: 3, mb: 3, width: 'auto' }} className='opaque'>
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
    )
}