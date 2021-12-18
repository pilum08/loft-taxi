import React from 'react'
export const Header=(props)=>{
  return (
    <header>
      <nav>
      <ul>
        <li>
          <button onClick={()=>{props.navigate('map')}}>
            Карта
          </button>
        </li>
        
        <li>
          <button onClick={()=>{props.navigate('profile')}}>
            Профиль
          </button>
        </li>
        <li>
          <button onClick={()=>{props.navigate('login')}}>
            Выйти
          </button>
        </li>
      </ul>
      </nav>
    </header>
  )

}