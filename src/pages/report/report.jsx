import Modal from '../../component/modal/modal'
import Navbar from '../../component/Sidebar/sidebar'
import { useContext, useState } from 'react'
import Header from '../../component/header/header'
import style from './report.module.css'
import ExpensePieChart from '../../component/expensePie/expenxePie'
import BarChart from '../../component/barchart/barchart'
import TransactionTable from '../../component/TransactionTable/TransactionTable'
import { currency } from '../../context/currency'
import { tran } from '../../context/Transaction'
import DeleteModal from '../../component/deletemodal/deletemodal'
import {  FaArrowTrendDown, FaArrowTrendUp, FaWallet } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
function Report(){
    const {updatecurrency}= useContext(currency)
        const {service,success,budgetmodal,setbudgetmodal,message,finalDelete} = useContext(tran)
        const [showmodal,setModal] = useState(false)
        const[showsideBar,setshowsideBar] = useState(false)
         const text = 'TRANSACTION DELETED SUCCESSFULLY'
    const searchs= ''
     const type = 'All'
     const category = 'all'
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
    const navigate = useNavigate()
       return(
           <>
           <Header setshowsideBar={setshowsideBar} showsideBar={showsideBar} page='Report'/>
              <Navbar setmodal = {setModal} showsideBar={showsideBar} setshowsideBar={setshowsideBar}/>
           <Modal showmodal= {showmodal} setmodal = {setModal} />
            <div className={style.container}>
                <div className={style.subcontainer}>
                    <div className={style.card}>
                        <div className={style.div1}>
                            <span><FaArrowTrendUp /></span>
                            <div>
                                <p className={style.p}><strong>Total Income</strong></p>
                                <h3>{updateMoney(income).toLocaleString('en-US') || 0} {updatecurrency}</h3>
                            </div>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.div1}>
                            <span><FaArrowTrendDown /></span>
                            <div>
                                <p className={style.p}><strong>Total Expense</strong></p>
                                <h3>{updateMoney(expense).toLocaleString('en-US') || 0} {updatecurrency}</h3>
                            </div>
                        </div>
                    </div>
                    <div className={style.card}>
                        <div className={style.div1}>
                            <span><FaWallet /></span>
                            <div>
                                <p className={style.p}><strong>Total Balance</strong></p>
                                <h3>{updateMoney(income- expense).toLocaleString('en-US') || 0} {updatecurrency}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.second}>
                    <div className={style.pie}>
                        <h3 style={{marginLeft:'10px'}}>Expense by Category</h3>
                        <div className={style.pies}>
                            <ExpensePieChart/>
                        </div>
                    </div>
                    <div className={style.bar}>
                        <h3 style={{marginLeft:'10px'}}>Income VS Expense</h3>
                        <div className={style.chart}>
                            <BarChart/>
                        </div>
                    </div>
                </div>
                <div className={style.third}>
                    <div className={style.recent}>
                        <h3>Recent Transaction</h3>
                        <p onClick={()=>{
                          navigate('/transaction')
                        }}> View all </p>
                    </div>
                    <div className={style.table}>
                        <TransactionTable search={searchs} type={type} category={category} limit={5} text='PLEASE ADD SOME TRANSACTIONS'/>
                    </div>
                </div>
            </div>
            <DeleteModal budgetmodal={budgetmodal} setbudgetmodal={setbudgetmodal} success={success} message={message} text={text} deleteBudget={finalDelete}/>
           </>
       )
}
export default Report