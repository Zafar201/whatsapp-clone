import React, { useEffect, useState } from 'react'
import "./SidebarChat.css"
import { Avatar } from '@material-ui/core'

 function SidebarChat({addNewChat}) {
     const [seed,setSeed]=useState('')
     useEffect(() => {
         setSeed(Math.floor(Math.random()*5000))
     }, [])

     const createChat = () => {
         const roomName = prompt("please enter name for chat")

         if (roomName){
             
         }
     }

    return !addNewChat ?(
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p>His is last message</p>
            </div>
        </div>
    ):(
        <div onClick={createChat}
        className="sidebarChat">
            <h2>Add new Chat</h2>
        </div>
    )
}
export default SidebarChat