import React from "react";
import Logo from '../assets/Logo.svg'
export const Registration=()=>{
    return(
        <div className="registration">
            <div className="logo" style={{backgroundImage:`url(${Logo})`}}>
                <div className="logo__text">LoftTaxi</div>
            </div>
            <div className="registration__wrapper">
                <form className="registration__form">
                    <h2 className="Ctitle">Регистрация</h2>
                    <input className="registration__input" type="email" placeholder="Адрес электронной почты *
" />
                    <input className="registration__input" type="text" placeholder="Имя*" />
                    <input className="registration__input" type="text" placeholder="Фамилия*" />
                    <input className="registration__input" type="password" placeholder="Пароль*" />
                    <button className="btn">Зарегистрироваться</button>
                    <div className="registration__footer">
                        <span>Уже зарегистрирован?</span>
                        <button>Войти</button>
                    </div>
                </form>
            </div>
        </div>
    )
}