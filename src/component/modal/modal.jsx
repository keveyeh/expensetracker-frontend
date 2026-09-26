import style from './modal.module.css'
import { useContext } from 'react'
import Category from '../category/category'
import { tran } from '../../context/Transaction'

function Modal(){
    const {showmodal,setmodal,message,mode} = useContext(tran) 
    const {information,setInformation,addTask,success} = useContext(tran)
    return(
        <>
       
         <div className={showmodal ? style.container : style.containers}>
            <div className={success ?style.messages : style.message}>
           {message}
        </div>
           <div className={style.head}>
            <form className={style.form} onSubmit={(e)=>addTask(e)}>
            <div className={style.div2}>
                <h3>{mode}</h3>
                <span onClick={()=>setmodal(false)}>X</span>
            </div>
            <div className={style.div1}>
                <label>Type</label>
                <div className={style.btn1}>
                    <span className={ information.Type === 'EXPENSE' ? style.btn2 : style.btn12} onClick={
                        ()=> {
                            setInformation( (prev)=>({...prev,Category:'FOOD'}))
                            setInformation((prev)=>({...prev,Type:'EXPENSE'}))
                     }}>
                        Expense
                    </span>
                    <span className={ information.Type=== 'INCOME' ?style.btn13  : style.btn3} onClick={()=>{
                        setInformation( (prev)=>({...prev,Category:'SALARY'}))
                        setInformation((prev)=>({...prev,Type:'INCOME'}))
                        }}>
                            Income
                    </span>
                </div>
            </div>
            <div className={style.div3}>
              <label>Amount</label>
              <div className={style.amount}>
               <input type='number' min={0} placeholder='0' required onChange={(e)=>setInformation({...information,Amount:e.target.value})} value={information.Amount}/>
               <span>FCFA</span>
              </div>
              
            </div>
            <div className={style.div4}>
                <label>Description</label>
                <div className={style.description}>
                    <input type='text' placeholder='Enter Description...'required onChange={(e)=>setInformation({...information,Description:`${e.target.value}`})} value={information.Description}/>
                </div>
            </div>
            <div className={style.div5}>
                <div className={style.category}>
                    <label>Category</label>
                    <div>
                        <div>
                            <Category  information={information} setInformation={setInformation}/>
                        </div>
                    </div>
                </div>
                <div className={style.date}>
                    <label>Date</label>
                    <div>
                        <input type='date' required onChange={(e)=>setInformation({...information,Date:`${e.target.value}`})} value={information.Date}/>
                    </div>
                </div>
            </div>
            <div className={style.div6}>
                <span className={style.btn4} onClick={()=>setmodal(false)}>Cancel</span>
                <button type='submit' className={style.btn5}>{mode}</button>
            </div>
           </form>
           </div>
         </div>
        
        </>
    )
}
export default Modal