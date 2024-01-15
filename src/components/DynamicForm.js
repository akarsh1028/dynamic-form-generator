import styles from './styles/dynamicform.module.css';
import FormInput from './elements/FormInput';
import { useSelector } from 'react-redux';

const DynamicForm = () => {

  const form = useSelector((state) => state.dynamicform.value)

  return (
    <section className={styles.dynamicform}>
      <div className={styles.container}>
        <div className={styles.heading}>{form.heading}</div>
        <div className={styles.formlist}>
          {form.inputs.map((item, index) => (
            <FormInput key={`input-${index}`} data={item} styles={styles} index={index}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DynamicForm