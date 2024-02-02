import { AppBar, Button, Dialog, List, ListItem, ListItemText } from '@mui/material'
import React from 'react'

const Confirm = (props) => {
  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  }
    
  const next = (e) => {
    e.preventDefault();
    props.nextStep();
  }
  const {values:{firstName, lastName, email, city, occupation, gender, bio}} = props;
  return (
    <>
       <Dialog open fullWidth maxWidth="sm">
        <AppBar />
        <List>
            <ListItem>
                <ListItemText primary="First Name" secondary={firstName}/>
            </ListItem>
            <ListItem>
                <ListItemText primary="Last Name" secondary={lastName}/>
            </ListItem>
            <ListItem>
                <ListItemText primary="Email" secondary={email}/>
            </ListItem>
            <ListItem>
                <ListItemText primary="Gender" secondary={gender}/>
            </ListItem>
            <ListItem>
                <ListItemText primary="Occupation" secondary={occupation}/>
            </ListItem>
            <ListItem>
                <ListItemText primary="City" secondary={city}/>
            </ListItem>
            <ListItem>
                <ListItemText primary="About" secondary={bio}/>
            </ListItem>  
        </List>
        <br />
        <Button color="secondary" variant="contained" onClick={back}>
            Back
        </Button>
        <Button color="primary" variant="contained" onClick={next}>
            Confirm & Continue
        </Button>
       </Dialog>
    </>
  )
}

export default Confirm