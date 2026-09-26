import { useContext } from 'react'
import style from './transactionRow.module.css'
import { tran } from '../../context/Transaction'
import { currency } from '../../context/currency'
function TransactionRow({date,description,category,type,amount,id}){
  const {updatecurrency}= useContext(currency)
  const {edit,deleteTransaction}= useContext(tran)
    function updateMoney(amount){
      if(!amount){
        return 0;
      }
      let finalAmount;
      if(updatecurrency=== 'FCFA'){
        finalAmount = amount
      }else if(updatecurrency=== 'USD'){
        finalAmount = (Number(amount) / 565).toFixed(2)
      }else{
        finalAmount = (Number(amount) / 655.957).toFixed(2)
      }
      return Number(finalAmount) || 0
    }
  return(
    <>

     <tr className={style.transactionrow}>
      <td>{date}</td>
      <td>{description.toUpperCase()}</td>
      <td>{category.toUpperCase()}</td>
      <td className={style.transactiontype}>{type.toUpperCase()}</td>
      <td className={style.transactionamount}>{updateMoney(amount).toLocaleString('en-US') || 0} {updatecurrency}</td>
      <td className={style.transactionactions}>
        <button className={style.editbtn} onClick={()=>edit(id)} >Edit</button>
        <button className={style.deletebtn} onClick={()=>deleteTransaction(id)}> Delete.</button>
      </td>
    </tr>
    </>
)
}
export  default TransactionRow