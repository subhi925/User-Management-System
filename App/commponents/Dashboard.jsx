import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../fire'
import { db } from '../fire'

const Dashboard = () => {
  return (
    <div><h1 data-cy="Dashboard">Dashboard</h1></div>
  )
}

export default Dashboard