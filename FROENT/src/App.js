import { Route, Routes } from "react-router-dom";
import "./App.css";
import List from "./Components/List";
import Navbar from "./Components/Navbar";
import Projects from "./Pages/Projects";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";
import Blog from "./Pages/blogs/Blog";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/project" element={<Projects />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/project/List" element={<List />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
