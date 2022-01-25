import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { signUpUser } from '../modules/user';

import Container from '@material-ui/core/container';
import Grid from '@material-ui/core/grid';
import TextField from '@material-ui/core/textfield';
import Button from '@material-ui/core/button';
import { Logo } from 'loft-taxi-mui-theme';

const RegisterPage = ({ signUpUser, isLoggedIn, loading }) => {
  const handleForm = ({
    loginInput,
    passwordInput,
    nameInput,
    surnameInput
  }) => {
    signUpUser({
      email: loginInput,
      password: passwordInput,
      name: nameInput,
      surname: surnameInput
    });
  };



  const { register, handleSubmit } = useForm();

  return (
    <section className="tx-page tx-page-login">
      <div className="tx-page-content">
        <Container maxWidth="md">
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <div className="tx-logo-wr">
                <Logo />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="tx-box">
                <h2>Регистрация</h2>
                {isLoggedIn ? (
                  <p>Добро пожаловать!</p>
                ) : (
                  <>
                    <p>
                      Уже зарегистрирован?{' '}
                      <Link to="/" className="tx-link">
                        Войти
                      </Link>
                    </p>
                    <form
                      onSubmit={handleSubmit(handleForm)}
                      className="tx-form"
                      data-testid="register-form"
                    >
                      <div className="tx-line tx-single">
                        <TextField
                         {...register("loginInput")}
                         
                          inputProps={{
                            'data-testid': 'register-input'
                          }}
                        />
                      </div>
                      <div className="tx-line">
                        <TextField
                           {...register("nameInput")}
                        />
                        <TextField
                           {...register("nameInput")}
                        />
                      </div>
                      <div className="tx-line tx-single">
                        <TextField
                    {...register("passwordInput")}
                        />
                      </div>
                      <div className="tx-line ar">
                        <Button type="submit" data-testid="register-submit">
                          <span>Зарегистрироваться</span>
                          {loading ? <span className="tx-loader"></span> : null}
                        </Button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn,
  loading: state.user.loadingSignUp
});

const mapDispatchToProps = {
  signUpUser
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
