import React, {useState} from 'react'
import NavBar from './Components/Navbar'
import News from './Components/News'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import SignUp from './Components/SignUp'
import {ToastContainer} from 'react-toastify';
import MyModal from './Components/MyModal'
const App=()=>{
  
 

    return (
      <Router>
         <ToastContainer/>
          <div>
            <NavBar/>
            <MyModal/>
            <Routes>
                 <Route path="/"  exact element={<News pageSize={6} key='general' country='in' category='general'/>}/>
                 <Route path ="/Sports" exact element={<News pageSize={6} key='sports' country='in' category='sports'/>}/>
                 <Route path ="/Entertainment" exact element={<News pageSize={6} key='Entertainment' country='in' category='Entertainment'/>}/>
                 <Route path ="/Business"exact element={<News pageSize={6}  key='Business' country='in' category='Business'/>}/>
                 <Route path ="/Health"  exact element={<News pageSize={6} key='Health' country='in' category='Health'/>}/>
            </Routes> 
         </div>

      </Router>
    
      
    )
}

export default App
