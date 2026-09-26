import Navbar from "../../component/Sidebar/sidebar"
import { useContext, useState } from "react"
import style from './setting.module.css'
import Header from "../../component/header/header"
import { FaBell, FaFileExport, FaMoon, FaTrash } from "react-icons/fa6"
import { FaMoneyBillWave } from "react-icons/fa"
import { currency } from "../../context/currency"
import { budgetContext } from "../../context/budgetcontext"
import { tran } from "../../context/Transaction"
import { themes } from "../../context/ThemeContex"
function Setting(){
    const {setCurrency,updatecurrency}= useContext(currency)
    const[showsideBar,setshowsideBar] = useState(false)
    const {setTheme,theme} = useContext(themes)
    const [showmodal,setModal] = useState(false)
const [showmessage,setShowmessage]= useState(false)
const {setService} = useContext(tran)
const {setmain}= useContext(budgetContext)
 function clearAll(){
  setmain([])
  setService([])
  setShowmessage(true)
  setTimeout(()=>{
    setShowmessage(false)
    setModal(false)
  },3000)
 }
 const exportData = ()=>{
    const data = {
        transactions: JSON.parse(localStorage.getItem('transactions') || '[]'),
        budgets:JSON.parse(localStorage.getItem('Budjets') || '[]'),
        date: new Date().toISOString()
       } 
    const blob = new Blob([JSON.stringify(data,null,2)],{'type':'application/json'})
    const url =URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download=`spendWise-backup-${new Date().toISOString().split('T')[0]}.json`
    a.click()
    URL.revokeObjectURL(url)
 }
    return(
        <>
              <Header setshowsideBar={setshowsideBar} showsideBar={showsideBar} page='Setting'/>
              <Navbar setmodal = {setModal} showsideBar={showsideBar} setshowsideBar={setshowsideBar}/>
              <div className={style.container}>
               <div className={style.first}>
                     <h3 className={style.h3}>General</h3>
                <div className={style.div1}>
                    <div className={style.div2}>
                        <span className={style.span1}><FaMoon/></span>
                        <div>
                            <h3>Theme</h3>
                            <p>Choose your preferred theme</p>
                        </div>
                    </div>
                    <div className={style.div3}>
                        <select onChange={(e)=>{
                            if(e.target.value === 'light'){
                                setTheme(false)
                            }else{
                                setTheme(true)
                            }
                        }} value={theme? 'dark':'light'}>
                            <option value='light'>Light</option>
                            <option value='dark'>Dark</option>
                            
                        </select>
                    </div>
                </div>
                 <div className={style.div1}>
                    <div className={style.div2}>
                        <span className={style.span2}><FaMoneyBillWave/></span>
                        <div>
                            <h3>Currency</h3>
                            <p>Choose your default currency</p>
                        </div>
                    </div>
                    <div className={style.div3}>
                        <select onChange={(e)=>setCurrency(e.target.value)} value={updatecurrency}>
                            <option value='FCFA'>FCFA</option>
                            <option value='USD'>USD</option>
                            <option value='EUR'>EUR</option>
                        </select>
                    </div>
                </div>
                 <div className={style.div1}>
                    <div className={style.div2}>
                        <span className={style.span3}><FaBell/></span>
                        <div>
                            <h3>Notification</h3>
                            <p>Enable or disable notification</p>
                        </div>
                    </div>
                    <div className={style.div3}>
                       <div className={style.toggle}>
                        <span>,</span>
                       </div>
                    </div>
                </div>
               </div>
                <div className={style.first}>
                     <h3 className={style.h3}>Data</h3>
                <div className={style.div1}>
                    <div className={style.div2}>
                        <span className={style.span4}><FaFileExport/></span>
                        <div>
                            <h3>Export Data</h3>
                            <p>Download all your transactions and budgets</p>
                        </div>
                    </div>
                    <div className={style.div3}>
                        <button className={style.export} onClick={()=>{exportData()}}><FaFileExport/>Export</button>
                    </div>
                </div>
                 <div className={style.div1}>
                    <div className={style.div2}>
                        <span className={style.span5}><FaTrash/></span>
                        <div>
                            <h3>Clear All Data</h3>
                            <p>Remove all your transactions and budgets</p>
                        </div>
                    </div>
                    <div className={style.div3}>
                       <button className={style.delete} onClick={()=> setModal(true)}><FaTrash/>Clear Data</button>
                    </div>
                </div>
                
               </div>
              </div>
              <div className={ showmodal ?  style.modal : style.modals}>
                <div className={ showmessage? style.last : style.lasts}>TRANSACTION AND BUDGETS DELETED SUCCESSFULLY</div>
               <div>
                  <div className={style.message}>
                    <div className={style.text}>
                        ARE YOU SURE YOU WANT TO DELETE ALL TRANSACTIONS AND BUDGETS
                    </div>
                     <div className={style.action}>
                    <button onClick={()=>setModal(false)}>No</button>
                    <button onClick={()=>{
                        clearAll()
                    }}>Yes</button>
                  </div>
                  </div>
                  
               </div>
              </div>
        </>
    )
}
export default Setting