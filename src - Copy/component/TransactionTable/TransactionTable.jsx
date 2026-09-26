import TransactionRow from '../TransactionRow/transactionRow'
import style from './Transactiontable.module.css'
function TransactionTable(){
 
 
    return(
    <>
    <div className={style.container}>
        <table className={style.table}>
            <thead className={style.thead}>
                <tr className={style.tr1}>
                    <th className={style.th}>Description</th>
                    <th className={style.th}>Type</th>
                    <th className={style.th}>Amount</th>
                    <th className={style.th}>Category</th>
                    <th className={style.th}>Date</th>
                    <th className={style.th}>Action</th>
                </tr>
            </thead>
            <tbody>
                <TransactionRow/>
                <TransactionRow/>
                <TransactionRow/>
            </tbody>
        </table>
    </div>
    </>

 )
}
export default TransactionTable