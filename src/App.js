import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";

// import FormValidation from './FormValidation';
// import ShoppingList from './ShoppingList';
// import "./ShoppingList.css";

// import InputEvents from './events/InputEvents'
// import MovementEvents from './events/MovementEvents'
// import './events/Events.css'

import Item from "./api/Item";
import Nav from "./api/Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <>
          {/* <FormValidation /> */}
          {/* <InputEvents />
        <MovementEvents /> */}
          {/* <ShoppingList /> */}
        </>
        <>
          {/* 
          <h1>HW</h1>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/about/123"}>About John</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/:userId" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
         */}
        </>
        <>
          <h1>FFXIV ITEMS API!</h1>
          <hr />
          <Nav />
          <hr />
          <Routes>
            <Route path="/items/:itemId" element={<Item />} />
          </Routes>
        </>
      </div>
    );
  }
}

export default App;
