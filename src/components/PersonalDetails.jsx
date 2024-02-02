import { AppBar, Button, Dialog, TextField } from '@mui/material'
import React from 'react'

const PersonalDetails = (props) => {
  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  }

  const next = (e) => {
    e.preventDefault();
    props.nextStep();
  }

  const {values, changeHandler} = props;

  return (
    <>
      <Dialog open fullWidth maxWidth="sm">
        <AppBar title="Enter Your Personal Details"/>
        <TextField 
           placeholder='Enter Your Occupation'
           label="Occupation"
           onChange={changeHandler("occupation")}
           defaultValue={values.occupation}
           margin='normal'
           fullWidth
        />
        <br />
        <TextField 
           placeholder='Enter Your City'
           label="City"
           onChange={changeHandler("city")}
           defaultValue={values.city}
           margin='normal'
           fullWidth
        />
        <br />
        <TextField 
           placeholder='Enter Your Gender'
           label="Gender"
           onChange={changeHandler("gender")}
           defaultValue={values.gender}
           margin='normal'
           fullWidth
           required
        />
        <br />
        <TextField 
           placeholder='Enter About Yourself'
           label="About"
           onChange={changeHandler("bio")}
           defaultValue={values.bio}
           margin='normal'
           fullWidth
        />
        <br />
        <Button color="secondary" variant="contained" onClick={back}>
            Back
        </Button>
        <Button color="primary" variant="contained" onClick={next}>
            Next
        </Button>
      </Dialog>
    </>
  )
}

export default PersonalDetails