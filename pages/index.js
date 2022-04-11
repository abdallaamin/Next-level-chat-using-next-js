import React , { useContext } from "react";
import {context} from '../Context';
import {useRouter} from 'next/router';

import axios from 'axios';


export default function Auth() {
  const router = useRouter()
  const {username ,secret ,setSecret ,setUsername}= useContext(context)


  function onSubmit(e){
    e.preventDefault()
    if (username.length === 0 || secret.length === 0)return 
    axios.put(
      'https://api.chatengine.io/users/',
      {username ,secret},
      {headers:{"private-key":'9a783736-081d-4456-a0db-63f3e3cbbb09'}}
    )
    .then( r => router.push('/chats'))
  }
  return (
    <div className="background">
    <div className="auth-container">
      <form className='auth-form'
            onSubmit={(e)=> onSubmit(e)}>
            <div className="auth-title">Your Next level chat built by Next.js</div>

            <div className="input-container">
            <input 
              className="text-input"
              placeholder="Email"
              onChange={(e)=> setUsername(e.target.value)}
              />
            </div>

            <div className="input-container">
            <input 
              type='password'
              className="text-input"
              placeholder="password"
              onChange={(e)=> setSecret(e.target.value)}
              />
            </div>

            <button type='submit' className="submit-button">
            Login / Sign Up
            </button>
      </form>
    </div>
    </div>
    )
}
