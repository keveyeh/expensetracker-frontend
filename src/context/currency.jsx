import { createContext, useEffect, useState } from "react";




export const currency = createContext()

export default function CurrencyProvider({children}){
     const actualCurrency = localStorage.getItem('currencys') || 'FCFA'
     const[updatecurrency,setCurrency]= useState(actualCurrency)
     useEffect(()=>{
        localStorage.setItem('currencys',updatecurrency)
     },[updatecurrency])
    return(
        <currency.Provider value={{updatecurrency,setCurrency}}>
            {children}
        </currency.Provider>
    )
}