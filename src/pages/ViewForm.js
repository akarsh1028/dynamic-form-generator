import { useEffect, useState } from 'react';
import styles from './viewform.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import EditForm from '../components/EditForm';
import Header from '../components/Header';
import { setDynamicForm } from '../app/slice/viewformSlice';
import { toast } from 'react-toastify';
import Loader from '../Loading';

const ViewForm = () => {

  const router = useLocation();
  const route = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = router.pathname.replace('/form/', '');

    axios.get(`https://dynamic-form-v36q.onrender.com/form/${id}`)
      .then((res) => {
        if (res.data.status) {
          if (res.data.body === null) {
            toast("No form found. Redirecting to Home")
            setTimeout(() => {
              route('/')
            }, 1000)
          } else {
            dispatch(setDynamicForm(res.data.body.body));
            setForm(true);
          }
        } else {
          dispatch(setDynamicForm([]));
          setForm(false);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast("Error: Something happend")
      })

  }, [router.pathname, dispatch, route])

  return (
    <>
      <main className={styles.main}>
        <Header page="view" />
        {form ?
          <EditForm />
          :
          ''
        }
      </main>
      {loading && <Loader/>}
    </>
  )
}

export default ViewForm