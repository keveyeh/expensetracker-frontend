import { useState,useEffect } from "react";
 import { createContext } from "react";  

export const tran = createContext()
 export default function ProviderTransaction({children}){
    const transaction = JSON.parse(localStorage.getItem('transactions')) || []
     const  [service,setService] = useState(transaction)
    useEffect(()=>{
        localStorage.setItem('transactions',JSON.stringify(service))
    },[service])
     const [information, setInformation] = useState({
            id: crypto.randomUUID(),
            Description: '',
            Type: 'INCOME',
            Category:'',
            Amount: 233,
            Date: ''
        })
    function addTask(e){
       e.preventDefault()
      
       console.log(information)
       if(information['Amount'] > 100){
        setService([...service,information])
       }else{
        alert('amount must be greater than 500 frs')
       }
    }
return(
    <tran.Provider value={{service,setService,information,addTask,setInformation}}>
        {children}
    </tran.Provider>
)
}