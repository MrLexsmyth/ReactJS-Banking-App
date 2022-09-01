import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {toggleLogIn} from '../actions';

const LogIn = () => {
  const isLoggedIn =  useSelector(({init}) => init.isLoggedIn)
  const dispatch = useDispatch()
  const handleLogIn = () => {
    dispatch (toggleLogIn())
  }

  return (
    <>
    <h1 className='is-size-3'>
      {isLoggedIn ? 'You are logged in' : 'You are logged out'}
    </h1>
   <button className='button is-success'onClick={handleLogIn}>{isLoggedIn ? 'Log Out' : 'Log In'}</button>
   </>
    )
}

export default LogIn