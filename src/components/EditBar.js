import React from 'react'
import styles from './styles/editbar.module.css';
import { PlusCircleIcon, Trash, X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleState } from '../app/slice/editStatus';
import { addOption, deleteOption, optionChange, valueChange } from '../app/slice/formSlice';

const EditBar = () => {

  const editindex = useSelector((state) => state.editStatus.value.index)
  const editForm = useSelector((state) => state.dynamicform.value.inputs[editindex])
  const dispatch = useDispatch();

  console.log(editForm)

  const labelHandler = (type, value) => {
    dispatch(valueChange({ index: editindex, type: type, value: value }));
  }

  const optionHandler = (option, value) => {
    dispatch(optionChange({ index: editindex, option: option, value: value }));
  }

  return (
    <section className={styles.elementsbar}>
      <div className={styles.header}>
        <h3>{editForm.type} Properties</h3>
        <X className={styles.closeIcon} onClick={() => dispatch(toggleState())} />
      </div>
      <ul className={styles.properties}>
        <li>
          <label>Heading</label>
          <input className={styles.inputselect} type='text' value={editForm.label} onChange={(e) => labelHandler('label', e.target.value)} />
        </li>
        {(editForm.type === 'checkbox' || editForm.type === 'radio' || editForm.type === 'dropdown') ? null :
          <li>
            <label>Placeholder</label>
            <input className={styles.inputselect} type='text' value={editForm.placeholder} onChange={(e) => labelHandler('placeholder', e.target.value)} />
          </li>
        }
        {(editForm.type === 'text' || editForm.type === 'email' || editForm.type === 'password' || editForm.type === 'number') &&
          <li>
            <label>Input Type</label>
            <select className={styles.inputselect} value={editForm.type} onChange={(e) => labelHandler('type', e.target.value)}>
              <option value='text'>Text</option>
              <option value='email'>Email</option>
              <option value='password'>Password</option>
              <option value='number'>Number</option>
            </select>
          </li>
        }
        <li className={styles.line}>
          <input className={`${styles.inputselect} ${styles.radiocheck}`} id='required' type='checkbox' checked={editForm.required} onChange={() => labelHandler('required', !editForm.required)} />
          <label htmlFor='required'>Required</label>
        </li>
        {editForm.type === 'number' && <>
          <li>
            <label>Min</label>
            <input className={styles.inputselect} type='number' value={editForm.min} onChange={(e) => labelHandler('min', e.target.value)} />
          </li>
          <li>
            <label>Max</label>
            <input className={styles.inputselect} type='number' value={editForm.max} onChange={(e) => labelHandler('max', e.target.value)} />
          </li>
        </>}
        {(editForm.type === 'checkbox' || editForm.type === 'radio' || editForm.type === 'dropdown') &&
          <li>
            <label>Options <PlusCircleIcon color='white' onClick={() => dispatch(addOption(editindex))}/></label>
            {editForm.option.map((item, index) => (
              <div key={`item-${index}`} style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                <input className={styles.inputselect} type='text' value={item} onChange={(e) => optionHandler(index, e.target.value)} />
                {editForm.option.length > 1 && <Trash cursor="pointer" color='white' onClick={() => dispatch(deleteOption({option: index, index: editindex}))}/>}
              </div>
            ))}
          </li>
        }
      </ul>
    </section>
  )
}

export default EditBar