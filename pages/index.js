import React from 'react';
//import 'styles.css';

class App extends React.Component {
   render() {
      return (
         <div>
            <Header/>
            <About/>
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
            <li> <a style={nav} href="menu.js"> Meal Deals </a> </li>
            <li> <a style={nav} href="menu.js"> Dial A Curry </a> </li>
            <li> <a style={nav} href="contact.js"> Contact </a> </li>

            </ul>
            </div>

         </div>
      );
   }
}
class About extends React.Component {
   render() {
    const mystyle = {
        color: "blue",
        backgroundColor: "rgb(197, 190, 190)",
        padding: "10px",
        fontFamily: "Arial, Helvetica, sans-serif"
      };
      return (
         <div style={mystyle}>
            <h2>About Us </h2>
            <p> The traditional food of Bangladesh has been widely appreciated for its fabulous use of herbs and spices. Bangladeshi cuisine is known for its large assortment of dishes. The staple food in Bangladesh includes wheat, rice and pulses with chana being the most important one.
                The robust menu we offer features vegetarian, fish, meat, and chicken dishes and with its variable seating arrangements makes it ideal for larger parties and events for you.
                Takeaway, both collection and delivery are also available.
                We have been here since 1980 and so many customers have become very good friends and we look forward to making many many more!
            </p>
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

export default App;

//https://www.tutorialspoint.com/reactjs/reactjs_components.htm 