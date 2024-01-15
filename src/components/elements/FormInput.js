import { Settings, Star, Trash } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { changeHeading } from '../../app/slice/formSlice'
import styles from '../styles/forminput.module.css'

const FormInput = ({ data, active, setActive, index }) => {

  const dispatch = useDispatch()

  return (
    <div className={`${styles.forminput} ${active && styles.activeform}`} onClick={() => setActive(index)}>
      <label className={data.required ? styles.required : ''} htmlFor={`input-${index}`}>{data.label}</label>
      {data.type === 'textarea' ? 
        <textarea readOnly id={`input-${index}`} placeholder={data.placeholder}></textarea>
      :
      data.type === 'dropdown' ?
        <select id={`input-${index}`}>
          {data.option.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      :
        <input readOnly id={`input-${index}`} type={data.type} placeholder={data.placeholder} />
      }
      {active && <div className={styles.options}>
        <button className={`${styles.setting} ${styles.iconbutton}`} onClick={() => dispatch(changeHeading())}><Settings /></button>
        <button className={`${styles.trash} ${styles.iconbutton}`}><Trash/></button>
      </div>
      }
    </div>
  )
}

export default FormInput