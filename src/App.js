import './App.css';import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Contact from "./Pages/Contact";
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="signin" element={<Signin/>} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
