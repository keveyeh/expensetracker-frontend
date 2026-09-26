import style from './navbar.module.css'
import { useState } from "react"

function NavBar(props){
    const [search ,SetSearch] = useState('')
return(
    <nav className= {style.navbar}>
        <div className={style.nav}>
            <div className={style.leftside}>
                <div className={style.logo}>
                    <img src={props.image} alt="profilePic" className={style.image}/>
                </div>
                <h3 className={style.h3}>Food App</h3>
            </div>
            <div className={style.middle}>
                <input type="text" onChange={(e)=>{SetSearch(e.target.value)}} className={style.input}/>
                <button className={style.btn}>🔍</button>
            </div>
            <div className={style.rightside}>
                <p>{search}</p>
            </div>
        </div>
    </nav>
)
}
export default NavBar