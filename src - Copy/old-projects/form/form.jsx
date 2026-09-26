import { useState } from 'react'
import style from './form.module.css'
function Form(){
     const [name,userName] = useState('')
     const [email,userEmail] = useState('')
     const [password,userPassword] = useState('')
     const [confirmPassword,checkPassword] = useState('')
     const [country,userCountry] = useState('')
     const [gender,userGender] = useState('')
     const [hobbies,userHobbies]= useState([]) 
     function genders(e){
       if(e.target.checked){
      userGender(e.target.value)
        }
     }
     function hobby(e){
         if(e.target.checked){
             userHobbies([...hobbies,e.target.value])
        }else{
            const update = hobbies.filter((element)=>{
                return element !== e.target.value
            })
            userHobbies(update)
        }
     }
     function handleSubmit(e){
        e.preventDefault()
        if(password !== confirmPassword){
           alert('password must be the same')

        }else{
            console.log(name,email,password,country,gender,hobbies)
        }
     }
 return(
    <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.container}>
            <label className={style.label}>Full Name:</label>
            <input type='text' className={style.input} onChange={(e)=>{
                userName(e.target.value)
            }} required/>
        </div>
         <div className={style.container}>
            <label className={style.label}>Email:</label>
            <input type='email' className={style.input} onChange={(e)=>{userEmail(e.target.value)}} required/>
        </div>
         <div className={style.container}>
            <label className={style.label}>Password:</label>
            <input type='password' className={style.input} onChange={(e)=>{userPassword(e.target.value)}} minLength={8} required/>
        </div>
         <div className={style.container}>
            <label className={style.label}>Confirm Password:</label>
            <input type='password' className={style.input} onChange={(e)=>{checkPassword(e.target.value)}} minLength={8} required/>
        </div>
         <div className={style.container}>
            <label className={style.label}>Country:</label>
            <select className={style.select} onChange={(e)=>{userCountry(e.target.value)}}>
                <option value= 'CAMEROON'>CAMEROON</option>
                <option value= 'NIGERIA'>NIGERIA</option>
                <option value= 'USA'>USA</option>
                <option value= 'BENIN'>BENIN</option>
            </select>
        </div>
        <div className={style.container}>
            <label className={style.genders}>Gender:</label>
            <div className={style.gender}>
                <div className={style.genderDiv}>
                    <label>Male</label>
                    <input type='radio' value='Male' name='gender'onChange={genders}/>
                </div>
                 <div className={style.genderDiv}>
                    <label>Female</label>
                    <input type='radio' value='Female'name='gender' onChange={genders}/>
                </div>
            </div>
        </div>
        <div className={style.hobbies}>
            <label className={style.label}>Hobbies:</label>
            <div className={style.hob}>
                <div>
                    <label>FootBall</label>
                    <input type='checkbox' value='football' onChange={hobby}/>
                </div>
                 <div>
                    <label>VolleyBall</label>
                    <input type='checkbox' value='volleyball'onChange={hobby}/>
                </div>
                 <div>
                    <label>Tennis</label>
                    <input type='checkbox' value='tennis' onChange={hobby}/>
                </div>
                 <div>
                    <label>BasketBall</label>
                    <input type='checkbox' value='basketball' onChange={hobby}/>
                </div>
            </div>
        </div>
        <div className={style.submit}>
            <button className={style.btn}>Submit</button>
        </div>
    </form>
 )



}
export default Form