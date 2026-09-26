import style from './sidebar.module.css'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { themes } from '../../context/ThemeContex'
 import {FaChartPie,FaReceipt,FaChartColumn,FaGear,FaUser,FaRightFromBracket} from 'react-icons/fa6'
import { FaSun,FaRegMoon } from 'react-icons/fa'
function Navbar({setmodal}){
const {theme,setTheme} = useContext(themes)
    return(
        <>
         <nav className={style.nav}>
            <div className={style.container}>
                <div className={style.left}>
                 
                    <span className={style.span1}>💰</span>
                    <span className={style.span2}> SpendWise </span>
                </div>
              {/*  <div className={style.mid}>
                  <div className={style.sign}>
                    <button className={style.add} onClick={()=>setmodal(true)}> ➕Add Transaction</button>
                   </div>
                </div> */}
                <div className={style.right}>
                   <div className={style.links}>
                        <div className={style.div1}>
                            <span className={style.span3}>MANAGE</span>
                           <div className={style.bars}>
                             <NavLink to='/' className={({isActive}) => isActive ? style.link : style.lin}>
                            <FaChartPie/>
                            <span> Dashboard</span>
                            </NavLink>
                            <NavLink to='/transaction' className={({isActive}) => isActive ? style.link : style.lin}>
                            <FaReceipt/>
                            <span>Transactions</span>
                            </NavLink>
                            <NavLink to='/report' className={({isActive}) => isActive ? style.link : style.lin}>
                            <FaChartColumn/>
                            <span>Report</span>
                            </NavLink>
                           </div>
                        </div>
                        <div className={style.div2}>
                            <span className={style.span3}>ACCOUNT</span>
                           <div className={style.bars}>
                             <NavLink to='/setting' className={({isActive}) => isActive ? style.link : style.lin}>
                            <FaGear/>
                            <span>Settings</span>
                            </NavLink>
                            <NavLink to='/profile' className={({isActive}) => isActive ? style.link : style.lin}>
                            <FaUser/>
                            <span>Profile</span>
                            </NavLink>
                            <NavLink to='/logout' className={({isActive}) => isActive ? style.link : style.lin}>
                            <FaRightFromBracket/>
                            <span>Logout</span>
                            </NavLink>
                           </div>
                        </div>
                    </div>
                   
                  {/* <div className={style.toggle}>
                   <button onClick={()=> {setTheme(!theme)}} className={style.btn2} type='button'>
                        {theme ? <FaRegMoon className={style.moon}/> : <FaSun className={style.sun}/>}
                    </button> 
                   </div> */}
                </div>
            </div>
        </nav>
        </>
    )
}
export  default Navbar