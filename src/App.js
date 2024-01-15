import styles from './App.module.css'
import DynamicForm from './components/DynamicForm';
import ElementsBar from './components/ElementsBar';

function App() {

  return (
    <>
      <header className={styles.header}>
        <h1>Dynamic Form Generator</h1>
      </header>
      <main className={styles.mainContent}>
        <ElementsBar/> 
        <DynamicForm />
      </main>
    </>
  );
}

export default App;

