 import { Route,Routes} from 'react-router-dom'
 import Report from "./pages/report/report"
 import Transaction from "./pages/transaction/transaction"
 import DashBoard from "./pages/dashboard/dashboard"
import Modal from "./component/modal/modal"
import Setting from "./pages/settings/setting"
import Profile from "./pages/profile/profile"
import Budget from "./pages/budget/budget"

 function App() {
 
  return(
  <>
  <Routes>
    <Route path="/" element={<DashBoard/>}/>
    <Route path="/transaction" element={<Transaction/>}/>
    <Route path="/report" element={<Report/>}/>
    <Route path="/budget" element={<Budget/>}/>
    <Route path="/setting" element={<Setting/>}/>
    <Route path="/profile" element={<Profile/>}/>
  </Routes>
  <Modal/>
  </>
  )


}

export default App
