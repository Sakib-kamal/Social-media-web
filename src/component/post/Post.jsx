import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { users} from "../../userData";
import {useContext, useEffect, useState } from "react";
import {format} from "timeago.js"

import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
// import { $where } from "../../../../RestApi/models/User";

export default function Post({post}) {
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const {user:currentUser} =useContext(AuthContext)
useEffect(()=>
{
    setIsLiked(post.likes.includes(currentUser._id))
},[currentUser._id, post.likes]);


     useEffect(()=>{
         const fetchUser = async () =>{

     const res = await axios.get (`http://localhost:8800/api/users?userId=${post.userId}`)
     .then(res => { setUser(res.data)
        
        })
        
  // const res = await axios.get('http://localhost:8800/api/users/61bf68871561021d47e4174d/${post.userId}');
 // setUser(res.data)
  
         }
        fetchUser();
     
     },  [post.userId]);

    const likeHandler =()=>{
        try{
            axios.put("http://localhost:8800/api/posts/"+post._id+"/like",{userId:currentUser._id})
        }catch(err){

        }
    
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={ user.profilePicture ? PF + user.profilePicture
                           : PF+"person/noAvatar.png"}
                            alt=""/> 
                
                        <span className="postUserName">{user.username }</span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                   
                      <div className=""></div>
                   <img className="postImg" src={PF + post.img} alt=""/>
                     {/* <img className="postImg" src="" alt="img"/> */}
                     {/* <img className="postImg" src={ post?.desc ?  post?.desc
                           : PF+"person/noAvatar.png"}
                            alt="oops"/>  */}
                
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                    <img className="likeIcon" src={PF+"heart.png"} onClick={likeHandler} alt=""/>
                    <img className ="likeIcon" src={PF+"like.png"} onClick={likeHandler}  alt=""/> 
                    <span className="postLikeCounter"> {like} people like it </span>    
                    </div>
                    <div className="postBottomRight">
                    <span className="postCOmmentText">{post.comment} comments </span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
