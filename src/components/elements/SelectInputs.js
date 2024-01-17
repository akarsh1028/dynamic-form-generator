import React from 'react'
import { useDispatch } from 'react-redux'
import { addElement } from '../../app/slice/formSlice';

const SelectInputs = ({ data, styles, setShowElements }) => {

  const dispatch = useDispatch();

  const addFormElement = (type) => {
    let obj;
    if(type === 'Text'){
      obj = {
        label: "Name",
        placeholder: "Enter Name",
        type: "text",
        required: false,
        value: "",
      };
    }else if(type === 'Text Area'){
      obj = {
        label: "Area Box",
        placeholder: "Area Box...",
        type: "textarea",
        required: false,
        value: "",
      };
    }else if(type === 'Dropdown'){
      obj = {
        label: "Type a question...",
        placeholder: "Please Select",
        option: ["Option1", "Option2", "Option3"],
        type: "dropdown",
        required: false,
        value: ""
      };
    }else if(type === 'Checkbox'){
      obj = {
        label: "Type a question...",
        placeholder: "Enter Name",
        type: "checkbox",
        required: false,
        option: [{label: "Option1", isChecked: false}, {label: "Option2", isChecked: false}, {label: "Option3", isChecked: false}],
      };
    }else if(type === 'Radio'){
      obj = {
        label: "Type a question...",
        placeholder: "Enter Name",
        type: "radio",
        required: false,
        option: [{label: "Option1", isChecked: false}, {label: "Option2", isChecked: false}, {label: "Option3", isChecked: false}],
      };
    }
    dispatch(addElement(obj));
    setShowElements(false)
  }
  return (
    <div className={styles.formElements} onClick={() => addFormElement(data.title)}>
      <div className={styles.icons}>{data.icon}</div>
      <h6>{data.title}</h6>
    </div>
  )
}

export default SelectInputs