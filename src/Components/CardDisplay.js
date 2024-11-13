import React from "react";
import '../styles/CardDisplay.css';

function CardDisplay({level,hanzi,pinyin,englishTranslation}){
    const[flipped,setFlipped]=React.useState(false);

    function handleFlip(){
        setFlipped(!flipped);
    }
return(
        <>
        <div className="card-display" >
            {flipped ? 
            (
                <div className="card-back">
                    <h3>English Translation:</h3>
                    {/* <p>{englishTranslation}</p> */}
                    <p>Name</p>
                </div>
            ) 
            : 
            (
                <div>
                    <h3>Hanzi: </h3>
                    {/* <p>{hanzi}</p> */}
                    <p>名字</p>
                    <h2>Pinyin: </h2>
                    {/* <p>{pinyin}</p> */}
                    <p>ming zi</p>
                </div>
            )
            }
            <button  
            className="btn"
            id="flip-btn"
            onClick={handleFlip}>
                Flip</button>
        </div>
        </>
    
    )
}

export default CardDisplay;