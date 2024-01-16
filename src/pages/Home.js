import React from 'react'
import Header from '../components/Header'
import Dashboard from '../components/Dashboard'

const Home = () => {

  return (
    <>
      <Header home={true}/>
      <Dashboard/>
    </>
  )
}

export default Home