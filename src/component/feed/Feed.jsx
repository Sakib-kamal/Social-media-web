import { useEffect , useContext, useState} from "react";
import Post from "../post/Post";
import Share from "../share/Share";
// import {Posts } from "../../userData";
import axios from "axios"
import "./feed.css";
import { AuthContext } from "../../context/AuthContext";


export default function Feed( {username} ) {
 const [posts, setPosts] = useState([]);
 const {user} = useContext(AuthContext)



    useEffect(() => {
        const fetchPosts = async () => {

           const res =  username 
           ?  await axios.get("http://localhost:8800/api/posts/profile/" +{username})
           : await axios.get("http://localhost:8800/api/posts/timeline/" + user._id);
            setPosts(res.data.sort((p1,p2) =>{
                return new Date(p2.createdAt)- new Date(p1.createdAt);

            })
            );
        };
        fetchPosts();
    }, [ username,user._id]);
    return (
        <div className="feed">
            <div className="feedWrapper">
                 {(!username || username === user.username) && <Share />}
                {posts.length !== 0 ? posts.map((p ,index) => (
                    <Post key={index} post={p} />
                    // console.log()
                )) : "Loading"}



            </div>
        </div>
    );
}
