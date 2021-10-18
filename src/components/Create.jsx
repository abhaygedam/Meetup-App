import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";



function Create() {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState(" ");
    const [img, setImg] = useState("");
      let history = useHistory();

    const handleCreate = async () => {
        const data = {
            title: title,
            location: location,
            date: date,
            img: img,
        }
    
          await axios.post("http://localhost:3003/meet", data).then((res) => {
              console.log(res.data);
               history.push("/meet");
        })

    }
    return (
        <div>
            <div><br />
                 <h1>Create Meet</h1>
                <br /><br /><br />
                <input type="text" placeholder="Enter Title" onChange={(e) => { setTitle(e.target.value) }} /><br/>
                <input type="text" placeholder="Location" onChange={(e) => { setLocation(e.target.value) }} /><br/>
                <input type="text" placeholder="date" onChange={(e) => { setDate(e.target.value) }} /><br/>
                <input type="text" placeholder="Image" onChange={(e) => { setImg(e.target.value) }} /><br/>
                <button onClick={handleCreate}>Create Meet</button>
            </div>
        </div>
    );
}

export default Create;