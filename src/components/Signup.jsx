import {TextField} from '@mui/material';
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Signup() {
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [location, setLocation] = useState();
    const [interest, setInterest] = useState();
     const history = useHistory();

    const handleSubmit = () => {
        console.log(name, age, location, interest);
         history.push("/");
    }


    return (
        <div>
            <div>
                <h1>Sign Up</h1>
                <input id="outlined-basic" label="Name" variant="name" placeholder="Name" onChange={(e)=>{setName(e.target.value)}}/><br/>
                <input id="filled-basic" label="Age" variant="age" placeholder="Age"  onChange={(e)=>{setAge(e.target.value)}}/><br/>
                <input id="standard-basic" label="Location" variant="standart" placeholder="Location" onChange={(e) => { setLocation(e.target.value) }} /><br />
                <select name="" id=""  onChange={(e) => { setInterest(e.target.value) }} >
                    <option>Food</option>
                    <option>Travel</option>
                    <option>Movies</option>
                     <option>Art</option>
                </select>
                <button onClick={handleSubmit}>
                    Submit
                </button>
              </div>   
        </div>
    );
}

export default Signup;