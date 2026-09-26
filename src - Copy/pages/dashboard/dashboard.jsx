import style from './dashboar.module.css'
import Navbar from '../../component/Sidebar/sidebar'
import Modal from '../../component/modal/modal'
import { useState } from 'react'
import Header from '../../component/header/header'
function DashBoard(){
    const [showmodal,setModal] = useState(false)
    return(
        <>
        <Header/>
        <Navbar setmodal = {setModal}/>
        <Modal showmodal= {showmodal} setmodal = {setModal} />
        
        </>
    )
}
export default DashBoard