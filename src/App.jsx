
import React from 'react'
import './App.scss';
import { Map } from "./pages/Map";
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
  render() {
    return (
    
    <main >
    <Header navigate={this.navigateTo}/>
          <section>
            {this.state.currentPage==='map'&&<Map/>}
            {this.state.currentPage==='login'&&<LoginWithAuth navigate={this.navigateTo}/>}
            {this.state.currentPage==='profile'&&<ProfileWithAuth/>}
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