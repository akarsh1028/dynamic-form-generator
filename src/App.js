import { Route, Routes } from 'react-router-dom';
import ViewForm from './pages/ViewForm'
import NewForm from './pages/NewForm';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newform" element={<NewForm />} />
        <Route path='/form/:id' element={<ViewForm />} />
      </Routes>
      <ToastContainer theme='dark' position='top-center'/>
    </>
  )
}


export default App;

