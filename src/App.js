import { useSelector } from 'react-redux';
import styles from './App.module.css'
import DynamicForm from './components/DynamicForm';
import EditBar from './components/EditBar';
import ElementsBar from './components/ElementsBar';

function App() {

  const editstate = useSelector((state) => state.editStatus.value.status)

  return (
    <>
      <header className={styles.header}>
        <h1>Dynamic Form Generator</h1>
      </header>
      <main className={styles.mainContent}>
        <ElementsBar/> 
        <DynamicForm />
        { editstate && <EditBar/> }
      </main>
    </>
  );
}

export default App;

