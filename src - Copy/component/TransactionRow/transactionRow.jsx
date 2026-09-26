import style from './transactionRow.module.css'
function TransactionRow(){
return(
    <>
    <tr className={style.tr}>
        <td className={style.td}>name</td>
        <td className={style.td}>home</td>
        <td className={style.td}>dhjh</td>
        <td className={style.td}>djdjh</td>
        <td className={style.td}>djdjjd</td>
        <td className={style.td2}>
            <a className={style.btn1} to='#'>✏️ Edit</a>
            <a className={style.btn2} to='#'>🗑️ Delete</a>
        </td>
    </tr>
    </>
)
}
export  default TransactionRow