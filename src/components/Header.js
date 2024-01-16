import React from 'react'
import Button from './elements/Button'
import { useSelector } from 'react-redux'
import axios from 'axios'
import styles from '../components/styles/header.module.css'

const Header = ({home}) => {

  const body = useSelector((state) => state.dynamicform.value)

  const saveForm = () => {
    axios.post("https://dynamic-form-v36q.onrender.com/form",{body})
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err);
    })
  }
  return (
    <header className={styles.header}>
      <h1>Dynamic Form Generator</h1>
      {!home && <Button label="Save" onclick={() => saveForm()}/>}
    </header>
  )
}

export default Header