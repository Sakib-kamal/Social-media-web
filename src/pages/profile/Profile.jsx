import Topbar from "../../component/topbar/Topbar";
import Sidebar from "../../component/sidebar/Sidebar";
import Feed from "../../component/feed/Feed";
import Rightbar from "../../component/rightbar/Rightbar";
import { useContext, useEffect , useState } from "react";
import "./profile.css"
import axios from "axios";
import {useParams} from "react-router";
import { AuthContext } from "../../context/AuthContext";


export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [User, setUser] = useState({});
    const username = useParams().username;
    const {user} = useContext(AuthContext);

     useEffect(()=>{
   const fetchUser = async () =>{
     const res = await axios.get(`http://localhost:8800/api/users?username=${username}`);
     setUser(res.data);
    // console.log(res.data);
        
  // const res = await axios.get('http://localhost:8800/api/users/61bf68871561021d47e4174d/${post.userId}');
 // setUser(res.data)
  
         }
        fetchUser();
     
     },  [username]);
    return (
        <>
        <Topbar />  
        <div className="profile">
        <Sidebar />
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
               <img  className="profileCoverImage" src={User.coverPicture ? PF + user.coverPicture : PF+"person/noCover.png"} alt="" /> 
              <img  className="profileUserImage" src={user.profilePicture ? PF + user.profilePicture : PF+"person/noAvatar.png"} alt="" />   
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
            <span className="profileInfoDesc"> {user.desc}</span>
            </div>
            </div>
            <div className="profileRightBottom">
            <Feed username={username}/>
        <Rightbar user={user}/> 
        </div> </div>
       </div>
        </>
    )
}
