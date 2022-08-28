import { Route, Routes } from "react-router-dom";
import "./App.css";
import List from "./Components/List";
import Navbar from "./Components/Navbar";
import Projects from "./Pages/Projects";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";
import Blog from "./Pages/blogs/Blog";
import Landingpage from "./Pages/Landingpage";
import Productivity from "./Pages/blogs/Productivity";
import RemoteWork from "./Pages/blogs/RemoteWork";
import BestPractice from "./Pages/blogs/BestPractice";
import Resources from "./Pages/blogs/Resources";
import Integrations from "./Pages/Integrations";
import TimeTracker from "./Pages/TimeTracker";

import Footer from "./Components/Footer";

import Dashboard from "./Pages/Dashbord/Dashboard";


function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/integration" element={<Integrations />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/project/List" element={<List />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/productivity" element={<Productivity />} />
        <Route path="/remote-work" element={<RemoteWork />} />
        <Route path="/best-practice" element={<BestPractice />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/features/time-tracker" element={<TimeTracker />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
     
    </div>
  );
}

export default App;
