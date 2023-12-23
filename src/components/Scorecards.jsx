import { Typography, Box, Card, CardContent} from '@mui/material';

export default function Scorecards() {
    return (
        <Box sx={{ display: 'flex', p: 1 }}>
            {/* Placeholder for scorecards */}
            <Card sx={{flexGrow:1, m:2}} className='opaque'>
                <CardContent>
                <Typography variant="h5" component="div">Scorecard 1</Typography>
                {/* Content */}
                </CardContent>
            </Card>
            <Card sx={{flexGrow:1, m:2}} className='opaque'>
                <CardContent>
                <Typography variant="h5" component="div">Scorecard 2</Typography>
                {/* Content */}
                </CardContent>
            </Card>
            <Card sx={{flexGrow:1, m:2}} className='opaque'>
                <CardContent>
                <Typography variant="h5" component="div">Scorecard 3</Typography>
                {/* Content */}
                </CardContent>
            </Card>
            {/* Add more scorecards as needed */}
        </Box>
    )
}


