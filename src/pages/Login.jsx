import React, {Component} from 'react'
import Logo from '../assets/Logo.svg'
import {PropTypes} from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { authenticate } from '../store/actions'


export class Login extends Component {
   
  authenticate= (event)=> {
    event.preventDefault()
    const {userName, password} = event.target
    this.props.authenticate(userName.value, password.value)
  }
    
      render() {
        return (
            <>
            <div className="sign-up">
                 <div className="logo" style={{backgroundImage:`url(${Logo})`}}>
                    <div className="logo__text">LoftTaxi</div>
                </div>
                <h1 className='sign-up__title'>Войти</h1>
               {this.props.isLoggedIn ? (
                   <Link to= 'map'>Войти</Link>
                  
               ) : (
                <form onSubmit={this.authenticate} className='sign-up__form'>
                    <label htmlFor="email">Имя пользователя*</label>
                    <input className='sign-up__input' id='userName' type='text' name="userName" />
                    <label htmlFor="password">Пароль*</label>
                    <input className='sign-up__input' id="password" type="password" name="password" />
                    <button type='submit' className='sign-up__button' >Войти</button>
                  </form>
               )}
            <div className="sing-up__footer">
                <span className='sing-up__footer-text'>Новый пользователь?</span>
                <Link to='registration'>Зарегистрируйтесь</Link>
            </div>
            </div>
            </>
            
            
        )
      }
    
    
}
Login.propTypes={
    isLoggedIn:PropTypes.bool,
    logIn: PropTypes.func,
    navigate:PropTypes.func

}
export const LoginWithAuth=connect(
  (state) => ({isLoggedIn:state.auth.isLoggedIn}),
  { authenticate }
) (Login)
