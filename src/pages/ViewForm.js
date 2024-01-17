import { useEffect, useState } from 'react';
import styles from './viewform.module.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setDynamicForm } from '../app/slice/formSlice';
import EditForm from '../components/EditForm';
import Header from '../components/Header';

const ViewForm = () => {

  const router = useLocation()
  const dispatch = useDispatch();
  const [form, setForm] = useState(false);

  useEffect(() => {
    const id = router.pathname.replace('/form/', '');

    axios.get(`https://dynamic-form-v36q.onrender.com/form/${id}`)
      .then((res) => {
        if (res.data.status) {
          dispatch(setDynamicForm(res.data.body.body));
          setForm(true);
        } else {
          dispatch(setDynamicForm([]));
          setForm(false);
        }
      })
      .catch((err) => {
        console.log(err);
      })

  }, [router.pathname, dispatch])

  return (
    <main className={styles.main}>
      <Header page="view"/>
      {form ?
        <EditForm />
        :
        ''
      }
    </main>
  )
}

export default ViewForm