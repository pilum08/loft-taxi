
import React from 'react'
import './App.scss';
import { Profile } from "./pages/Profile";
import { Map } from "./pages/Map";
import { Login } from "./pages/Login";
import {Header}  from "./components/Header"
import  {Registration} from './pages/Registration'
import {LoginWithAuth} from './pages/Login'
import {withAuth} from './Context'
import {ProfileWithAuth} from './pages/Profile'
import PropTypes from 'prop-types';

class App extends React.Component {
  state={currentPage:'login'}
  navigateTo=(page)=>{
    this.setState({currentPage:page})
  }
  loginProps=(props)=><LoginWithAuth {...props}/>
  mapProps=(props)=><Map {...props}/>
  profileProps=(props)=> <ProfileWithAuth {...props}/>
  render() {
    return (
    
    <main >
    <Header navigate={this.navigateTo}/>
          <section>
            {this.state.currentPage==='map'&&<Map loginProps={this.loginProps}/>}
            {this.state.currentPage==='login'&&<Login navigate={this.navigateTo} mapProps={this.mapProps}/>}
            {this.state.currentPage==='profile'&&<Profile profileProps={this.profileProps}/>}
            {this.state.currentPage==='registration'&&<Registration navigate={this.navigateTo}/>}
          </section>
        </main>
    )
  }
}

App.propTypes={
  isLoggedIn: PropTypes.bool
}

export default withAuth(App);