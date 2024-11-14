import React from "react";
import "../styles/SignUp.css";

function SignUp(){

    const[email,setEmail] = React.useState("");
    const[password,setPassword] = React.useState("");
    const[confirmPassword,setConfirmPassword] = React.useState("");
    const[error,setError] = React.useState("");
    const[success,setSuccess] = React.useState(false);
 
function handleChange(event){
    const {name,value} = event.target;
    if (name === "email"){
        setEmail(value);
    } else if (name === "password"){
        setPassword(value);
    } else if (name === "confirmPassword"){
        setConfirmPassword(value);
    }
}

function handleSubmit(event){
    event.preventDefault();

    //validate the form inputs
if(password !== confirmPassword){
    setError("Passwords do not match. Kindly try again.");
    return;
}
if (email && password){
    const newUser = {email, password};

fetch("http://localhost:5000/profiles",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(newUser)
})
.then(function(response){
    return response.json();
})
.then(function(data){
    setSuccess(true);
    setError("");
    console.log("User successfully signed up:",data);
})
.catch(function(error){
    setError("Error signing up. Try again."+ error.message);    
});
} else{
    setError("Please fill in all the details.");
}
}




    return(
        <div className="form-container">
             <h2>New here? Sign up</h2>
             {error && <p className="error">{error}</p>}
             {success && <p className="success">Sign up successful! Welcome.</p>}
        <form className="sign-up-form" onSubmit={handleSubmit}>
           <div className="form-group">
           <label>Email: </label>
            <input
            type="text"
            id="email"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={handleChange}
            />
           </div>
            <br/>

            <div className="form-group">
            <label>Password: </label>
            <input
            type="text"
            id="password"
            name="password"
            value={password}
            placeholder="Create password"
            onChange={handleChange}
            />
            </div>
            <br/>

            <div>
            <label>Password: </label>
            <input
            type="text"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Re-enter to confirm password"
            onChange={handleChange}
            />
            </div>
            
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