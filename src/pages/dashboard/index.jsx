import { Box } from '@mui/material';
import AppBar from '../../components/AppBar';
import AuthWrapper from '../../utils/AuthWrapper';
import background from '../../assets/bg_prospects.png';
import { styled } from '@mui/system';
import Scorecards from '../../components/Scorecards';
import ProspectsTable from '../../components/ProspectsTable';
import ProspectForm from '../../components/ProspectForm';
import React from 'react';

const Background = styled(Box) ({
    height: '100vh',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  });

const Dashboard = () => {
    const [modalOpen, setModalOpen] = React.useState(false);

    function onOpen() {
        // open the modal
        setModalOpen(true)
    }
    function onClose(){
        // close the modal
        setModalOpen(false)
    }
    function onSave(newProspectData){
        // save the new prospect data
        console.log(newProspectData)
    }

    return (
        <Background image={background}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar />
                <Scorecards />
                <ProspectsTable onOpen={onOpen}/>
                <ProspectForm open={modalOpen} onOpen={onOpen} onClose={onClose} onSave={onSave}  />
            </Box>
        </Background>
    );
};


const DashboardPage = AuthWrapper(Dashboard);
export default DashboardPage;
