import React from 'react'
export const Login=()=>{
    return (
        <div className="sign-up">
            <h1 className='sign-up__title'>Регистрация</h1>
        <form className='sign-up__form'>
        <label htmlFor="email">Email*:</label>
        <input className='sign-up__input' id="email" type="email" name="email" />
        <label htmlFor="text">Как вас зовут?*</label>
        <input className='sign-up__input' id='userName' type='text' name="userName" />
        <label htmlFor="password">Придумайте пароль*</label>
        <input className='sign-up__input' id="password" type="password" name="password" />
      </form>
        <button className='sign-up__button'>Зарегистрироваться</button>
        <div className="sign-up__sing-in">
            <p className='sign-up__title' >Уже зарегестрированы?</p>
            <a className='sign-up__link' href="#">Войти</a>
        </div>
        </div>
        
    )
}