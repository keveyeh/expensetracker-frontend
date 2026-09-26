import Navbar from "../../component/Sidebar/sidebar"
import Header from "../../component/header/header"
import { useContext, useState } from "react"
import style from './profile.module.css'
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa6"
import { FaLock, FaMapMarkedAlt, FaSave } from "react-icons/fa"
import { userInfo } from "../../context/userInfoContext"
function Profile(){
    const{ usersCredentials,setUserCredentials,updatedCredentials,setUpdate} = useContext(userInfo)
const [showmodal,setModal] = useState(false)
const[showsideBar,setshowsideBar] = useState(false)
const [showmessage,setShowmessage]= useState(false)
const [showmessages,setShowmessages]= useState(false)
const [currentPassword,setcurrent]= useState({
    old:'',
    new:'',
    confirm:''
})
function handleChange(e){
    e.preventDefault()
    setUserCredentials(updatedCredentials)
    setShowmessage(true)
    setTimeout(()=>{
      setShowmessage(false)
    },3000)
}
const [message,setmessage]= useState('')
function updatepassword(e){
    e.preventDefault()
    if(usersCredentials.password !== currentPassword.old){
      setmessage('WRONG PASSWORD PLEASE RETRY')
      setShowmessages(true)
    setTimeout(()=>{
      setShowmessages(false)
    },3000)
    }else{
      if(currentPassword.new !== currentPassword.confirm){
        setmessage(' BOTH NEW AND CONFIRM PASSWORD MUST MATCH')
        setShowmessages(true)
    setTimeout(()=>{
      setShowmessages(false)
    },3000)
      }else{
        setUserCredentials({...usersCredentials,password: `${currentPassword.confirm}`})
        setmessage('PASSWORD UPDATED SUCCESSFULLY')
        setShowmessages(true)
    setTimeout(()=>{
      setShowmessages(false)
    },3000)
    setcurrent({
        old:'',
        new:'',
        confirm:''
    })
      }
    }

}
function getName(){
    if(!usersCredentials.location){
        return null
    }
    const space = usersCredentials.location.indexOf(' ')
   const firstword = usersCredentials.location[0].toUpperCase() + usersCredentials.location.slice(1,space)
   const secondword = usersCredentials.location[space + 1].toUpperCase() + usersCredentials.location.slice(space + 2)
   return `${firstword} ${secondword}`
  }
    return(
           <>
           <Header setshowsideBar={setshowsideBar} showsideBar={showsideBar} page='Profile'/>
              <Navbar setmodal = {setModal} showsideBar={showsideBar} setshowsideBar={setshowsideBar}/>
           <div className={style.container}>
            
             <div className={style.main}>
                <div className={style.first}>
                <div className={style.div1}>
                    <div className={style.avatar}>
                        <img src="/e4f3c61a1f8701e3cfc631a59c82384c.jpg"/>
                    </div>
                    <div className={style.info}>
                        <h3>{ usersCredentials.name ? usersCredentials.name.toUpperCase() : 'No Name'}</h3>
                        <p>{usersCredentials.email ? usersCredentials.email : 'No Email'}</p>
                    </div>
                </div>
                <div className={style.subcontainer}>
                    <div className={style.div2}>
                    <div>
                        <span><FaEnvelope/></span>
                        <strong>Email</strong>
                    </div>
                    <p>{usersCredentials.email ? usersCredentials.email : 'No Email'}</p>
                </div>
                <div className={style.div3}>
                    <div>
                        <span><FaPhone/></span>
                        <strong>Phone</strong>
                    </div>
                    <p>+237 {usersCredentials.phone? usersCredentials.phone:'No Phone Num'}</p>
                </div>
                <div className={style.div4}>
                    <div>
                        <span><FaMapMarkedAlt/></span>
                        <strong>Location</strong>
                    </div>
                    <p>{ getName()? getName():'No Location'}</p>
                </div>
                </div>
             </div>
             <div className={style.second}>
                <form className={style.form} onSubmit={(e)=>{handleChange(e)}}>
                   <div className={style.head}>
                    <h3 className={showmessage? style.h5 : style.h6}>PROFILE UPDATED SUCCESSFULLY</h3>
                     <h3 className={style.h3}>Personal Information</h3>
                   </div>
                    <div className={style.div5}>
                        <label>Full Name</label>
                        <div>
                            <span><FaUser/></span>
                            <input type="text" placeholder="Keveyeh Jeffrey" required value={updatedCredentials.name} onChange={(e)=>{setUpdate({...updatedCredentials,name:`${e.target.value}`})}}/>
                        </div>
                    </div>
                    <div className={style.div5}>
                        <label>Email Address</label>
                        <div>
                            <span><FaEnvelope/></span>
                            <input type="email" placeholder="jeffey@gmail.com" required value={updatedCredentials.email} onChange={(e)=>{setUpdate({...updatedCredentials,email:`${e.target.value}`})}}/>
                        </div>
                    </div>
                    <div className={style.div5}>
                        <label>Phone Number</label>
                        <div>
                            <span><FaPhone/></span>
                            <input type="tel" placeholder="+237 612 34 56 78" required value={updatedCredentials.phone} onChange={(e)=>{setUpdate({...updatedCredentials,phone:`${e.target.value}`})}}/>
                        </div>
                    </div>
                    <div className={style.div5}>
                        <label>Location</label>
                        <div>
                            <span><FaMapMarkedAlt/></span>
                            <input type="text" placeholder="Douala, Cameroon" required value={updatedCredentials.location} onChange={(e)=>{setUpdate({...updatedCredentials,location:`${e.target.value}`})}}/>
                        </div>
                    </div>
                    <div className={style.btn}>
                        <button type="submit"> <FaSave/>Save Changes</button>
                    </div>
            </form>
             </div>
             </div>
             <div className={style.third}>
                    <div className={style.div7}>
                        <span><FaLock/></span>
                        <div>
                            <h3>Change Password</h3>
                            <p>Update your password to keep your account secure</p>
                        </div>
                    </div>
                    <div className={style.password}>
                        <button onClick={()=>{
                            setModal(true)
                        }}>Change Password</button>
                    </div>
             </div>
           </div>
           <div className={ showmodal ? style.contain:style.contains}>
            <div className={ showmessages ? style.message : style.messages}>
                {message}
            </div>
             <div className={style.forms}>
                <form onSubmit={(e)=>{updatepassword(e)} }>
                <div className={style.how}>
                    <h3>Change Password</h3>
                    <span className={style.span} onClick={()=>{
                        setModal(false)
                    }}>X</span>
                </div>
                <div className={style.div}>
                    <label>
                        Current Password
                    </label>
                    <input type="password" placeholder="Enter current password" required onChange={(e)=>{
                        setcurrent({...currentPassword,old:`${e.target.value}`})
                    }} value={currentPassword.old}/>
                </div>
                 <div className={style.div}>
                    <label>
                        New Password
                    </label>
                    <input type="password" placeholder="Enter new password" required onChange={(e)=>{
                        setcurrent({...currentPassword,new:`${e.target.value}`})}} value={currentPassword.new}/>
                </div>
                 <div className={style.div}>
                    <label>
                        Confirm New Password
                    </label>
                    <input type="password" placeholder="Confirm new password" required onChange={(e)=>{
                        setcurrent({...currentPassword,confirm:`${e.target.value}`})}} value={currentPassword.confirm}/>
                </div>
                <div className={style.div}>
                    <button type="submit" >Update Password</button>
                </div>
               </form>
             </div>
           </div>
           </>
       
        
    )
}
export default Profile