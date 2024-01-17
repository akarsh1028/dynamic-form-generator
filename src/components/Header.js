import React from 'react'
import Button from './elements/Button'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import styles from '../components/styles/header.module.css'
import { useNavigate } from 'react-router-dom'
import { setDefault } from '../app/slice/formSlice'

const Header = ({page}) => {

  const body = useSelector((state) => state.dynamicform.value)
  const route = useNavigate();
  const dispatch = useDispatch();

  const saveForm = () => {
    axios.post("https://dynamic-form-v36q.onrender.com/form",{body})
    .then((res) => {
      console.log(res)
      if(res.data._id){
        dispatch(setDefault());
        route(`/form/${res.data._id}`)
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }
  return (
    <header className={styles.header}>
      <h1 onClick={() => route('/')}>Dynamic Form Generator</h1>
      {page === "newform" && <Button label="Save" onclick={() => saveForm()}/>}
      {page === "view" && <Button label="Dashboard" onclick={() => route('/')}/>}
    </header>
  )
}

export default Header