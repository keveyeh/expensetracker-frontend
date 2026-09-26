import Navbar from "../../component/Sidebar/sidebar"
import Header from "../../component/header/header"
import { useContext, useState } from "react"
import styles from './budget.module.css'
import Budgetmodal from "../../component/budgetmodal/budgetmodal"
import { budgetContext } from "../../context/budgetcontext"
import calculateTotal from "../../customhook/usereduce.jsx"
import { tran } from "../../context/Transaction"
import totalSpent from "../../customhook/totalspent.jsx"
import DeleteModal from "../../component/deletemodal/deletemodal.jsx"
import { FaBagShopping, FaWallet } from "react-icons/fa6"
import { FaUtensils,FaCar,FaFileInvoiceDollar,FaFilm,FaGraduationCap,FaBoxOpen} from 'react-icons/fa6'
import { FaEllipsisV, FaHeartbeat, FaMoneyBillAlt, FaMoneyBillWave } from "react-icons/fa"
import { currency } from "../../context/currency.jsx"
function Budget(){
    const[showsideBar,setshowsideBar] = useState(false)
     const{deleteBudget} = useContext(budgetContext)
    const {message,text,setmessage,mainArray,setmode,editBudget,showmodal,setmodal,setInformation,showBudgetmodal,budgetmodal,setbudgetmodal,success}=useContext(budgetContext)
    const {service} = useContext(tran)
    const [showAction,setAction]= useState(null)
    const deletemessage = 'ARE YOU SURE YOU WANT TO DELETE THIS BUDGET?'
     const {updatecurrency}= useContext(currency)
    const iconArray = [
        {
          name: 'food',
          icon: <FaUtensils/>,
          color:'#F59E0B',
          background:'#FFF4E5'
        },
         {
          name: 'transport',
          icon: <FaCar/>,
          color:'#3B82F6',
          background:'#E8F1FF'
        },
         {
          name: 'bills',
          icon: <FaFileInvoiceDollar/>,
          color:'#8B5CF6',
          background:'#F3E8FF'
        },
         {
          name: 'shopping',
          icon: <FaBagShopping/>,
          color:'#EC4899',
          background:'#FCE7F3'
        },
         {
          name: 'entertainment',
          icon: <FaFilm/>,
          color:'#7C3AED',
          background:'#EDE9FE'
        },
         {
          name: 'education',
          icon: <FaGraduationCap/>,
          color:'#0284C7',
          background:'#E0F2FE'
        },
         {
          name: 'health',
          icon: <FaHeartbeat/>,
          color:'#EF4444',
          background:'#FEE2E2'
        },
         {
          name: 'others',
          icon: <FaBoxOpen/>,
          color:'#6B7280',
          background:'#F3F4F6'
        }
    ]

    function iconName(name){
        let icons;
       for(let i=0; i< iconArray.length;i++){
        if(name === iconArray[i]['name']){
         icons = iconArray[i]['icon']
        }
       }

        return icons
    }
     function iconcolor(name){
        let color;
       for(let i=0; i< iconArray.length;i++){
        if(name === iconArray[i]['name']){
         color = iconArray[i]['color']
        
        }
       }

        return color
    }
     function iconBackground(name){
        let background;
       for(let i=0; i< iconArray.length;i++){
        if(name === iconArray[i]['name']){
         background = iconArray[i]['background']
        }
       }

        return background
    }
    function percentage(percent){
        let color;
        if(percent<60){
            color = '#22c55e'
        }else if(percent >= 60 && percent <80){
            color= '#eab308'
        }else if(percent >= 80 && percent < 99){
            color= '#f97316'
        }else{
            color = '#ef4444'
        }
        return color
    }
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
    const totalBudget = mainArray.reduce((acc,currentValue)=>{
        return acc + Number(currentValue.Amount)
    },0) || 0
    const totalspent = totalSpent(service,mainArray) || 0
    return(
     <>
    
     <div className={styles.add}>
            <button className={styles.bug} onClick={()=>{setmodal(true)
                setmessage('BUDGET ADDED SUCCESSFULLY')
            setmode('Add Budget')
         setInformation({
             Id:crypto.randomUUID(),
             Category:'food',
             Amount:''
           })}
            }>➕ Add Budget</button>
        </div>
     <div className={styles.container}>
       <div className={styles.cardcontainer}>
         <div className={styles.card}>
            <div className={styles.cardinner} >
                <span className={styles.span5}><FaWallet/></span>
                <div>
                <p className={styles.span}>Total Budget</p>
                <h3>{updateMoney(totalBudget).toLocaleString('en-US') || 0} {updatecurrency}</h3>
                </div>
                
            </div>
         </div>
         <div className={styles.card}>
            <div className={styles.cardinner}>
                <span className={styles.span5}><FaMoneyBillWave/></span>
                <div>
                    
                    <p className={styles.span}>Total Spent </p>
                <h3>{updateMoney(totalspent).toLocaleString('en-US') || 0} {updatecurrency}</h3>
                </div>
                
            </div>
         </div>
         <div className={styles.card}>
            <div className={styles.cardinner}>
                <span className={styles.span5}><FaMoneyBillAlt/></span>
                <div>
                    <p className={styles.span}>Remaining</p>
                    <h3>{updateMoney(totalBudget - totalspent).toLocaleString('en-US') || 0} {updatecurrency}</h3>
                </div>
            </div>
         </div>
       </div>
       <div className={styles.budgetcontainer}>
       
        <div className={styles.first}>
           {
            mainArray.length === 0 ?
             
            
                <div className={styles.b1}>
                    <div>
                        PLEASE SET SOME BUDGETS
                    </div>
                </div>

             :
             <>
             <h3 className={styles.budg}>Your Budgets</h3>
        {
            mainArray.map((element)=>(
                
                <div className={styles.subcontainer} key={element.Id}>
                <div className={styles.div1}>
                    <span style={{color:`${iconcolor(element.Category)}`,background:`${iconBackground(element.Category)}`}}>{iconName(element.Category)}</span>
                    <div className={styles.div5}>
                        <h3 className={styles.h4}>{element.Category[0].toUpperCase() + element.Category.slice(1)}</h3>
                        <p className={styles.h3}>Budget: {updateMoney(element.Amount).toLocaleString('en-US')} {updatecurrency}</p>
                    </div>
                </div>
                <div className={styles.div2}>
                    <p className={styles.h3}><strong>{updateMoney(calculateTotal(element.Category,service)).toLocaleString('en-US')}</strong>/{updateMoney(element.Amount).toLocaleString('en-US')} {updatecurrency}</p>
                    <div className={styles.progress}>
                        <div className={styles.progressbar} style={{width:`${Math.round(((calculateTotal(element.Category,service) / element.Amount )* 100)) <= 100 ?
                            Math.round(((calculateTotal(element.Category,service) / element.Amount )* 100)) : 100
                         }%`,backgroundColor:`${percentage(Math.round(((calculateTotal(element.Category,service) / element.Amount )* 100)))}`}}>

                        </div>
                    </div>
                    <p className={styles.h3}>{Math.round(((calculateTotal(element.Category,service) / element.Amount )* 100))}% used</p>
                </div>
                <div className={styles.div3}>
                    <p className={styles.h3}><strong>{element.Amount - calculateTotal(element.Category,service) < 0 ? 0 : updateMoney(element.Amount - calculateTotal(element.Category,service)).toLocaleString('en-US') } {updatecurrency}</strong></p>
                    <p className={styles.h3}>remaining</p>
                </div>
                <div className={styles.div4}>
                    <span className={styles.span2} onClick={()=> {
                        showAction === element.Id ? setAction(null) : setAction(element.Id)
                        }}>
                        <FaEllipsisV/>
                    </span>
                </div>
                <div className={ showAction === element.Id ? styles.action : styles.actions}>
                    <button className={styles.editbtn} onClick={()=>{editBudget(element.Id)}}>Edit Budget</button>
                     <button className={styles.deletebtn} onClick={()=>{showBudgetmodal(deletemessage,element.Id)
                       
                     }}>Delete Budget</button>
            
                </div>
            </div>
            ))

            
        }
        </>
           }
           
        </div>
        </div>
     </div>
      <Budgetmodal showmodal={showmodal} setmodal={setmodal} message={message} setmessage={setmessage} />
     <Navbar  showsideBar={showsideBar} setshowsideBar={setshowsideBar}/> 
     <Header  showsideBar={showsideBar} setshowsideBar={setshowsideBar} page='Budget'/>
     <DeleteModal budgetmodal={budgetmodal} setbudgetmodal={setbudgetmodal} message={message} success={success} text={text} deleteBudget={deleteBudget}/>
     </>
    )
    

}
export default Budget