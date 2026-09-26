import Modal from '../../component/modal/modal'
import Navbar from '../../component/Sidebar/sidebar'
import style from './report.module.css'
import { useState } from 'react'


function Report(){
    const [showmodal,setModal] = useState(false)
       return(
           <>
           <Navbar setmodal = {setModal}/>
           <Modal showmodal= {showmodal} setmodal = {setModal} />
           
           </>
       )
}
export default Report