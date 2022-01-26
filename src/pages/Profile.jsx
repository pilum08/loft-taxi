import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Navigate } from "react-router-dom";
import { loadProfileUser, updateProfileUser } from '../modules/user';

import { Grid, Container, Button, TextField } from '@material-ui/core';
import { MCIcon } from 'loft-taxi-mui-theme';

const Profile = ({
  loadProfileUser,
  updateProfileUser,
  card,
  error,
  loading,
  isLoggedIn
}) => {
  useEffect(() => {
    loadProfileUser();
  },[]);

  const handleForm = ({ cardInput, expiresInput, holderInput, cvcInput }) => {
    updateProfileUser({
      cardNumber: cardInput,
      expiryDate: expiresInput,
      cardName: holderInput,
      cvc: cvcInput
    });
  };



  const { register, handleSubmit} = useForm({
    
    defaultValues: {
      cardInput: card.cardNumber,
      expiresInput: card.expiryDate,
      holderInput: card.cardName,
      cvcInput: card.cvc
    }
  });

  return isLoggedIn ? (
    <section className="tx-page tx-page-profile">
      <div className="tx-page-content">
        <Container maxWidth="md">
          <div className="tx-box">
            <h2 className="ac">Профиль</h2>
            <p className="ac">Способ оплаты</p>
            <form
              onSubmit={handleSubmit(handleForm)}
              className="tx-form"
              data-testid="profile-form"
            >
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <div className="tx-card">
                    <div className="tx-line tx-mclogo">
                      <MCIcon />
                    </div>
                    <div className="tx-line tx-full">
                      <TextField
                      label='Номер карты'
                      {...register("cardInput",)}
                        inputProps={{
                          'data-testid': 'profile-input'
                        }}
                      />
                    </div>
                    <div className="tx-line">
                      <TextField
                      label='Срок действия'
                      {...register("expiresInput")}
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="tx-card">
                    <div className="tx-line tx-full">
                      <TextField
                      label='Имя владельца'
                      {...register("holderInput")}
                      />
                    </div>
                    <div className="tx-line">
                      <TextField
                      label='CVC'
                     {...register("cvcInput")}
                      />
                    </div>
                  </div>
                </Grid>
              </Grid>
              <div className="tx-line ac">
                <Button type="submit" data-testid="profile-submit">
                  <span>Сохранить</span>
                  {loading ? <span className="tx-loader"></span> : null}
                </Button>
              </div>
              <div className="tx-line">
                <span className="tx-error">{error}</span>
              </div>
            </form>
          </div>
        </Container>
      </div>
    </section>
  ):(<Navigate replace to='/'/>)
};

const mapStateToProps = state => ({
  card: state.user.card,
  error: state.user.errorProfile,
  loading: state.user.loadingProfile,
  isLoggedIn: state.user.isLoggedIn
});

const mapDispatchToProps = {
  loadProfileUser,
  updateProfileUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);


