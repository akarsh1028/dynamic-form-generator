import React from 'react'
import { useDispatch } from 'react-redux'
import { addElement } from '../../app/slice/formSlice';

const SelectInputs = ({ data, styles }) => {

  const dispatch = useDispatch();

  const addFormElement = (type) => {
    let obj;
    if(type === 'Text'){
      obj = {
        label: "Name",
        placeholder: "Enter Name",
        type: "text",
        required: false,
        min: 5,
        max: 10,
      };
    }else if(type === 'Text Area'){
      obj = {
        label: "Area Box",
        placeholder: "Area Box...",
        type: "textarea",
        required: false,
        min: 5,
        max: 10,
      };
    }else if(type === 'Dropdown'){
      obj = {
        label: "Select Dropdown",
        option: ["Option1", "Option2", "Option3"],
        type: "dropdown",
        required: false,
      };
    }
    dispatch(addElement(obj));
  }
  return (
    <div className={styles.formElements} onClick={() => addFormElement(data.title)}>
      <div className={styles.icons}>{data.icon}</div>
      <h6>{data.title}</h6>
    </div>
  )
}

export default SelectInputs