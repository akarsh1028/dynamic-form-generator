import { Edit, Trash } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux'
import styles from '../styles/forminput.module.css'
import { deleteElement } from '../../app/slice/formSlice'

const FormInput = ({ data, active, setActive, index }) => {

  const dispatch = useDispatch()

  return (
    <div className={`${styles.forminput} ${active && styles.activeform}`} onClick={() => setActive(index)}>
      <label className={`${styles.labelheading} ${data.required ? styles.required : ''}`} htmlFor={`input-${index}`}>{data.label}</label>
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
      data.type === 'checkbox' ?
        <div className={styles.optionbox}>
          {data.option.map((item, i) => (
            <div key={item} className={styles.checkradio}>
              <input readOnly id={`${data.type+i}-${index}`} type={data.type} />
              <label htmlFor={`${data.type+i}-${index}`}>{item}</label>
            </div>
          ))}
        </div>
      :
      data.type === 'radio' ?
        <div className={styles.optionbox}>
          {data.option.map((item, i) => (
            <div key={item} className={styles.checkradio}>
              <input name={`${data.label}-${index}`} readOnly id={`${data.type+i}-${index}`} type={data.type} />
              <label htmlFor={`${data.type+i}-${index}`}>{item}</label>
            </div>
          ))}
        </div>
      :
        <input readOnly id={`input-${index}`} type={data.type} placeholder={data.placeholder} />
      }
      {active && <div className={styles.options}>
        <button className={`${styles.setting} ${styles.iconbutton}`}><Edit /></button>
        <button className={`${styles.trash} ${styles.iconbutton}`} onClick={() => dispatch(deleteElement(index))}><Trash/></button>
      </div>
      }
    </div>
  )
}

export default FormInput