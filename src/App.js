import React from "react";
import IntroSection from "./IntroSection";
import Footer from "./Footer";
import Recordingartist from "./Recordingartist";
import Listen from "./Listen";
import Collaborationsection from "./Collaborationsection";
import Navbar from "./Components/Navbar.js";
import Rules from "./Rules";
import Accordion from "./Accordion";
import './App.css'


function App() {
  return (
    <>
    <div className="App">
    <React.Fragment>
    <Navbar/>
  </React.Fragment>
    <IntroSection/>
    <Rules/>
    <Recordingartist />
    <Collaborationsection/>
    <Listen />
    <Accordion/>
    <Footer/>
    </div>
  </>
  );
}
 
export default App;