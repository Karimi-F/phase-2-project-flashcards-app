import React from "react";
import CardDisplay from "../Components/CardDisplay";
import "../styles/ViewCards.css";

function ViewCards({cards}){
    return(
        <div className="view-cards">
        <h2>Your Flashcards</h2>
        <div className="card-list">
            {cards.length > 0 ? (
                cards.map((card, index) => (
                    <CardDisplay 
                    key={index}
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