import React, { Component } from "react"
import {logIn, logOut} from '../actions'
import {connect} from 'react-redux'
import { Header } from "../components/Header"

export class Profile extends Component {
  unauthenticate = (event) => {
    event.preventDefault();
    this.props.logOut();
   
    
  };

  render() {
    return (
        <>
      <Header/>
      <p>
        Профиль
        <button onClick={this.unauthenticate}>Выйти</button>
        
      </p>
        </>
      
    );
  }
}

export const ProfileWithConnect = connect(
  null,
  { logIn, logOut }
)(Profile);

