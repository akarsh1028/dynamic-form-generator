import { useSelector } from 'react-redux';
import styles from './App.module.css'
import DynamicForm from './components/DynamicForm';
import EditBar from './components/EditBar';
import ElementsBar from './components/ElementsBar';
import Header from './components/Header';

function App() {

  const editstate = useSelector((state) => state.editStatus.value.status)

  return (
    <>
      <Header styles={styles}/>
      <main className={styles.mainContent}>
        <ElementsBar/> 
        <DynamicForm />
        { editstate && <EditBar/> }
      </main>
    </>
  );
}

export default App;

