import Navbar from "../../component/Sidebar/sidebar"
import Modal from "../../component/modal/modal"
import { useState } from "react"
function Profile(){
const [showmodal,setModal] = useState(false)
    return(
        <>
        <Navbar setmodal = {setModal}/>
        <Modal showmodal= {showmodal} setmodal = {setModal} />
        
        </>
    )
}
export default Profile