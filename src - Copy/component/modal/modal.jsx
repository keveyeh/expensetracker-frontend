import { useState } from 'react'
import style from './modal.module.css'
import { useContext } from 'react'
import Category from '../category/category'
import { tran } from '../../context/Transaction'
function Modal({showmodal,setmodal}){
 const [choice,setChoice] = useState(true)
 const {information,setInformation,addTask} = useContext(tran)
 
    return(
        <>
         <div className={showmodal ? style.container : style.hide}>
           <form className={style.form} onSubmit={(e)=>addTask(e)}>
            <div className={style.div}>
                <h3 className={style.h3}>ADD TRANSACTION</h3>
                <span className={style.span} onClick={()=> setmodal(false)}>x</span>
            </div>
            <div className={style.div1}>
                <label className={style.label}>
                    Description:
                </label>
                <input type='text' placeholder='Enter Description' required className={style.input1} onChange={
                    (e)=>setInformation({...information,Description:`${e.target.value.toUpperCase()}`})}/>
            </div>
            <div className={style.div2}>
                <label className={style.label}>
                    Type:
                </label>
                <select className={style.input2} onChange={(e)=>{ 
                    setChoice(!choice)
                   setInformation({...information,Type:`${e.target.value.toUpperCase()}`})}}>
                    <option value= 'income'>INCOME</option>
                    <option value='expense'>EXPENSE</option>
                </select>
            </div>
            <div className={style.div3}>
                <label className={style.label}>
                    Category:
                </label>
                    
                       <Category choice= {choice} setInformation={setInformation} information={information}/>
            </div>
            <div className={style.div4}>
                <label className={style.label}>Amount:</label>
                <input type='number' placeholder='Enter amount ' min={0} required className={style.input1} onChange={(e)=>{
                     setInformation({...information,Amount: e.target.value})}}/> 
            </div>
            <div className={style.div5}>
                <label className={style.label}>Date :</label>
                <input type='date' className={style.input4} required onChange={(e)=>{
                    setInformation({...information,Date: `${e.target.value}`})
                }}/>
            </div>
            <div className={style.input3}>
                <input type='submit' value='Add Transaction' className={style.submit}/>
            </div>
           </form>
         </div>
        </>
    )
}
export default Modal