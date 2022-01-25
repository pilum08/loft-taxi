import React from 'react';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';

import { logOut } from '../modules/user';

import Container from '@material-ui/core/container';
import Button from '@material-ui/core/button';
import { Logo } from 'loft-taxi-mui-theme';

const Header = ({ logOut, isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <header>
        <Container>
          <div className="tx-header-content">
            <div className="tx-logo">
              <Logo />
            </div>
            <div className="tx-menu">
              <Link to="/map">
                <Button>Карта</Button>
              </Link>
              <Link to="/profile">
                <Button>Профиль</Button>
              </Link>
              <Button onClick={<Navigate replace to='/'/>,logOut}>Выход</Button>
            </div>
          </div>
        </Container>
      </header>
    );
  } else return null;
};

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn
});

const mapDispatchToProps = {
  logOut
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

   