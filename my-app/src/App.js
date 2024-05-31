import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { Routes,Route } from 'react-router-dom';
import Home from "./pages/Home"
import Services from './pages/Services';
import Hire from './pages/Hire';
import Workers from "./pages/Workers_Profile"
import Project_Tracking from './pages/Project_Tracking';
import BudgetManagement from './pages/BudgetManagement';
import Home_shop from './pages/MaterialProcurement/Home_shop';
import EmployerDashboard from './pages/Dashboard/EmployerDashboard';
import LaborDashboard from './pages/Dashboard/LaborDashboard';
import Contact from './pages/Contact';
import Login from "../src/pages/Auth/Login"
import SignUp from "../src/pages/Auth/SignUp"
import Navbar from './components/Navbar';
import AboutUs from '../src/pages/AboutUs'
import Footer from './components/Footer';
import { getUserDetails } from "./services/operations/profileAPI"
import LabourRegisterForm from './pages/LabourRegisterForm';
import {setToken} from "../src/slices/authSlice"
import {setUser} from "../src/slices/profileSlice"


function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("final token hai")
    if (localStorage.getItem("token")) {
      const token = JSON.parse(localStorage.getItem("token"))
      console.log("final token hai",token)
      // dispatch(getUserDetails(token, navigate))
      dispatch(setToken(localStorage.getItem("token")))
    }
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"))
      console.log("final user hai",user)
      // dispatch(getUserDetails(token, navigate))
      let userfinal=localStorage.getItem("user")
      userfinal=JSON.parse(userfinal)
      dispatch(setUser(userfinal))
    }


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  


  

  return (
    <>
     {/* <Navbar/> */}
     <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/hire" element={<Hire/>}/>
      <Route path="/budget" element={<BudgetManagement/>}/>
      <Route path="/tracker" element={<Project_Tracking/>}/>
      <Route path="/worker/:param1" element={<Workers/>}/>
      <Route path="/home_shop" element={<Home_shop/>}/>
      <Route path="/dashboarde" element={<EmployerDashboard/>}/>
      <Route path="/dashboardl" element={<LaborDashboard/>}/>
      <Route path="/contactus" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/labourregister" element={<LabourRegisterForm/>}/>
      
     </Routes>
     {/* <Footer/> */}
    </>
  );
}

export default App;
