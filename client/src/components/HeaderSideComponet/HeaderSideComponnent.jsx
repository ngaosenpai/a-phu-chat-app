import React, {useState} from 'react'
import "./HeaderSideComponent.css"
import GroupModal from '@components/GroupModal';
import { Avatar, IconButton} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchIcon from '@mui/icons-material/Search';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import { useUserContext } from '@contexts/UserContext';

function HeaderSideComponnent() {
    const { userLocal } = useUserContext();
    const  { username, email} = userLocal;
    
    //show create groups or not
    const [createGroup, setCreateGroup] = useState(false)
    
    //check undefind
    const profile = userLocal?.profile;

    const name = profile?.name || username;
    const avatar_url = profile?.avatar_url || "";
    const status = profile?.status || "No thing"
    
    const location = profile?.location
    const gender = profile?.gender;
       
    
  return (
    <div className='header-sider'>
        <div className="user-info">
            <div className="avatar">
                <Avatar alt={name} src={avatar_url} />
                <div className="username">
                    <h3>{name}</h3>
                    <p>{status}</p>
                </div>
            </div>            
            <MoreHorizIcon />        
        </div>
        <div className="search">
            <div className="search-form">
                <SearchIcon />
                <form >
                    <input type="text"  placeholder='People, Users, Group'/>
                </form>
            </div>            
            <IconButton >
                <GroupAddOutlinedIcon onClick={() => setCreateGroup(true)}/>
            </IconButton>
            <GroupModal open={createGroup} close={() => setCreateGroup(false)}/>

        </div>
        <div className="icon">
            <div className="chat">
                <IconButton>
                    <ChatBubbleOutlineOutlinedIcon />
                </IconButton>
                <p>Chats</p>
            </div>
            <div className="contacts">
                <IconButton>
                    <MenuBookOutlinedIcon />
                </IconButton>
                <p>Contacts</p>
            </div>
            <div className="notification">
                <IconButton>
                    <NotificationsNoneRoundedIcon />
                </IconButton>
                <p>Notifications</p>
            </div>
        </div>
        
    </div>
  )
}

export default HeaderSideComponnent