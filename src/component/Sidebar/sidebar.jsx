import style from './sidebar.module.css'
import { NavLink } from 'react-router-dom'

 import {FaChartPie,FaWallet,FaReceipt,FaChartColumn,FaGear,FaUser} from 'react-icons/fa6'
function Navbar({showsideBar,setshowsideBar}){
    
    return(
        <>
         <nav className={showsideBar ? style.nav : style.navs}>
            <div className={style.container}>
                <div className={style.left}>
                 
                    <div className={style.leftside}>
                        <span className={style.span1}>💰</span>
                        <span className={style.span2}> SpendWise </span>
                    </div>
                    <div className={style.rightside} onClick={()=>setshowsideBar(false)}>
                        X
                    </div>
                </div>
              
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
                            <NavLink to='/budget' className={({isActive}) => isActive ? style.link : style.lin}>
                            <FaWallet/>
                            <span>Budget</span>
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