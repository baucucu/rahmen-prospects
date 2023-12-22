import { Box } from '@mui/material';
import AppBar from '../../components/AppBar';
import AuthWrapper from '../../utils/AuthWrapper';
import background from '../../assets/bg_prospects.png';
import { styled } from '@mui/system';
import Scorecards from '../../components/Scorecards';
import ProspectsTable from '../../components/ProspectsTable';

const Background = styled(Box) ({
    height: '100vh',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  });

const Dashboard = () => {

    return (
        <Background image={background}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar />
                <Scorecards />
                <ProspectsTable />
            </Box>
        </Background>
    );
};


const DashboardPage = AuthWrapper(Dashboard);
export default DashboardPage;
