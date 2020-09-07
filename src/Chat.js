import React from 'react'
import "./Chat.css"
import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined, AttachFile, MoreVert, MoreVertOutlined } from '@material-ui/icons'
function chat() {
    return (
        <div className="chat">
           <div className="chat__header">
               <Avatar/>
               <div className="chat__headerInfo">
                   <h3>Room name</h3>
                   <p>Last seen at...</p>
               </div>
               <div className="chat__headerRight">
                    <IconButton >
                      <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                      <AttachFile/>
                    </IconButton>                   
                    <IconButton>
                      <MoreVertOutlined/>  
                    </IconButton> 
               </div>
           </div>
           <div className="chat__body">
               <p className="chat__message">
                <span className="chat__name">ZAfar</span>   
                   This is a message
                <span className="chat__timeSnap">
                {new Date().toUTCString()}
                </span>   
                </p>

                <p className="chat__message chat__reciver">
                <span className="chat__name">ZAfar</span>   
                   This is a message
                <span className="chat__timeSnap">
                {new Date().toUTCString()}
                </span>   
                </p>
                
           </div>
        </div>
    )
}

export default chat
