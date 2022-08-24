
import { Route, Routes } from 'react-router-dom';
import './App.css';
import List from './Components/List';
import Navbar from './Components/Navbar';
import Projects from './Pages/Projects';
import {Login} from './Pages/Login';
import {Signup} from "./Pages/Signup"

function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/project' element={<Projects />} />
              <Route path="/login" element={<Login/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
        <Route path='/project/List' element={<List />} />
      </Routes>






    </div>
  );
}

export default App;
