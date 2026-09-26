import style from './dashboar.module.css'
import Navbar from '../../component/Sidebar/sidebar'
import Modal from '../../component/modal/modal'
import { useContext, useState} from 'react'
import { FaArrowTrendUp,FaArrowTrendDown,FaWallet } from 'react-icons/fa6'
import Header from '../../component/header/header'
import TransactionTable from '../../component/TransactionTable/TransactionTable'
import ExpenseBarChart from '../../component/expenseBar/expenseBar'
import ExpensePieChart from '../../component/expensePie/expenxePie'
import DeleteModal from '../../component/deletemodal/deletemodal'
import { tran } from '../../context/Transaction'
import { currency } from '../../context/currency'
function DashBoard(){
    const {updatecurrency}= useContext(currency)
    const {service,success,budgetmodal,setbudgetmodal,message,finalDelete} = useContext(tran)
    const [showmodal,setModal] = useState(false)
    const[showsideBar,setshowsideBar] = useState(false)
     const text = 'TRANSACTION DELETED SUCCESSFULLY'
     const  searchs= ''
     const type= 'All'
     const category= 'all'
          const income = service.reduce((acc,currentValue)=>{
           return  currentValue.Type === 'INCOME' ? (acc + Number(currentValue.Amount)) : acc
            
            },0) || 0
            const expense = service.reduce((acc,currentValue)=>{
               return  currentValue.Type === 'EXPENSE' ? (acc + Number(currentValue.Amount)) : acc
            },0) || 0
      function updateMoney(amount){
      let finalAmount;
      if(updatecurrency=== 'FCFA'){
        finalAmount = amount
      }else if(updatecurrency=== 'USD'){
        finalAmount = (Number(amount) / 565).toFixed(2)
      }else{
        finalAmount = (Number(amount) / 655.957).toFixed(2)
      }
      return finalAmount
    }
    return(
        <>
        <Header setshowsideBar={setshowsideBar} showsideBar={showsideBar} page='Dashboard'/>
        <Navbar setmodal = {setModal}  showsideBar={showsideBar} setshowsideBar={setshowsideBar}/>
        <Modal showmodal= {showmodal} setmodal = {setModal} />
            <div className={style.help}>
                <div className={style.container}>
                    <div className={style.contain}>
                        <div className={style.card}>
                                <div className={style.icon}>
                                    <FaArrowTrendUp />
                                </div>
                                <span className={style.span}> Total Income</span>
                            <div className={style.div2}>{updateMoney(income).toLocaleString('en-US') || 0} {updatecurrency}</div>
                        </div>
                        <div className={style.card}>
                                <div className={style.icon}>
                                    <FaArrowTrendDown />
                                </div>
                                <span className={style.span}>Total Expense</span>
                            
                            <div className={style.div2}>{updateMoney(expense).toLocaleString('en-US') || 0} {updatecurrency}</div>
                        </div>
                        <div className={style.card}>
                               <div className={style.icon}>
                                   <FaWallet />
                               </div>
                                <span className={style.span}>Total Balance</span>
                            <div className={style.div2}>{updateMoney(income- expense).toLocaleString('en-US') || 0} {updatecurrency}</div>
                        </div>
                
                    </div>
                    <div className={style.chart}>
                    
                         <ExpenseBarChart/>
                       
                    </div>
                </div>                    <div className={style.pie}>
                     <ExpensePieChart/>
                    </div>

            </div>
           <div className={style.note}> 
            <div className={style.tran}>
            <h3>Recent Transaction</h3>
                <TransactionTable search={searchs} type={type} category={category} limit={5} text={'PLEASE ADD SOME TRANSACTIONS'}/>
            </div>
           </div>
           <DeleteModal budgetmodal={budgetmodal} setbudgetmodal={setbudgetmodal} success={success} message={message} text={text} deleteBudget={finalDelete}/>
        </>
    )
}
export default DashBoard