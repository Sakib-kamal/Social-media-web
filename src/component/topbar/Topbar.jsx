import "./topbar.css";
import SearchIcon  from '@mui/icons-material/Search';
import  PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext"
import { useContext } from "react";

export default function Topbar() {
   const {user} = useContext(AuthContext);
 //  console.log(user, ' &&&&&&&&&&&&&77');
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo">Sky-social</span>
            </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <SearchIcon className="search"/>
                    <input placeholder="search for friend, post or video" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLInk">Homepage</span>
                    <span className="topbarLInk">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <PersonIcon/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <ChatIcon/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <NotificationsIcon/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div><Link to ={'/profile'}>
                <img src={user.profilePicture? PF+ user.profilePicture: PF+ "person/noAvatar.png"} alt="" className="topbarImage" />
                </Link>
            </div>   
        </div>
    )
}

