import React from "react";
import About from "../pages/About";
import Login from "../Components/Login"
import Header from "../Components/Header";
import "../styles/Home.css";
import image from "../assets/images/Chinese.jpg";
import SignUp from "../Components/SignUp";

function Home() {
  
  return (
    <>
    <Header />
    <div className="home">
    <h2>Welcome to Hanzi FlashCards</h2>
    <p>
      The it tool for studying and revising Chinese effectively with
      flashcards.{" "}
    </p>
<div>
  <div>
    <p>
      
    </p>
    </div>
  <div className="img-container">
<img 
    src={image} 
    alt="Chinese characters"
    />
</div>
</div>

    
  {/* <SignUp /> */}
  {/* <Login /> */}
  {/* <About /> */}
  {/* <CreateCards createCard={createCard}/> */}
  </div></>
    
  );
}

export default Home;