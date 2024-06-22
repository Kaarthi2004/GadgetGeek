import './App.css';import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Contact from "./Pages/Contact";
import Login from './Pages/Login';
import DeleteUser from './Pages/DeleteUser';
import CircularWithValueLabel from './Loader';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CircularWithValueLabel/>}/>
            <Route path="/Home" element={<Layout />}>
            <Route path="/Home" element={<Home />} />
            <Route path="signin" element={<Signin/>} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login/>} />
            <Route path='deleteuser' element={<DeleteUser/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
