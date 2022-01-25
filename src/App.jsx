
import React from 'react'
import './styles/app.css'
import  Map  from "./pages/Map"
import  Registration from './pages/Registration'
import Login from './pages/Login'
import ProfilePage from './pages/Profile'
import {Route, Routes } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from 'prop-types'
import  Header  from "./components/Header"


const App =()=> {
  
    return (
    
    <main className="tx-app" >
      <Header/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='registration' element={<Registration/>}/> 
        <Route path='profile' element={<ProfilePage/>}/>
        <Route path='map' element={<Map/>}/>
        
      </Routes>
        </main>
    )
  }
  const mapStateToProps = state => ({
    isLoggedIn: state.user.isLoggedIn
  });



export default connect(mapStateToProps)(App);

App.propTypes={
  isLoggedIn: PropTypes.bool
}