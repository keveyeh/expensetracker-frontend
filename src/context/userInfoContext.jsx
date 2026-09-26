import { createContext, useEffect, useState } from "react";

 export const userInfo = createContext()
 export default function UserProvider({children}){
    const credentials = JSON.parse(localStorage.getItem('credentials')) || []
    const [usersCredentials,setUserCredentials]= useState(credentials)
    const [updatedCredentials,setUpdate]= useState({
        email:usersCredentials.email,
       location:usersCredentials.location,
       name:usersCredentials.name,
       password:usersCredentials.password,
       phone:usersCredentials.phone
    })
    useEffect(()=>{
     localStorage.setItem('credentials',JSON.stringify(usersCredentials))
    },[usersCredentials])
    return(
        <userInfo.Provider value={{updatedCredentials,setUpdate,usersCredentials,setUserCredentials}}>
            {children}
        </userInfo.Provider>
    )
 }