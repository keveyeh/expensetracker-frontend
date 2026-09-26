import { useContext } from 'react'
import style from './budgetmodal.module.css'
import { budgetContext } from '../../context/budgetcontext'
function Budgetmodal({showmodal,setmodal,message}){
    const {success,information,setInformation,saveBudget,mode}= useContext(budgetContext)
    
return(
    <>
    <div className={ showmodal ?style.container : style.containers}>
     <div className={success? style.messages : style.message}>
       {message}
     </div>
      <form className={style.form} onSubmit={(e)=>{saveBudget(e)}}>
        <div className={style.div1}>
            <h3>{mode}</h3>
            <span onClick={(prev)=> {setmodal(!prev)
               
            }}>X</span>
        </div>
        <div className={style.div2}>  
            <label>Category</label>
            <select value={information.Category} onChange={(e)=>setInformation({...information,Category: `${e.target.value}`})}>
              <option value='food'>Food</option>
                    <option value='transport'>Transport</option>
                    <option value='bills'>Bills</option>
                    <option value='shopping'>Shopping</option>
                    <option value='entertainment'>Entertainment</option>
                    <option value='education'>Education</option>
                    <option value='health'>Health</option>
                    <option value='others'>Others</option>
            </select>
        </div>
        <div className={style.div3}>
            <label> Budget Amount (FCFA)</label>
             <input type='number' min={0} placeholder='amount' required value={information.Amount} onChange={(e)=>setInformation({...information,Amount:Number(e.target.value)})}/>
        </div>
        <div className={style.div4}>
            <span onClick={(prev)=>setmodal(!prev)}>Cancel</span>
            <button type='submit'>{mode}</button>
        </div>
      </form>
    </div>
    
    </>
)
}
export default Budgetmodal