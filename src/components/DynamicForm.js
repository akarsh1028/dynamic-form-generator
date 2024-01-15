import { useState } from 'react';
import styles from './styles/dynamicform.module.css';
import FormInput from './elements/FormInput';
import { useSelector } from 'react-redux';

const DynamicForm = () => {

  const [active, setActive] = useState(0);
  const form = useSelector((state) => state.dynamicform.value)

  return (
    <section className={styles.dynamicform}>
      <div className={styles.container}>
        <div className={styles.heading}>{form.heading}</div>
        <ul className={styles.formlist}>
          {form.inputs.map((item, index) => (
            <FormInput key={`input-${index}`} data={item} styles={styles} active={index === active} setActive={setActive} index={index}/>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default DynamicForm