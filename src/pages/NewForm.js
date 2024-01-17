import React from 'react'
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import ElementsBar from '../components/ElementsBar';
import DynamicForm from '../components/DynamicForm';
import EditBar from '../components/EditBar';
import styles from './NewForm.module.css';

const NewForm = () => {
  const editstate = useSelector((state) => state.editStatus.value.status)

  return (
    <>
      <Header page="newform"/>
      <main className={styles.mainContent}>
        <ElementsBar />
        <DynamicForm />
        {editstate && <EditBar />}
      </main>
    </>
  );
}

export default NewForm