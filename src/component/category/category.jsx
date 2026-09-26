import { useContext } from 'react'
import  style from './category.module.css' 
import { tran } from '../../context/Transaction'
function Category(){
    const {information,setInformation } = useContext(tran)
    return(
        
        information.Type === 'INCOME' ? <select className={style.input2} onChange={(e)=>{
            setInformation({...information,Category:`${e.target.value}`})
        }} value={information.Category}>
                    <option value='salary'>Salary</option>
                    <option value='freelance'>Freelance</option>
                    <option value='business'>Business</option>
                    <option value='gift'>Gift</option>
                    <option value='investment'>Investment</option>
                    <option value='others'>Others</option>
                </select> 
                
                : 

                <select className={style.input2} onChange={(e)=>{
            setInformation({...information,Category:`${e.target.value}`})
        }} value={information.Category}>
                    <option value='food'>Food</option>
                    <option value='transport'>Transport</option>
                    <option value='bills'>Bills</option>
                    <option value='shopping'>Shopping</option>
                    <option value='entertainment'>Entertainment</option>
                    <option value='education'>Education</option>
                    <option value='health'>Health</option>
                    <option value='others'>Others</option>
                          
                </select>
        
    )
 }
 export default Category