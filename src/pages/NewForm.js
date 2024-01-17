import React from 'react'
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import TypeSelector from '../components/TypeSelector';
import DynamicForm from '../components/DynamicForm';
import Properties from '../components/Properties';
import styles from './NewForm.module.css';

const NewForm = () => {
  const editstate = useSelector((state) => state.editStatus.value.status)

  return (
    <>
      <Header page="newform"/>
      <main className={styles.mainContent}>
        <TypeSelector />
        <DynamicForm />
        {editstate && <Properties />}
      </main>
    </>
  );
}

export default NewForm