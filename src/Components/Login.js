import React from "react";
import "../styles/Login.css";

function Login(){

const [email, setEmail] = React.useState('');
const [password, setPassword] = React.useState('');
const [error, setError] = React.useState('');
const [success,setSuccess] = React.useState(false);

function handleChange(event){
    const {name, value} = event.target;

    if (name === "email"){
        setEmail(value);
    } else if(name ==="password"){
        setPassword(value);
    }
}

function handleSubmit (event){
    event.preventDefault();
}

fetch("http://localhost:5000/profiles?email=" + email)
.then(function(response){
    return response.json();
})
.then(function(data){
    if (data.length === 0){
        setError("No user found with this email.")
        return;
    }

    const user = data[0];

//Checks if the password matches the one in the database
if(user.password === password){
    setSuccess(true);
    setError("");
    console.log("Login successful");
}else{
    setError("Incorrect password");
}
})

.catch(function(error){
    setError("Error logging in:" + error.message);
});


    return(
        <>
        <div className="form-container" id="login-form-container">
            
            <h2>Login</h2>
            {/* {error && <p className="error">{error}</p>}
            {success && <p className="success">Log in successful! Welcome back.</p>} */}
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-area-container">
                <div className="form-area">
                <label>Email: </label>
                <input
                type="text"
                className="input-area"
                id="email"
                name="email"
                value={email}
                placeholder="Enter your username"
                onChange={handleChange}
                required
                />
                </div>


                <div className="form-area">
                <label>Password: </label>
                <input
                type="text"
                className="input-area"
                id="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleChange}
                required
                />
                </div>
                </div>
                
                <div className="submit-btn-container" >
                <button className="btn" id="submit-btn" type="submit">Login</button>
                </div>
                
            </form>
            </div>
            {/* <p className="welcome">Yaaaaaay! Welcome back! Your flashcards missed you.</p> */}
        </>
        
    )
}

export default Login;