import React from "react";
import "../styles/CreateCards.css";

function CreateCards({createCard}){

    //state variables
const[level,setLevel] = React.useState("");
const[hanzi,setHanzi] = React.useState("");
const[pinyin,setPinyin] = React.useState("");
const[englishTranslation,setEnglishTranslation] = React.useState("");
const[message,setMessage] = React.useState("");

const levels = [1,2,3,4,5,6,7,8,9];

//functions that are handling the change in the input fields
function handleLevelChange(event){
    setLevel(event.target.value);
}
function handleHanziChange(event){
    setHanzi(event.target.value);
}

function handlePinyinChange(event){
    setPinyin(event.target.value);
}

function handleEnglishTranslationChange(event){
    setEnglishTranslation(event.target.value);
}


function handleSubmit(event){
    event.preventDefault();


//Conditional operation that ensures all fields are filled
if (!level || !hanzi || !pinyin || !englishTranslation ){
    setMessage("Please fill in all fields.");
    return;
}
createCard({level,hanzi,pinyin,englishTranslation});
setMessage("Card created successfully!");
console.log('card created');

//resets the input fields
setLevel("");
setHanzi("");
setPinyin("");
setEnglishTranslation("");
}





    return(
        <div className="form-container">
            <h2>Create a New Card</h2>
            <form onSubmit={handleSubmit}>
            <label>HSK Level: </label>
                <select
                value={level}
                onChange={handleLevelChange}>
                    <option value="">Select a HSK Level</option>
                    {levels.map((level)=>(
                        <option 
                        key={level}
                        value={level}
                        >Level{level}</option>
                    ))}
                </select>
                <br/>

                <label>Hanzi: </label>
                <input
                id="hanzi"
                type="text"
                value={hanzi}
                onChange={handleHanziChange}
                /><br/>

                <label>Pinyin: </label>
                <input
                id="pinyin"
                type="text"
                value={pinyin}
                onChange={handlePinyinChange}
                /><br/>

                <label>English Translation: </label>
                <input
                id="english-translation"
                type="text"
                value={englishTranslation}
                onChange={handleEnglishTranslationChange}
                /><br/>
                <button type="submit" className="btn">Create</button>
            </form>
        </div>
    )
}

export default CreateCards;