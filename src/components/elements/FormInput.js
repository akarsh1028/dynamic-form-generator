import { ChevronDown, Edit, Trash } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/forminput.module.css'
import { deleteElement } from '../../app/slice/formSlice'
import { reset, toggleState, updateIndex } from '../../app/slice/editStatus'

const FormInput = ({ data, index }) => {

  const editindex = useSelector((state) => state.editStatus.value.index)
  const dispatch = useDispatch();

  const stateHandler = (index) => {
    dispatch(updateIndex(index))
  }

  return (
    <div className={`${styles.forminput} ${index === editindex && styles.activeform}`} onClick={() => stateHandler(index)}>
      <label className={`${styles.labelheading} ${data.required ? styles.required : ''}`} htmlFor={`input-${index}`}>
        {data.label ? data.label : <div style={{ color: "gray" }}>Add Label</div>}
      </label>
      {(data.type === 'checkbox' || data.type === 'radio') ?
        <div className={styles.optionbox}>
          {data.option.map((item, i) => (
            <div key={`check${index}-${i}`} className={styles.checkradio}>
              <input disabled type={data.type} />
              <label>{item ? item.label : <div style={{ color: "gray" }}>Add Option Title</div>}</label>
            </div>
          ))}
        </div>
        :
          <>
            <div className={`${styles.inputcomponent} ${data.type === 'textarea' ? styles.areabox : ''}`}>{data.placeholder}{data.type === 'dropdown' && <ChevronDown />}</div>
            {(data.type === 'dropdown' || data.type === 'checkbox' || data.type === 'radio') &&
              <>
                {data.option.map((item, i) => (
                  <div key={`drop${index}-${i}`} className={styles.inputoptions}>{item ? item : <div style={{ color: "gray" }}>Add Option Title</div>}</div>
                ))}
              </>
            }
          </>
      }

      {index === editindex && <div className={styles.options}>
        <button className={`${styles.setting} ${styles.iconbutton}`} onClick={() => dispatch(toggleState(index))}><Edit /></button>
        <button className={`${styles.trash} ${styles.iconbutton}`} onClick={() => {dispatch(deleteElement(index)); dispatch(reset())}}><Trash /></button>
      </div>
      }
    </div>
  )
}

export default FormInput