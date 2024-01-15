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
      };
    }else if(type === 'Text Area'){
      obj = {
        label: "Area Box",
        placeholder: "Area Box...",
        type: "textarea",
        required: false,
      };
    }else if(type === 'Dropdown'){
      obj = {
        label: "Select Dropdown",
        option: ["Option", "Option", "Option"],
        type: "dropdown",
        required: false,
      };
    }else if(type === 'Checkbox'){
      obj = {
        label: "Checkbox",
        placeholder: "Enter Name",
        type: "checkbox",
        required: false,
        option: ["Option", "Option", "Option"],
      };
    }else if(type === 'Radio'){
      obj = {
        label: "Radio button",
        placeholder: "Enter Name",
        type: "radio",
        required: false,
        option: ["Option", "Option", "Option"],
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