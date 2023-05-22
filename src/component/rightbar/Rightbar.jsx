import "./right.css";
import {users} from "../../userData"
import Online from "../online/Online";
import { useEffect,useState, useContext} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import  {Add ,Remove} from "@mui/icons-material";


export default function Rightbar(user) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends , setFriends] = useState([]);
  const {user: currentUser, dispatch} = useContext(AuthContext)
  const [followed, setFollowed] = useState();

  useEffect(()=>{
    setFollowed();
},[currentUser, user._id]);

  useEffect(()=>{
    const getFriends= async ()=>{
      try{
        const friendList = await axios.get("/users/friends/"+user._id);
        setFriends(friendList.data);
     } catch(err){
console.log(err)
      }
    };
    getFriends();
  }, [user._id]);

 const handleClick = async ()=>{
   try{
     if(followed){
       await axios.put(" http://localhost:8800/api/users/"+user._id+"/unfollow", {userId:currentUser._id,})
       dispatch({type:"UNFOLLOW",payload:user._id})
     }else{
      await axios.put(" http://localhost:8800/api/users/"+user._id+"/follow", {userId:currentUser._id,})
      dispatch({type:"FOLLOW",payload:user._id}) 
     }
   }catch(err)
   {
     console.log(err)
   }
   setFollowed(!followed)
 }
  const HomeRightbar = () => {

    return(
      <>
       <div className="birthdayContainer">
                 <img className="birthdayImg" src={PF+"gift.png"} alt=""/> 
                 <span className="birthdayText">
                     {""}
                    
                 </span>
                 </div>
                 <img className="rightbarAd" src={PF+"s7.jpeg"} alt="" />
                 <h4 className="rightbarTitle"> Friends</h4>
                 <ul className="rightbarFriendList">
                 { 
                   users.map((u)=>(
                     <Online key={u.id} user={u}/>
                   ))
                 }   
                    
                 </ul>
      </>
    )
  }
  const ProfileRightbar = () =>
  {
    return(
      <>
      {user.username !== currentUser.username && (
          <button className="rightbarFollowButton" onClick={handleClick}>
            {followed ? "Unfollow": "follow" } 
            {followed ?  <Remove /> :  <Add />}
            
          </button>
        )}
      <h4 className="rightbarTitle">User information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">{user.city}</span>
          
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From :</span>
          <span className="rightbarInfoValue">{user.from}</span>
          
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship :</span>
          <span className="rightbarInfoValue">{user.relationship===1 ? "single" :user.relationship ===2 ? "Married" : "__"}</span>
          
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey"> Degree :</span>
          <span className="rightbarInfoValue">{user.degree}</span>
          
          </div>
        {/* <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Education :</span>
          <span className="rightbarInfoValue">Btech</span>
          
        </div> */}
      </div>
      <h4 className="rightbarTitle">User friend</h4>
      <div className="rightbarFollowings">
        {friends.map((friend)=>{
          <Link to={"/profile/"+friend.username} style ={{textDecoration:"none"}}>
<div className="rightbarFollowing">
          <img src=  {friend.profilePicture ? PF+ friend.profilePicture: PF +"person/noAvatar.png"} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">{user.username}</span>
       
 </div>
 </Link>
         })}
         </div>
         
   </>
    );
  };
    return (
        <div className="rightbar">
          <div className="rightbarWrapper">
          { user ? <ProfileRightbar/> : <HomeRightbar/> }
                 </div> 
        </div>
    );
}
