import { useContext } from 'react'
import style from './search.module.css'
import { themes } from '../../context/ThemeContex'
function Search({choice,setcategory,category,setsearch}){
    const {theme}= useContext(themes)
if(choice=== null){
    return null
}else if( choice === true){
    return(
        <select className={style.input2} onChange={(e)=>{setcategory(e.target.value) 
            setsearch('')
        }} value={category} style={theme?{background:'#252538'}:{background:'white'}}>
                                                <option value='all'>All</option>
                                                <option value='salary'>Salary</option>
                                                <option value='freelance'>Freelance</option>
                                                <option value='business'>Business</option>
                                                <option value='gift'>Gift</option>
                                                <option value='investment'>Investment</option>
                                                <option value='others'>Others</option>
                                            </select> 
    )
}else{
    return(
         <select className={style.input2} onChange={(e)=>{setcategory(e.target.value)
            setsearch('')
         }} value={category} style={theme?{background:'#252538'}:{background:'white'}}>
                                                 <option value='all'>All</option>
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
}
export default Search