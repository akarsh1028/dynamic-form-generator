import React from 'react'
import styles from '../styles/success.module.css';
import Button from '../elements/Button';
import { useNavigate } from 'react-router-dom';

const Success = () => {

  const route = useNavigate();
  return (
    <div className={styles.model}>
      <div className={styles.modelcontainer}>
        <h3>Your form has been submitted.</h3>
        <Button label="Go to Home" onclick={() => route('/')}/>
      </div>
    </div>
  )
}

export default Success