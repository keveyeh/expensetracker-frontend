import Modal from '../../component/modal/modal'
import Navbar from '../../component/Sidebar/sidebar'
import TransactionTable from '../../component/TransactionTable/TransactionTable'
import { tran } from '../../context/Transaction'
import style from './transaction.module.css'
import { useContext, useState } from 'react'

function Transaction(){
    const  {service,setService} = useContext(tran)
    const [showmodal,setModal] = useState(false)
          return(
              <>
              <Navbar setmodal = {setModal}/>
              <Modal showmodal= {showmodal} setmodal = {setModal} />
              {/*<TransactionTable/> */}
               
              </>
          )
}
export default Transaction