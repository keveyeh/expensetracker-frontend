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
            Id: crypto.randomUUID(),
            Description: '',
            Type: 'EXPENSE',
            Category:'food',
            Amount: '',
            Date: ''
        })
        
        const [success,setsuccess] = useState(false)
        const [ message,setmessage] = useState('TRANSACTION ADDED SUCCESSFULLY')
         const [mode,setmode]= useState('Add Transaction')
         const [rowid,setrowid]= useState()
         const [deletedId,setDeletedId]= useState()
         const[budgetmodal,setbudgetmodal]= useState(false)
         function addTask(e){
         e.preventDefault()
       if(mode=== 'Add Transaction'){
        setmessage('TRANSACTION ADDED SUCCESSFULLY')
         setsuccess(true)
        setTimeout(()=>{setsuccess(false)},3000)
        setService([...service,information])
        setInformation({ Id: crypto.randomUUID(),
            Description: '',
            Type: 'EXPENSE',
            Category:'FOOD',
            Amount: '',
            Date: ''})
      
       }else{
        setsuccess(true)
        setTimeout(()=>{setsuccess(false)},3000)
       const services =  service.map((element)=>{
          return element.Id === rowid ? {...element,
            Description: `${information.Description}`,
            Type:`${information.Type}`,
            Category:`${information.Category}`,
            Amount : information.Amount,
            Date: `${information.Date}`} : element
        })
        setService(services)
       }

       
      
    }
    const [showmodal,setmodal] = useState(false)
    
    function edit(id){
        setrowid(id)
        setmode('Edit Transaction')
        setmessage('TRANSACTION EDITTED SUCCESSFULLY')
        setmodal(true)
     const item =  service.find((element)=>{
           return element.Id === id
        }) 
        setInformation({ Id: item.Id,
            Description: item.Description.toLowerCase(),
            Type: item.Type.toUpperCase(),
            Category:item.Category.toLowerCase(),
            Amount: item.Amount,
            Date: item.Date})
        
    }
    function deleteTransaction(id){
      setbudgetmodal(true)
      setmessage('DO YOU WANT TO DELETE THIS TRANSACTION ?')
      setDeletedId(id)
    }
    function finalDelete(){
         const deletedArray =   service.filter((element)=>{
            return element.Id != deletedId
        })
        setService(deletedArray)
         setsuccess(true)
           setTimeout(()=>{
             setsuccess(false)
              setbudgetmodal(false)
           },3000)
    }
    return(
    <tran.Provider value={{finalDelete,setbudgetmodal,budgetmodal,deleteTransaction,setmode,service,setService,information,addTask,setInformation,success,showmodal,setmodal,edit,mode,message}}>
        {children}
    </tran.Provider>
)
}