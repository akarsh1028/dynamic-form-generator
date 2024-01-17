import styles from '../styles/button.module.css';

const Button = ({label, onclick, border}) => {

  return (
    <div className={`${styles.submitbtn} ${label === 'Submit' ? styles.submit : ''} ${border === 'none' && styles.noborderbtn}`} onClick={onclick}><button>{label}</button></div>
  )
}

export default Button