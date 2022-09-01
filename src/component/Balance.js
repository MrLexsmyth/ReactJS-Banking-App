import React from 'react'
import { useSelector } from 'react-redux'

const Balance = () => {
  const state = useSelector(({init, banking}) => {
    return {
    balance: banking.balance,
    loan: banking.loan,
    }
  })


  return (
    <div>
        
        <h1 className='is-size-2'>Balance : <strong>${state.balance}</strong></h1>

        <h1 className='is-size-2'>Interest : <strong>${state.loan}</strong></h1>
    </div>
  )
}

export default Balance