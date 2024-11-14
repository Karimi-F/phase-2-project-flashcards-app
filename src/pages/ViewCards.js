import React, { useEffect } from "react";
import CardDisplay from "../Components/CardDisplay";
import "../styles/ViewCards.css";

function ViewCards({card, cards,loading,error,deleteCard}){

const [selectedLevel, setSelectedLevel] =React.useState("all");

function handleLevelChange (event) {
    setSelectedLevel(event.target.value);
};

const filteredCards = selectedLevel === "all"
? cards : cards.filter((card) => card && card.level ===selectedLevel);

    return(
        <div className="view-cards">
        <h2>Your Flashcards</h2>
<div className="filter-level-container">
    <label>Filter by Level: </label>
<select id="level-filter" value={selectedLevel} onChange={handleLevelChange}>
    <option value="all">All Levels</option>
    <option value="1">Level 1</option>
    <option value="2">Level 2</option>
    <option value="3">Level 3</option>
    <option value="4">Level 4</option>
    <option value="5">Level 5</option>
    <option value="6">Level 6</option>
    <option value="7">Level 7</option>
    <option value="8">Level 8</option>
    <option value="9">Level 9</option>
</select>
</div>



        {loading && <p>Loading your flashcards...</p>}
        {error && <p style={{color:"red"}}>Error:{error}</p>}
        <div className="card-list">
            {selectedLevel ==="all" ? (
            cards.length > 0 ? (
                cards.map((card) => (
                    <CardDisplay 
                    key={card.id}
                    card={card}
                    level={card.level}
                    // hanzi={card.hanzi}
                    // pinyin={card.pinyin}
                    // englishTranslation={card.englishTranslation}
                    deleteCard={deleteCard}
                    />
                ))
            ) : (
                <p>No cards available yet. Create a new flashcard to get started.</p>
            )
            ) : 
            filteredCards.length > 0 ? (
                filteredCards.map((card) => (
                    <CardDisplay
                    key={card.id}
                    card={card}
                    level={card.level}
                    deleteCard={deleteCard}
                    />
                ))
            ) : (  <p>No cards available yet. Create a new flashcard to get started.</p>
            )
            }
            
        </div>
    </div>
    );
}

export default ViewCards;