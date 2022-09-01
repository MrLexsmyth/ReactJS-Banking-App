import React, { useState } from 'react';
import {useDispatch } from 'react-redux';
import {deposit , withDraw ,loan , deleteAccount , toggleAccount} from '../actions';

const Banking = () => {

  const [amount, setAmount] = useState(0)

  const dispatch = useDispatch()



  const handleChange = e => {
    setAmount(e.target.value)
  }
   const handleDeposit = () => {
    dispatch(deposit(+amount))
    
   }

   const handleWithDraw = () => {
    dispatch(withDraw(+amount))

    if (handleWithDraw >  setAmount()  )
    {
      return alert ("insufficent funds")
    }
   }
   const handleLoan = () => {
    dispatch(loan())
   }
   const handleDeleteAccount = () => {
    dispatch(deleteAccount())
   }
   const handleToggleAcc = () => {
    dispatch(toggleAccount())
   }

  return (
    <div>
        <div className="field">
            <input 
            type='number' 
            className='input' 
            placeholder='amount'
            value={amount}
            onChange={handleChange} 
            />
        </div>
        <button className='button mx-2 is-success' onClick={handleDeposit}>Deposit</button>
        <button className='button mx-2 is-info' onClick={handleWithDraw}>Withdraw</button>
        <button className='button mx-2 is-danger' onClick={handleLoan}>Interest</button>
        <button className='button mx-2 is-link' onClick={handleToggleAcc}>Change Acc Type</button>
        <button className='button mx-2 is-warning ' onClick={handleDeleteAccount}>Delete Acc</button>
    </div>
  )
}

export default Banking