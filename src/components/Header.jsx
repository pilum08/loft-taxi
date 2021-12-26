import React, {Component} from 'react'


export class Header extends Component {
  goToMap = (event) => {
    event.preventDefault();
    this.props.navigate("map");
  }
  goToLogin = (event) => {
    event.preventDefault();
    this.props.navigate("login");
  }
  goToProfile = (event) => {
    event.preventDefault();
    this.props.navigate("profile");
  }
  render() {
    return (
      <header>
        <nav>
        <ul>
          <li>
            <button onClick={this.goToMap}>
              Карта
            </button>
          </li>
          
          <li>
            <button onClick={this.goToProfile}>
              Профиль
            </button>
          </li>
          <li>
            <button onClick={this.goToLogin}>
              Выйти
            </button>
          </li>
        </ul>
        </nav>
      </header>
    )
  }
  

}
