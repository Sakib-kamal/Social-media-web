import LabelIcon from '@mui/icons-material/Label';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import CancelIcon from '@mui/icons-material/Cancel';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import "./share.css"
import { useContext, useRef, useState} from 'react';
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import {useNavigate} from "react-router-dom";


import react from "react";
export default function Share() {
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const desc = useRef();
    const [file, setFile] = useState(null)
    const navigate = useNavigate();

    //impliment
    // const [data,setData] = useState([])
    // useEffect(() => {
    //     axios.get("http://localhost:8800")
    //     .then((res) => setData(res.data))
    //     .catch((err) => console.log(err,"it has an error"));

    // });

   
   
   
  //new 
    const submitHandler = async (e) => {
        e.preventDefault()
        const newPost = {
            userId: user._id,
            desc: desc.current.value,
        }
        if (file){
            const data = new FormData();
            const fileName = file.name;
            data.append("name", fileName); // Date now() add before filename
            data.append("file", file);

        //    // console.log(data.values()[0], '**(())**');
        //    {data.map((singleData) => {
        //        const base64String = btoa(
        //            String.fromCharCode(...new Unit8Array(singleData.img.data))

        //        )
        //        <img src={`data:image/png/jpeg/jpg,base64,${}`}/>
        //    })}
           newPost.img = fileName;

            try {
                await axios.post("http://localhost:8800/api/upload", data);
                
            } catch (err) {
                console.log("cannot upload");
            }
        }


        try {
            await axios.post("http://localhost:8800/api/posts", newPost)
           // window.location.reload() 
           
           
           
        }catch (err) {
            console.log(err);
        }
        
    }

    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImage" src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"} alt="" />
                    <input
                        placeholder={"what is in your mind:" + user.username + " ? "} className="shareInput"
                        ref={desc}
                    />
                </div>
                <hr className="shareHr" />
                {file && ( 
                    <div className="shareImgContainer">
                        <img className= "shareImg" src={URL.createObjectURL(file)} alt= ""/>
                        <CancelIcon className="shareCancelImg" onClick={()=>setFile(null)}/>
                    </div>
                )}
                <form className="shareBottom" onSubmit={submitHandler}>
                    <div className="shareOptions">
                        <div className="shareOption">
                            <LabelIcon htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText"> tag </span>
                        </div>
                        <label htmlFor='file' className="shareOption">
                            <AddLocationIcon htmlColor="green" className="shareIcon" /> 
                            <span className="shareOptionText"> photo or Video</span>
                            <input style={{ display: 'none' }} type="file" id='file' accept='.png,.jpeg,.jpg' onChange={(e) => setFile(e.target.files[0])} />

                        </label>
                        <div className="shareOption">
                            <BloodtypeIcon htmlColor="red" className="shareIcon" />
                            <span className="shareOptionText"> blood_group</span>
                        </div>
                    </div>
                    <button className="shareButton" type="submit">Share</button>
                </form>
            </div>
        </div>
    )
}
