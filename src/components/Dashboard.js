import { File, Plus } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import styles from './styles/dashboard.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {

  const [formList, setFormList] = useState([]);

  useEffect(() => {
    axios.get("https://dynamic-form-v36q.onrender.com/form")
      .then((res) => {
        setFormList(res.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const route = useNavigate();
  return (
    <section className={styles.dashboard}>
      <div className={styles.box} onClick={() => route('/newform')}>
        <Plus />
        Create New Form
      </div>
      {formList.length > 0 ?
        <>
          {formList.map((item) => (
            <div key={item._id} className={styles.box} onClick={() => route(`/form/${item._id}`)}>
              <File />
              {item.body.heading}
            </div>
          ))}
        </> :
        null
      }
    </section>
  )
}

export default Dashboard