import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  DialogActions,
  Button,
  Select
} from '@mui/material';
import PropTypes from 'prop-types';

function ProspectModal({ open, onClose, onSave }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newProspectData = {
      companyName: formData.get('companyName'),
      // ... collect other form fields
    };
    onSave(newProspectData);
    onClose(); // Close the modal
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Add a New Prospect</DialogTitle>
      <DialogContent>
        <form id="prospectForm" onSubmit={handleSubmit}>
            {/* 
            a form with the following fields:
            1. Company Name : input text
            2. Founding Year : input number
            3. Stage : select from 1. Seed 2. Series A 3. Series B 4. Series C 5. Series D 6. Series E 7. Series F 8. Series G 9. Series H 10. IPO 11. Acquired 12. Other
            4. Location: input text
            5. Website : input text
            6. Company Email : input text
            7. Company Phone Number : input text
            8. Founder's First Name : input text
            9. Founder's Last Name : input text
            10. Founder's Email : input text
            11. Founder's LinkedIn : input text
            12. Data Source select from 1. Startplatz: https://www.startplatz.de/startups 2. Munich Startup: https://www.munich-startup.de/startups/ 3. Startup Map Berlin: https://bit.ly/485B54 4. Startups NRW: https://bit.ly/3v98pcM 5. Startbase: https://www.startbase.de/startups/ 6. EU Startups: https://bit.ly/3RuCQlc
            */}
            <TextField
                autoFocus
                margin="dense"
                id="companyName"
                label="Company Name"
                type="text"
                fullWidth
            />
            <TextField
                margin="dense"
                id="foundingYear"
                label="Founding Year"
                type="number"
                fullWidth
            />
            <Select
                margin="dense"
                id="stage"
                label="Stage"
                type="text"
                fullWidth
            >
                <option value="seed">Seed</option>
                <option value="seriesA">Series A</option>
                <option value="seriesB">Series B</option>
                <option value="seriesC">Series C</option>
                <option value="seriesD">Series D</option>
                <option value="seriesE">Series E</option>
                <option value="seriesF">Series F</option>
                <option value="seriesG">Series G</option>
                <option value="seriesH">Series H</option>
                <option value="ipo">IPO</option>
                <option value="acquired">Acquired</option>
                <option value="other">Other</option>
            </Select>
            <TextField
                margin="dense"
                id="location"
                label="Location"
                type="text"
                fullWidth
            />
            <TextField
                margin="dense"
                id="website"
                label="Website"
                type="text"
                fullWidth
            />
            <TextField
                margin="dense"
                id="companyEmail"
                label="Company Email"
                type="text"
                fullWidth
            />
            <TextField
                margin="dense"
                id="companyPhone"
                label="Company Phone"
                type="text"
                fullWidth
            />
            <TextField
                margin="dense"
                id="founderFirstName"
                label="Founder First Name"
                type="text"
                fullWidth
            />
            <TextField
                margin="dense"
                id="founderLastName"
                label="Founder Last Name"
                type="text"
                fullWidth
            />
            <TextField
                margin="dense"
                id="founderEmail"
                label="Founder Email"
                type="text"
                fullWidth
            />
            <TextField
                margin="dense"
                id="founderLinkedIn"
                label="Founder LinkedIn"
                type="text"
                fullWidth
            />
            <Select
                margin="dense"
                id="dataSource"
                label="Data Source"
                type="text"
                fullWidth
            >
                <option value="startplatz">Startplatz</option>
                <option value="munichStartup">Munich Startup</option>
                <option value="startupMapBerlin">Startup Map Berlin</option>
                <option value="startupsNRW">Startups NRW</option>
                <option value="startbase">Startbase</option>
                <option value="euStartups">EU Startups</option>
            </Select>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button type="submit" form="prospectForm">Save Prospect</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ProspectModal;

ProspectModal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
}
