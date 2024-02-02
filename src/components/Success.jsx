import React from 'react'
import { Dialog, AppBar} from '@mui/material';

const Success = (props) => {
  return (
    <>
      <Dialog open fullWidth maxWidth="sm">
        <AppBar title="Success" />
        <h2>Thank You for your submission.</h2>
      </Dialog>
    </>
  )
}

export default Success