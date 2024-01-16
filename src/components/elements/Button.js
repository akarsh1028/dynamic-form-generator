import styles from '../styles/button.module.css';

const Button = ({label, onclick}) => {

  return (
    <div className={`${styles.submitbtn} ${label === 'Submit' ? styles.submit : ''}`} onClick={onclick}><button>{label}</button></div>
  )
}

export default Button