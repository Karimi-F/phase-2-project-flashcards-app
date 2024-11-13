import React, { useEffect } from "react";
import CardDisplay from "../Components/CardDisplay";
import "../styles/ViewCards.css";

function ViewCards(){

const[cards,setCards] = React.useState([]);
const[loading,setLoading] = React.useState(true);
const[error,setError] = React.useState(null);

useEffect(() => {
    setLoading(true);

 fetch("http://localhost:5000/words")   
 .then((response)=>{
    if (!response.ok){
        throw new Error ("Failed to fetch data");
    } return response.json()
 })
 .then(data => {
    setCards(data);
    setLoading(false);
 })
 .catch(error => {
    setError(error.message);
    setLoading(false);
 });
},[]);

    return(
        <div className="view-cards">
        <h2>Your Flashcards</h2>
        {loading && <p>Loading your flashcards...</p>}
        {error && <p style={{color:"red"}}>Error:{error}</p>}
        <div className="card-list">
            {cards.length > 0 ? (
                cards.map((card) => (
                    <CardDisplay 
                    key={card.id}
                    level={card.level}
                    hanzi={card.hanzi}
                    pinyin={card.pinyin}
                    englishTranslation={card.englishTranslation}
                    />
                ))
            ) : (
                <p>No cards available yet. Create a new flashcard to get started.</p>
            )}
        </div>
        </div>
    )
}

export default ViewCards;