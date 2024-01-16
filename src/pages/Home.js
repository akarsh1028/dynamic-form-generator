import React, { useEffect } from 'react'
import Header from '../components/Header'
import Dashboard from '../components/Dashboard'
import axios from 'axios'

const Home = () => {

  useEffect(() => {
    axios.get("`https://dynamic-form-v36q.onrender.com/form")
    .then((res) => {
      
    })
    .catch((err) => {
      console.log(err)
    })
  },[])

  return (
    <>
      <Header home={true}/>
      <Dashboard/>
    </>
  )
}

export default Home