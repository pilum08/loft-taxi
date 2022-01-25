import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadProfile, updateProfile } from '../modules/user'
import { useForm } from 'react-hook-form'

import { Grid, Container, Button, TextField } from '@material-ui/core'
import { MCIcon } from 'loft-taxi-mui-theme'

const ProfileForm = ({
    loadProfile,
    updateProfile,
    card,
    error,
    loading
  }) => {
    useEffect(() => {
      loadProfile();
    });
  
    const handleForm = ({ cardInput, expiresInput, holderInput, cvcInput }) => {
      updateProfile({
        cardNumber: cardInput,
        expiryDate: expiresInput,
        cardName: holderInput,
        cvc: cvcInput
      });
    };
  
  
  
    const { registration, handleSubmit, errors } = useForm({
      
      defaultValues: {
        cardInput: card.cardNumber,
        expiresInput: card.expiryDate,
        holderInput: card.cardName,
        cvcInput: card.cvc
      }
    });
  
    return (
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
                          label="Номер карты"
                          type="text"
                          name="cardInput"
                          inputRef={registration}
                          error={!!errors.cardInput}
                          helperText={
                            errors.cardInput && errors.cardInput.message
                          }
                          inputProps={{
                            'data-testid': 'profile-input'
                          }}
                        />
                      </div>
                      <div className="tx-line">
                        <TextField
                          label="Срок действия"
                          type="text"
                          name="expiresInput"
                          inputRef={registration}
                          error={!!errors.expiresInput}
                          helperText={
                            errors.expiresInput && errors.expiresInput.message
                          }
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div className="tx-card">
                      <div className="tx-line tx-full">
                        <TextField
                          label="Имя владельца"
                          type="text"
                          name="holderInput"
                          inputRef={registration}
                          error={!!errors.holderInput}
                          helperText={
                            errors.holderInput && errors.holderInput.message
                          }
                        />
                      </div>
                      <div className="tx-line">
                        <TextField
                          label="CVC"
                          type="text"
                          name="cvcInput"
                          inputRef={registration}
                          error={!!errors.cvcInput}
                          helperText={errors.cvcInput && errors.cvcInput.message}
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
    );
  };
  
  const mapStateToProps = state => ({
    card: state.user.card,
    error: state.user.errorProfile,
    loading: state.user.loadingProfile
  });
  
  const mapDispatchToProps = {
    loadProfile, updateProfile
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm)