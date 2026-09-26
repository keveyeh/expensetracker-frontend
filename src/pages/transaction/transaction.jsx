import { useState } from 'react'
import Header from '../../component/header/header'
import Modal from '../../component/modal/modal'
import Navbar from '../../component/Sidebar/sidebar'
import TransactionTable from '../../component/TransactionTable/TransactionTable'
import style from './transaction.module.css'
import Search from '../../component/search/search'
import { useContext } from 'react'
import { tran } from '../../context/Transaction'
import DeleteModal from '../../component/deletemodal/deletemodal'

function Transaction(){
    const [choice,setChoice]= useState(null)
     const[showsideBar,setshowsideBar] = useState(false)
    const{setmodal,setmode,setInformation,success,budgetmodal,setbudgetmodal,message,finalDelete,service} = useContext(tran)
    const [searchs,setsearch]= useState('')
     const[type,settype]= useState('All')
     const text = 'TRANSACTION DELETED SUCCESSFULLY'
     const[category,setcategory]= useState('all')
     let texts;
            if(service.length === 0 && searchs==='' && type === 'All' && category==='all'){
                 texts= 'PLEASE ADD SOME TRANSACTIONS'
            }else{
                texts = 'NO SERCH RESULT MATCH THAT'
            }
          return(
              <>
              <div className={style.addcontainer}>
                    <button className={style.addtask} onClick={()=>{setmodal(true)
                        setmode('Add Transaction')
                        setInformation({ Id: crypto.randomUUID(),
            Description: '',
            Type: 'EXPENSE',
            Category:'FOOD',
            Amount: '',
            Date: ''})
                    }}>+ Add Transaction</button>
                    
                </div>
               <div className={style.container}>
                
                <div className={style.subcontainer}>
                    <select className={style.select1} onChange={(e)=>{
                       settype(e.target.value)
                       setcategory('all')
                       setsearch('')
                       if(e.target.value=== 'Income'){
                            setChoice(true) 
                        }else if(e.target.value === 'Expense'){
                             setChoice(false)
                        }else{
                             setChoice(null)
                        }
                        
                    }}>
                     <option value='All'>All</option>
                      <option value='Income'>Income</option>
                       <option value='Expense'>Expense</option>
                    </select>
                    <Search choice={choice} setcategory={setcategory} category={category} setsearch={setsearch}/>
                    <div className={style.inputdiv}>
                        <input type='text' placeholder='Search Transaction' onChange={(e)=>setsearch(e.target.value)} value={searchs}/>
                        <button>🔍</button>
                    </div>
                </div>
                <TransactionTable search={searchs} type={type} category={category} limit={0} text={texts}/> 
               </div>
              
              <Header setshowsideBar={setshowsideBar} showsideBar={showsideBar} page='Transaction'/>
              <Navbar  showsideBar={showsideBar} setshowsideBar={setshowsideBar}/>
              <Modal/>
              <DeleteModal budgetmodal={budgetmodal} setbudgetmodal={setbudgetmodal} success={success} message={message} text={text} deleteBudget={finalDelete}/>
              </>
          )
}
export default Transaction