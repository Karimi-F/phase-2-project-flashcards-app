import React from "react";
import "../styles/SignUp.css";

function SignUp(){
function handleChange(){

}

function handleSubmit(event){
    event.preventDefault();
}

    return(
        <div className="form-container">
        <form className="frm-card" onSubmit={handleSubmit}>
            <h2>New here? Sign up</h2>
            <label>Email: </label>
            <input
            type="text"
            // value={}
            placeholder="Enter email"
            onChange={handleChange}
            />
            <br/>
            <label>Password: </label>
            <input
            type="text"
            // value={}
            placeholder="Create password"
            onChange={handleChange}
            />
            <br/>
            <label>Password: </label>
            <input
            type="text"
            // value={}
            placeholder="Re-enter password"
            onChange={handleChange}
            />
            <br/>
            <button 
            type="submit"
            className="btn"
            >
                Create</button>
        </form>
        </div>
    )
}

export default SignUp;