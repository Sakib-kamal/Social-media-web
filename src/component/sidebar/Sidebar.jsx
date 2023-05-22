import "./sidebar.css"
import FeedIcon from '@mui/icons-material/Feed';
import TextsmsIcon from '@mui/icons-material/Textsms';
import GroupIcon from '@mui/icons-material/Group';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import NoteIcon from '@mui/icons-material/Note';
import EventIcon from '@mui/icons-material/Event';

export default function Sidebar() {
    return (
        <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <FeedIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText"> feed </span>
                </li>
                <li className="sidebarListItem">
                    <TextsmsIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText"> chat </span>
                </li>
                <li className="sidebarListItem">
                    <GroupIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText"> Group</span>
                </li>
                <li className="sidebarListItem">
                    <VideoLibraryIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText">  videos </span>
                </li>
                <li className="sidebarListItem">
                    <NoteIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText"> Note </span>
                </li>
                <li className="sidebarListItem">
                    <EventIcon className="sidebarIcon"/>
                    <span className="sidebarListItemText"> Events </span>
                </li>
           </ul>
           <button className="sidebarButton"> show More</button>
           <hr className="sidebarHr"/>
           <ul className="sidebarFriendList">
               <li className="sidebarFriend">
                   <img className="sidebarFriendImage" src="/assets/person/Friends.jpg" alt=""/>
                   <span className="sidebarFriendName">Friends</span>
               </li>
               <li className="sidebarFriend">
                   <img className="sidebarFriendImage" src="/assets/person/Friends.jpg" alt=""/>
                   <span className="sidebarFriendName">Friends</span>
               </li>
               <li className="sidebarFriend">
                   <img className="sidebarFriendImage" src="/assets/person/Friends.jpg" alt=""/>
                   <span className="sidebarFriendName">Friends</span>
               </li>
               <li className="sidebarFriend">
                   <img className="sidebarFriendImage" src="/assets/person/Friends.jpg" alt=""/>
                   <span className="sidebarFriendName">Friends</span>
               </li>
               <li className="sidebarFriend">
                   <img className="sidebarFriendImage" src="/assets/person/Friends.jpg" alt=""/>
                   <span className="sidebarFriendName">Friends</span>
               </li>
               <li className="sidebarFriend">
                   <img className="sidebarFriendImage" src="/assets/person/Friends.jpg" alt=""/>
                   <span className="sidebarFriendName">Friends</span>
               </li>
               <li className="sidebarFriend">
                   <img className="sidebarFriendImage" src="/assets/person/Friends.jpg" alt=""/>
                   <span className="sidebarFriendName">Friends</span>
               </li>
               <li className="sidebarFriend">
                   <img className="sidebarFriendImage" src="/assets/person/Friends.jpg" alt=""/>
                   <span className="sidebarFriendName">Friends</span>
               </li>
               <li className="sidebarFriend">
                   <img className="sidebarFriendImage" src="/assets/person/Friends.jpg" alt=""/>
                   <span className="sidebarFriendName">Friends</span>
               </li>
               <li className="sidebarFriend">
                   <img className="sidebarFriendImage" src="/assets/person/Friends.jpg" alt=""/>
                   <span className="sidebarFriendName">Friends</span>
               </li>
               <li className="sidebarFriend">
                   <img className="sidebarFriendImage" src="/assets/person/Friends.jpg" alt=""/>
                   <span className="sidebarFriendName">Friends</span>
               </li>
               <li className="sidebarFriend">
                   <img className="sidebarFriendImage" src="/assets/person/Friends.jpg" alt=""/>
                   <span className="sidebarFriendName">Friends</span>
               </li>
               <li className="sidebarFriend">
                   <img className="sidebarFriendImage" src="/assets/person/Friends.jpg" alt=""/>
                   <span className="sidebarFriendName">Friends</span>
               </li>
               
           </ul>
        </div>
        </div>
    );
}
