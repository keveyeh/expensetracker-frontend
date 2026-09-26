import TransactionRow from '../TransactionRow/transactionRow'
import style from './Transactiontable.module.css'
import { tran } from '../../context/Transaction'
import { useContext} from 'react'
import EmptyImage from '../emptyImage/empty'
function TransactionTable({search,type,category,limit,text}){
 
 const {service} = useContext(tran)
 
 let usertype;
if(limit === 5){
    usertype = service.slice(-limit).reverse()
}else{
    if(type ==='All'){
    usertype = [...service]
   
 }else{
      usertype = service.filter((element)=>{
        return element.Type === type.toUpperCase()
    })
    if(category !== 'all'){
     usertype= usertype.filter((element)=>{
        return element.Category.toUpperCase() === category.toUpperCase()
     })
    }
 }
 
}
  if(search){
        usertype = usertype.filter((element)=>{
            return element.Description.includes(search)
        })
    }

   
   
 
    return(
    <>
     <div className={style.last}>
      {
          usertype.length === 0 ? <div className={style.b1}>
                 <EmptyImage text={text}/>
            </div>:
        <div className={style.tablecontainer}>
      <table className={style.transactiontable}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {
          usertype.map((element) => (
            <TransactionRow 
              key={element.Id}
              type={element.Type}
              date={element.Date}
              description={element.Description}
              category={element.Category}
              id={element.Id}
              amount={element.Amount}
            />
          ))}
        </tbody>
      </table>

    </div>
   }
     </div>
    </>

 )
}
export default TransactionTable