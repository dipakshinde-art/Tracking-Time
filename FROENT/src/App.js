
import { Route, Routes } from 'react-router-dom';
import './App.css';
import List from './Components/List';
import Navbar from './Components/Navbar';
import Projects from './Pages/Projects';

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/project' element={<Projects />} />
        <Route path='/project/List' element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
