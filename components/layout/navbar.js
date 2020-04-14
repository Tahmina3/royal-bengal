import React from 'react';
import './navbar.css'



class NavBar extends React.Component {
    render() {
     
       return (
          <div className="navbar">
          <ul className="nav">
          <li> <a href="menu.js" className="nav"> Main Menu | </a> </li>
          <li> <a href="takeaway.js" className="nav"> Takeaway Menu | </a> </li>
          <li> <a href="mdeals.js" className="nav"> Meal Deals | </a> </li>
          <li> <a href="dacurry.js" className="nav"> Dial A Curry | </a> </li>
          <li> <a href="contact.js" className="nav"> Contact </a> </li>
 
          </ul>
          </div>
       );
    }
 }

 export default NavBar;