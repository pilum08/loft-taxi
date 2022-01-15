import React, { Component } from "react"
import {logIn, logOut} from '../store/actions'
import {connect} from 'react-redux'
import { Header } from "../components/Header"
import { ProfileFormWithAuth } from "../components/profileForm"

export class Profile extends Component {
  unauthenticate = (event) => {
    event.preventDefault();
    this.props.logOut();
   
    
  };

  render() {
    return (
        <>
      <Header/>
      <ProfileFormWithAuth/>
        </>
      
    );
  }
}

export const ProfileWithConnect = connect(
  null,
  { logIn, logOut }
)(Profile);

