//import Header from './Header.jsx'
//import Footer from './Footer.jsx'
//import Food from './Food.jsx'
import Card from './Card.jsx'
import React from "react";
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return(
    <>
      {/*<Header/>*/}
      {/*<Food/>*/}
      {/*<Footer/>*/}
      <Card />
      <div>
        <button onClick={() => window.open('./ClockPage.html')}>
          Link
        </button>
      </div>
    </>
  );
}


export default App
