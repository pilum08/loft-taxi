import React from 'react';
import { connect } from 'react-redux';
import { Link, Navigate} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { signInUser } from '../modules/user';

import Container from '@material-ui/core/container';
import Grid from '@material-ui/core/grid';
import TextField from '@material-ui/core/textfield';
import Button from '@material-ui/core/button';
import { Logo } from 'loft-taxi-mui-theme';

const LoginPage = ({ signInUser, isLoggedIn, error, loading }) => {
  const handleForm = ({ loginInput, passwordInput }) => {
    signInUser({
      email: loginInput,
      password: passwordInput
    });
  };

  

  const { register, handleSubmit } = useForm()

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
                <h2>Войти</h2>
                {isLoggedIn ? (
                  <p>Добро пожаловать!</p>
                ) : (
                  <>
                    <p>
                      Новый пользователь?{' '}
                      <Link to="/registration" className="tx-link">
                        Зарегистрируйтесь
                      </Link>
                    </p>
                    <form
                      onSubmit={handleSubmit(handleForm)}
                      className="tx-form"
                      data-testid="login-form"
                    >
                      <div className="tx-line tx-single">
                        <TextField
                          {...register("loginInput")}
              
                          inputProps={{
                            'data-testid': 'login-input'
                          }}
                        />
                      </div>
                      <div className="tx-line tx-single">
                        <TextField
                        {...register("passwordInput")}
                         
                         
                        />
                      </div>
                      <div className="tx-line ar">
                        <Button type="submit" data-testid="login-submit">
                          <span>Войти</span>
                          {loading ? <span className="tx-loader"></span> : null}
                        </Button>
                      </div>
                      <div className="tx-line">
                        <span className="tx-error">{error}</span>
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
  error: state.user.errorSignIn,
  loading: state.user.loadingSignIn
});

const mapDispatchToProps = {
  signInUser
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);