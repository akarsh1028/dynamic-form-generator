import styles from './styles/dynamicform.module.css';
import FormInput from './elements/FormInput';
import { useSelector } from 'react-redux';
import Button from './elements/Button';

const EditForm = () => {

  const form = useSelector((state) => state.dynamicform.value)
  console.log(form)

  return (
    <section className={styles.dynamicform}>
      <div className={styles.container}>
        <div className={styles.heading}>{form.heading}</div>
        <div className={styles.formlist}>
          {form.inputs.map((item, index) => (
            <FormInput key={`input-${index}`} data={item} styles={styles} index={index}/>
          ))}
        </div>
        <Button label="Submit"/>
      </div>
    </section>
  )
}

export default EditForm