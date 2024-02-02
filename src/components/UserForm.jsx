import React, { useState } from 'react'
import UserDetails from './UserDetails'
import PersonalDetails from './PersonalDetails'
import Confirm from './Confirm'
import Success from './Success'

const initialState = {
  step:1,
  firstName:"",
  lastName:"",
  email:"",
  occupation:"",
  city:"",
  gender:"",
  phoneNumber:"",
}

const UserForm = () => {
  const [state,setState] = useState(initialState);
  const { step } = state;
  const {firstName, lastName, email, occupation, city, gender, phoneNumber, bio} = state;
  const values = {firstName, lastName, email, occupation, city, gender, phoneNumber, bio};
  
  const nextStep = () =>{
    const {step} = state;
    setState({...state, step: step+1});
  };

  const prevStep = () => {
    const {step} = state;
    setState({...state, step:step-1});
  };

  const changeHandler = (input) => (e) => {
    setState({...state,[input]:e.target.value});
  }

  switch(step){
    case 1:
      return (
        <UserDetails nextStep={nextStep} changeHandler={changeHandler} values={values} />
      );
    case 2:
      return (
        <PersonalDetails nextStep={nextStep} prevStep={prevStep} changeHandler={changeHandler} values={values} />
      );
    case 3:
      return (
        <Confirm nextStep={nextStep} prevStep={prevStep} values={values} />
      );
    case 4:
      return (
        <Success />
      );
    default:
      console.log("This is a multi-step form using react made by Sonal Gupta.");
  }
};

export default UserForm;