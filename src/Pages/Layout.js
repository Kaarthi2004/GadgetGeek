import { Outlet, Link } from "react-router-dom";
import './layout.css';

const Layout = () => {
  return (
    <div>
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">GadgetGeek</a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav navbar-right">
                <li><Link to="/">HomeOfProducts</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/Signin">Sign-in</Link></li>
                <li><Link to="/Login">Log-in</Link></li>
            </ul>
            </div>
        </div>
    </nav>
    <Outlet />
    </div>
  );
};

export default Layout;