import styles from './styles/dynamicform.module.css';
import FillForm from './elements/FillForm';
import { useSelector } from 'react-redux';
import Button from './elements/Button';

const EditForm = () => {

  const form = useSelector((state) => state.viewforms.value)

  return (
    <section className={`${styles.dynamicform} ${styles.viewform}`}>
      <div className={styles.container}>
        <div className={styles.formheading}>{form.heading}</div>
        <div className={styles.formlist}>
          {form.inputs.map((item, index) => (
            <FillForm key={`input-${index}`} data={item} index={index}/>
          ))}
        </div>
        <Button label="Submit"/>
      </div>
    </section>
  )
}

export default EditForm