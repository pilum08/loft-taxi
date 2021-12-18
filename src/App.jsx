
import React from 'react'
import './App.scss';
import { Profile } from "./pages/Profile";
import { Map } from "./pages/Map";
import { Login } from "./pages/Login";
import {Header}  from "./components/Header"

class App extends React.Component {
  state={currentPage:'map'}
  navigateTo=(page)=>{
    this.setState({currentPage:page})
  }
  render() {
    return (
    
    <main >
    <Header navigate={this.navigateTo}/>
          <section>
            {this.state.currentPage==='map'&&<Map/>}
            {this.state.currentPage==='login'&&<Login/>}
            {this.state.currentPage==='profile'&&<Profile/>}
          </section>
        </main>
    )
  }
}

export default App;