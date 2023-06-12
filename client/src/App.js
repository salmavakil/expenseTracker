import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Transactions from './Components/Transactions';
import Login from './Components/Login';
import authContext from './helpers/authContext';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Registration from './Components/Registration';
import Category from './Components/Category';
import Wallet from './Components/Wallet';

function App() {
  const [authState,setAuthState] =useState({username:'',id:'',status:false});

  useEffect(()=>{
    axios.get("http://localhost:8081/users/authenticate", {headers:{accessToken:localStorage.getItem('accessToken')}}).then((response)=>{
      if(response.data.error) setAuthState({username:'',id:'',status:false});
      else setAuthState({username:response.data.username,id:response.data.id,status:true});
    })
  },[])
  return (
    <div>
      <authContext.Provider value={{authState, setAuthState}}>
      {authState.status && <Navbar></Navbar>}
      <div>
    <Router>
      <Routes>
        <Route path='/transactions' Component={Transactions}/>
        <Route path='/wallet' Component={Wallet}/>
        <Route path='/category' Component={Category}/>
        <Route path='/login' Component={Login}/>
        <Route path='/registration' Component={Registration}/>
      </Routes>
    </Router>
    </div>
    </authContext.Provider>
    </div>
  );
}

export default App;
