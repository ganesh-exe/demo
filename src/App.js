import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Home  from "./components/Pages/Home";
import  Blog  from "./components/Pages/Blog";
import  Contact  from "./components/Pages/Contact";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;