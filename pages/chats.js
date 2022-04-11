import React ,{useState , useContext  } from "react";
import {UseEffect} from 'react';
import {context } from '../context'

import {useRouter } from "next/router"
import dynamic from "next/dynamic";

const ChatEngine = dynamic(() =>
import("react-chat-engine").then((module)=> module.ChatEngine))

const MessageFormSocial = dynamic(()=>
import("react-chat-engine").then((module)=>module.MessageFormSocial))


export default function Chats() {
  const {username,secret} = useContext(context)
  const [showChat , setShowChat]=useState(false)
  const router = useRouter()

//   useEffect(() => {
//     if(typeof document !==null){
//       setShowChat(true)
//   }
// })
React.useEffect(() => {
  if(typeof document !==null){
          setShowChat(true)
      }
},[]);

React.useEffect(() => {
  if(typeof document !==null){
          setShowChat(true)
      }
},[]);
    if (!showChat) return <div />
  return (
    <div className="background">
      <div className="shadow">
      <ChatEngine
      height='calc(100vh - 150px)'
			userName={username}
			userSecret={secret}
			projectID='774a1227-f08a-43c5-b84e-4e8382e79dc1'
      renderNewMessageForm={()=><MessageFormSocial/>}
      style={{overflow: "hidden scroll"}}
        />
      </div>
    </div>
  )
}
