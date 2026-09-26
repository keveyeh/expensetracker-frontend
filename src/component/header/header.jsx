import { FaBars} from 'react-icons/fa6'
import style from './header.module.css'
import { userInfo } from '../../context/userInfoContext'
import { useContext } from 'react'
function Header({page,showsideBar,setshowsideBar}){
  const{ usersCredentials,setUserCredentials} = useContext(userInfo)
          setUserCredentials
  function getName(){
    if(!usersCredentials.name){
      return null
    }
    const space = usersCredentials.name.indexOf(' ')
   const firstword = usersCredentials.name[0].toUpperCase() + usersCredentials.name.slice(1,space)
   const secondword = usersCredentials.name[space + 1].toUpperCase() + usersCredentials.name.slice(space + 2)
   return `${firstword} ${secondword}`
  }
  return(
    <>
    <div className={showsideBar?style.container : style.containers}>
      <div className={style.subcontainer}>
        <div className={style.left}>
            <span className={showsideBar?style.span5 :style.span3} onClick={()=>setshowsideBar(true)}><FaBars/></span>
            <span className={style.span2}> {page}</span>
        </div>
        <div className={style.right}>
          <h3 className={style.image}> { usersCredentials.name? usersCredentials.name[0].toUpperCase(): 'J'}</h3>
        <span className={style.span1}>
              {getName()}
        </span>
        </div>
      </div>
    </div>
    </>
)
}
export default Header