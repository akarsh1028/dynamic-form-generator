import styles from './styles/dynamicform.module.css';
import FormInput from './elements/FormInput';
import { useDispatch, useSelector } from 'react-redux';
import { changeHeading } from '../app/slice/formSlice';
import Button from './elements/Button';

const DynamicForm = () => {

  const form = useSelector((state) => state.dynamicform.value)
  const dispatch = useDispatch();

  return (
    <section className={styles.dynamicform}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <input type='text' placeholder='Enter Form Title' value={form.heading} onChange={(e) => dispatch(changeHeading(e.target.value))}/>
        </div>
        <div className={styles.formlist}>
          {form.inputs.map((item, index) => (
            <FormInput key={`input-${index}`} data={item} index={index}/>
          ))}
        </div>
        <Button label="Submit"/>
      </div>
    </section>
  )
}

export default DynamicForm