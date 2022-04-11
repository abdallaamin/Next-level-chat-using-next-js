import react, { useState , createContext } from 'react';

export  const context = createContext()

export const ContextProvider = (props) =>{
    const [ username,setUsername ]= useState("")
    const [ secret ,setSecret ]= useState("")


    const  value ={
        username,
        setUsername,
        secret,
        setSecret
    }

    return <context.Provider value={value} > {props.children} </context.Provider>


}
