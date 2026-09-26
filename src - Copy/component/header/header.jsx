import { FaBars,FaCalendar } from 'react-icons/fa6'
import style from './header.module.css'
function Header({page}){
return(
    <>
    <div className={style.container}>
      <div className={style.subcontainer}>
        <div className={style.left}>
          <div>
            <span className={style.span2}><FaBars/></span>
            <span className={style.span2}> Dashboard</span>
          </div>
        </div>
        <div className={style.right}>
          
        </div>
      </div>
    </div>
    </>
)
}
export default Header