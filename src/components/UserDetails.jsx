import React from 'react'
import { Dialog, AppBar, TextField, Button } from '@mui/material';

const UserDetails = (props) => {
  const next = (e) => {
    e.preventDefault();
    props.nextStep();
  }

  const {values, changeHandler} = props;

  return (
    <>
      <Dialog open fullWidth maxWidth="sm">
        <AppBar title="Enter User Details"/>
        <TextField 
           placeholder='Enter Your First Name'
           id='outlined-required'
           variant='outlined'
           label="First Name"
           onChange={changeHandler("firstName")}
           defaultValue={values.firstName}
           margin='normal'
           fullWidth
           required
        />
        <br />
        <TextField 
           placeholder='Enter Your Last Name'
           label="Last Name"
           onChange={changeHandler("lastName")}
           defaultValue={values.lastName}
           margin='normal'
           fullWidth
        />
        <br />
        <TextField 
           placeholder='Enter Your Email'
           label="Email"
           onChange={changeHandler("email")}
           defaultValue={values.email}
           margin='normal'
           fullWidth
           required
        />
        <br />
        <TextField
           placeholder='Enter Your Phone Number'
           label="Phone Number"
           value={values.phoneNumber}
           onChange={changeHandler("phoneNumber")}
           defaultValue={values.phoneNumber}
           type='tel'
           margin='normal'
           fullWidth
           required
        />
        <br />
        <Button color='primary' variant='contained' onClick={next}>
            Next
        </Button>
      </Dialog>
    </>
  )
}

export default UserDetails