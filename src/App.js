import { Route, Routes } from 'react-router-dom';
import ViewForm from './pages/ViewForm'
import NewForm from './pages/NewForm';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newform" element={<NewForm />} />
      <Route path='/:id' element={<ViewForm />} />
    </Routes>
  )
}


export default App;

