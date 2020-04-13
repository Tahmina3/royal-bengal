import React from 'react';

class Menu extends React.Component {
   render() {
      return (
         <div>
            <Header/>
            <Body/>
            <Footer/>
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
    const mystyle = {
        color: "blue",
        backgroundColor: "rgb(197, 190, 190)",
        padding: "10px",
        fontFamily: "Arial, Helvetica, sans-serif",
      };
      const nav = {
        color: "white",
        width: "50%",
        textDecoration: "none",
        listStyle: "none"
      };
      return (
         <div style={mystyle}>
            <h1 >The Royal Bengal</h1>
           <div>
            <ul style={nav}>
            <li> <a style={nav} href="menu.js"> Main Menu </a> </li>
            <li> <a style={nav} href="takeaway.js"> Takeaway Menu </a> </li>
            <li> <a style={nav} href="mdeals.js"> Meal Deals </a> </li>
            <li> <a style={nav} href="dacurry.js"> Dial A Curry </a> </li>
            <li> <a style={nav} href="contact.js"> Contact </a> </li>

            </ul>
            </div>

         </div>
      );
   }
}
class Body extends React.Component {
   render() {
    const mystyle = {
        color: "blue",
        backgroundColor: "rgb(197, 190, 190)",
        padding: "10px",
        fontFamily: "Arial, Helvetica, sans-serif"
      };
      return (
         <div style={mystyle}>
            <h2>Main Menu</h2>
            <p> h </p>
         </div>
      );
   }
}

class Footer extends React.Component {
    render() {
        const footer = {
            color: "red",
            backgroundColor: "yellow",
            padding: "10px",
            fontFamily: "Arial, Helvetica, sans-serif"
          };
       return (
             <footer style={footer}>The royal Bengal - Developed by Tahmina Rahman 2020 </footer>
       );
    }
 }

export default Menu;

//https://www.tutorialspoint.com/reactjs/reactjs_components.htm 