
import React from 'react'
import './App.scss';
import { Map } from "./pages/Map"
import  {Registration} from './pages/Registration'
import {LoginWithAuth} from './pages/Login'
import {ProfileWithConnect} from './pages/Profile'
import {Route, Routes } from "react-router-dom"
import { connect } from "react-redux"
import PropTypes from 'prop-types'


class App extends React.Component {
  render() {
    return (
    
    <main >
      <Routes>
        <Route path='/' element={<LoginWithAuth/>}/>
        <Route path='profile' element={<ProfileWithConnect/>}/>
        <Route path='map' element={<Map/>}/>
        <Route path='registration' element={<Registration/>}/> 
      </Routes>
        </main>
    )
  }
}

App.propTypes={
  isLoggedIn: PropTypes.bool
}

export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))(App);