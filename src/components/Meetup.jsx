import { useState, useEffect } from "react";
import style from "./style.module.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Meetup() {

    const [meet, setMeet] = useState([]);
    
    useEffect(() => {
        getMeetup();
    }, [])
    
    let history = useHistory();
    const getMeetup = async () => {
        await axios.get("http://localhost:3003/meet").then((res) => {
            console.log(res.data);
            setMeet(res.data);
        })
    };

    return (
        <>
             <h1 onClick={()=>{history.push("/")}}>Meets </h1>
        <div style={{ display: "flex" }}>
            
            {
                meet.map((e) => {
                    return (
                        <div className={style.meet}>
                            <h3>{e.title}</h3>
                            <p>{e.location}</p>
                             <img src={e.img} alt="" />
                            <p>{e.date}</p>
                        </div>
                    )
                })
            }

            </div>
        </>    
    );
}

export default Meetup;