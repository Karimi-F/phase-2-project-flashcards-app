import React from "react";
import About from "../pages/About";
// import Login from "../Components/Login"
import Header from "../Components/Header";
import "../styles/Home.css";

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
  {/* <About /> */}
  {/* <CreateCards createCard={createCard}/> */}
  </div></>
    
  );
}

export default Home;