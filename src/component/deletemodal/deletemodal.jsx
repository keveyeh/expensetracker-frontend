import style from './deletemodal.module.css'
function DeleteModal({budgetmodal,setbudgetmodal,message,success,text,deleteBudget}){
    return(
    <>
     <div className={ budgetmodal? style.container : style.containers}>
        <div className={  success ? style.message :style.messages}>
            {text}
        </div>
        <div className={style.subcontainer}>
            <h3>{message}</h3>
            <div>
                <span className={style.span} onClick={()=>setbudgetmodal(false)}>NO</span>
                <span className={style.span} onClick={deleteBudget}>YES</span>
            </div>
        </div>
     </div>
    
    </>
)
}
export default DeleteModal