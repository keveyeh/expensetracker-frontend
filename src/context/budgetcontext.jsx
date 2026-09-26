import { createContext, useEffect, useState } from "react";
export  const budgetContext = createContext()
  export default function Providerbudget({children}){
    const budgetArray = JSON.parse(localStorage.getItem('Budjets')) || [] 
    const [mainArray,setmain]= useState(budgetArray)
     useEffect(()=>{
       localStorage.setItem('Budjets',JSON.stringify(mainArray))
     },[mainArray])
     const [information,setInformation]= useState({
        Id:crypto.randomUUID(),
        Category:'food',
        Amount:''
     })
     const [message,setmessage]= useState('BUDGET ADDED SUCCESSFULLY')
     const [mode,setmode]= useState('Add Budget')
     const [success,setsuccess]=useState(false)
     const [rowid,setrowId] = useState('')
     const [deleteid,setdeleteId]= useState('')
     const [showmodal,setmodal] = useState(false)
     const[budgetmodal,setbudgetmodal]= useState(false)
     const[text,setText]= useState('BUDGET DELETED SUCCESSFULLY')
     function saveBudget(e){
        e.preventDefault()
        let duplicate;
        if(mode=== 'Add Budget'){
          duplicate =  mainArray.find((element)=>{
                return element.Category === information.Category
            })
              if(duplicate){
                setmessage('BUDGET ALREADY EXIST')
                     setsuccess(true)
                     setTimeout(()=>{
                    setsuccess(false)
                   },3000)
                   setInformation({
                   Id:crypto.randomUUID(),
                    Category:'food',
                    Amount:''
                  })
                }else{
                      setmessage('BUDGET ADDED SUCCESSFULLY')
            setmain([...mainArray,information])
           setsuccess(true)
           setTimeout(()=>{
             setsuccess(false)
           },3000)
           setInformation({
             Id:crypto.randomUUID(),
             Category:'food',
             Amount:''
           })
                  
              }
            }else{
                setmessage('BUDGET EDITTED SUCCESSFULLY')
              const mains=   mainArray.map((element)=>{
                return element.Id === rowid ? {...element, Category:`${information.Category}`,
             Amount: Number(information.Amount)} : element
            })
           setsuccess(true)
           setTimeout(()=>{
             setsuccess(false)
           },3000)
         setmain(mains)
        }
     }
       function editBudget(id){
   setmodal(true)
   setmode('Edit Budget')
   
   let row = mainArray.find((element)=>{
       return element.Id === id
   })
   if (row) {
       setrowId(row.Id)
       setInformation({
           Id: row.Id,
           Category: `${row.Category}`,
           Amount : row.Amount
       })
   }
}

     
     
     function showBudgetmodal(initialmessage,id){
        setdeleteId(id)
        setbudgetmodal(true)
        setmessage(initialmessage)
          
     }
     function deleteBudget(){
      const deletedArray =   mainArray.filter((element)=>{
            return element.Id != deleteid
        })
        setmain(deletedArray)
         setsuccess(true)
           setTimeout(()=>{
             setsuccess(false)
              setbudgetmodal(false)
           },3000)
     }
    return(
        <>
        <budgetContext.Provider value={{text,showBudgetmodal,budgetmodal,setbudgetmodal,deleteBudget,editBudget,message,setmessage,success,mainArray,information,setInformation,setmain,saveBudget,mode,setmode,showmodal,setmodal}}>
            {children}
        </budgetContext.Provider>
        </>
    )
 }