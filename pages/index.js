import React from 'react';
//import 'styles.css';

//import im from '../images/6.png';

class App extends React.Component {
   render() {
      return (
         <div>
            <Title/>
            <NavBar/>
            <Body/>
            <Footer/>
         </div>
      );
   }
}


class Title extends React.Component {
   render() {
    const mystyle = {
        color: "white",
        backgroundColor: "black",
        padding: "10px",
        fontFamily: "Arial, Helvetica, sans-serif",
        textAlign: "center"
      };
      return (
         <div style={mystyle}>
            <h1 >The Royal Bengal</h1>
         </div>
      );
   }
}



class NavBar extends React.Component {
   render() {
      const nav = {
         color: "black",
         backgroundColor: "white",
         textDecoration: "none",
         listStyle: "none"

       };
       const mystyle = {
         color: "black",
         fontFamily: "Arial, Helvetica, sans-serif"
       };

       const li = {
         float: "left",
         paddingLeft: "10px",
       };

      return (
         <div style={mystyle}>
         <ul style={nav}>
         <li style={li}> <a href="mainmenu.js" style={nav}> Main Menu | </a> </li>
         <li style={li}> <a href="takeaway.js" style={nav}> Takeaway Menu | </a> </li>
         <li style={li}> <a href="mdeals.js" style={nav}> Meal Deals | </a> </li>
         <li style={li}> <a href="dacurry.js" style={nav}> Dial A Curry | </a> </li>
         <li style={li}> <a href="contact.js" style={nav}> Contact </a> </li>

         </ul>
         </div>
      );
   }
}



class Body extends React.Component {
   render() {
    const mystyle = {
        color: "black",
        padding: "80px",
        fontFamily: "Arial, Helvetica, sans-serif",
        textAlign: "justify"
      };

      const center = {
          textAlign: "center"
       };
      return (
         <div style={mystyle}>
            <h2>About Us </h2>
            <p style={center}> + Eat-in <br/>
		      + Takeaway <br/>
		      + Delivery <br/>
		      + Vegetarian food <br/>
		      + Halal food <br/> </p>

        
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
            color: "white",
            backgroundColor: "black",
            padding: "10px",
            fontSize: "12px",
            textAlign: "center",
            fontFamily: "Arial, Helvetica, sans-serif"
          };
       return (
             <footer style={footer}>The Royal Bengal - Developed by Tahmina Rahman 2020 </footer>
       );
    }
 }




export default App;

//https://www.tutorialspoint.com/reactjs/reactjs_components.htm 