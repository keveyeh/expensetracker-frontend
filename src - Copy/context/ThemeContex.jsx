import { useEffect,useState, createContext } from "react"
 export  const themes = createContext()
export default function ProviderContex({children}){
    const themeChoice = JSON.parse(localStorage.getItem('themes')) || false
const [theme,setTheme] = useState(themeChoice)
useEffect(()=>{
    localStorage.setItem('themes',JSON.stringify(theme))
},[theme])

 return(
    
     <themes.Provider value={{theme,setTheme}}>
        {children}
     </themes.Provider>
    
 )
}