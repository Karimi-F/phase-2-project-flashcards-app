import React from "react";
import '../styles/CardDisplay.css';

function CardDisplay({card,deleteCard}){
    const {id,level,hanzi,pinyin,englishTranslation} = card;
    const[flipped,setFlipped]=React.useState(false);

    function handleFlip(){
        setFlipped(!flipped);
    }

    function handleDelete(){
        deleteCard(card.id);
    }

return(
        <>
        <div className="card-display" >
            {flipped ? 
            (
                <div className="card-back">
                    <h3>English Translation:</h3>
                    <p>{englishTranslation}</p>
                    {/* <p>Name</p> */}
                </div>
            ) 
            : 
            (
                <div className="card-front">
                    <h3>Hanzi: </h3>
                    <p>{hanzi}</p>
                    {/* <p>名字</p> */}
                    <h2>Pinyin: </h2>
                    <p>{pinyin}</p>
                    {/* <p>ming zi</p> */}
                </div>
            )
            }
            <div className="btn-container"> 
                <button  
            className="btn"
            id="flip-btn"
            onClick={handleFlip}
            >
                Flip</button>

                <button
                className="btn"
                id="dlt-btn"
                onClick={handleDelete}
                >Delete</button>
                </div>
           
        </div>
        </>
    
    )
}

export default CardDisplay;