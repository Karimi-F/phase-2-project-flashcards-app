import React from "react";
import About from "../pages/About";
// import Login from "../Components/Login"
import Header from "../Components/Header";

function Home() {

  
  return (
    <>
    <Header/>
    <div className="home">
    <h2>Welcome to Hanzi FlashCards</h2>
    <p>
      The it tool for studying and revising Chinese effectively with
      flashcards.{" "}
    </p>

  {/* <Login /> */}
  <About />
  </div></>
    
  );
}

export default Home;