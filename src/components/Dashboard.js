import { Plus } from 'lucide-react'
import React from 'react'
import styles from './styles/dashboard.module.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const route = useNavigate();
  return (
    <section className={styles.dashboard}>
      <div className={styles.box} onClick={() => route('/newform')}>
        <Plus/>
        Create New Form
      </div>
    </section>
  )
}

export default Dashboard