import styles from './styles/dynamicform.module.css';
import FillForm from './elements/FillForm';
import { useSelector } from 'react-redux';
import Button from './elements/Button';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Success from './model/Success';

const EditForm = () => {

  const form = useSelector((state) => state.viewforms.value)

  const [success, setSuccess] = useState(false)
  const [values, setValues] = useState({});
  const formJSON = () => {
    let obj = {};
    for (let i = 0; i < form.inputs.length; i++) {
      if (form.inputs[i].type === "checkbox") {
        obj[form.inputs[i].label] = { value: [], required: form.inputs[i].required };
      } else {
        obj[form.inputs[i].label] = { value: '', required: form.inputs[i].required };
      }
    }
    setValues(obj);
  }

  useEffect(() => {
    if(form){
      formJSON()
    }
  }, [])

  const validateForm = (data) => {

    for (const variable in data)
      if (data[variable].required && data[variable].value.length === 0) {
        return variable
      } else if (data[variable].required && data[variable].value === "") {
        return false
      }
    return true;
  }

  const submitHandler = () => {
    const status = validateForm(values)
    if (status === true) {
      setSuccess(true);
    } else {
      toast.error(`${status} cannot be empty`)
    }
  }

  return (
    <section className={`${styles.dynamicform} ${styles.viewform}`}>
      <div className={styles.container}>
        <div className={styles.formheading}>{form.heading}</div>
        <div className={styles.formlist}>
          {values && form && form.inputs.map((item, index) => (
            <FillForm key={`input-${index}`} data={item} index={index} values={values} setValues={setValues} />
          ))}
        </div>
        <Button label="Submit" onclick={() => submitHandler()} />
      </div>
      {success && <Success/>}
    </section>
  )
}

export default EditForm