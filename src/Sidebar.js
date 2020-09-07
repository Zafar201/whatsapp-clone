import React from 'react'
import "./Sidebar.css"
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {SearchOutlined} from '@material-ui/icons'
import SidebarChat from './SidebarChat';


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://instagram.fccj2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/118011123_301479454452020_1996914687696599963_n.jpg?_nc_ht=instagram.fccj2-1.fna.fbcdn.net&_nc_ohc=ysEJi203k3gAX8JVn5N&oh=4f6bab7b7fb3c7abf9c3f8c8a907bb70&oe=5F7DAFD7" />
                <div className="sidebar__headerRight">
                    <IconButton >
                      <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                      <ChatIcon/>
                    </IconButton>                   
                    <IconButton>
                      <MoreVertIcon/>  
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
              <div className="sidebar__searchContainer">
                <SearchOutlined />
                <input placeholder="Search or start new chat" type="text"/>
              </div>   
            </div>

           <div className="sidebar__chats">
             <SidebarChat/>
             <SidebarChat/>
             <SidebarChat/>
             </div> 
        </div>
    )
}

export default Sidebar;
