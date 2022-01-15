import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { saveCard, getCard } from '../store/actions'

export class ProfileForm extends Component {
    state = {
        cardName: this.props.cardName,
        cardNumber: this.props.cardNumber,
        expiryDate: this.props.expiryDate,
        cvc: this.props.cvc
    };

    static propTypes = {
        getCard: PropTypes.func.isRequired,
        saveCard: PropTypes.func.isRequired
    }

    handleChangeCardName = (e) => {
        this.setState({cardName: e.target.value});
    }

    handleChangeCardNumber = (e) => {
        this.setState({cardNumber: e.target.value});
    }

    handleChangeExpiryDate = (e) => {
        this.setState({expiryDate: e.target.value});
    }

    handleChangeCvc = (e) => {
        this.setState({cvc: e.target.value});
    }

    componentDidMount() {
        this.props.getCard();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.cardName !== this.props.cardName ||
            nextProps.cardNumber !== this.props.cardNumber ||
            nextProps.expiryDate !== this.props.expiryDate ||
            nextProps.cvc !== this.props.cvc) {
          this.setState({
            cardName: nextProps.cardName,
            cardNumber: nextProps.cardNumber,
            expiryDate: nextProps.expiryDate,
            cvc: nextProps.cvc
          });
        }
      }

    handleSubmit = (e) => {
        e.preventDefault();

        const cardNumber = e.target.cardNumber ? e.target.cardNumber.value : null;
        const cardName = e.target.cardName ? e.target.cardName.value : null;
        const expiryDate = e.target.expiryDate ? e.target.expiryDate.value : null;
        const cvc = e.target.cvc ? e.target.cvc.value : null;

        this.props.saveCard(cardNumber, cardName, expiryDate, cvc);
    }

    render() {
        return (
            <div data-testid="profile-form" className="profile-form">
                <form className="profile-form__form" onSubmit={this.handleSubmit}>
                    <h2 className="profile-form__title">Профиль</h2>
                    <h5 className="profile-form__subtitle">Введите платежные данные</h5>
                    <div className="profile-form__columns">
                        <div className="profile-form__column profile-form__column_left">
                            <div className="profile-form__field">
                                <span className="profile-form__field-name">
                                    Имя владельца
                                </span>
                                <input name="cardName" type="text" className="profile-form__field-input" placeholder="Your Name" value={this.state.cardName} onChange={this.handleChangeCardName}/>
                            </div>
                            <div className="profile-form__field">
                                <span className="profile-form__field-name">
                                    Номер карты
                                </span>
                                <input name="cardNumber" type="text" className="profile-form__field-input" placeholder="0000 0000 0000 0000" value={this.state.cardNumber} onChange={this.handleChangeCardNumber}/>
                            </div>
                            <div className="profile-form__columns">
                                <div className="profile-form__column profile-form__column_first">
                                    <div className="profile-form__field">
                                        <span className="profile-form__field-name">
                                            MM/YY
                                        </span>
                                        <input name="expiryDate" type="text" className="profile-form__field-input" placeholder="MM/YY" value={this.state.expiryDate} onChange={this.handleChangeExpiryDate}/>
                                    </div>
                                </div>
                                <div className="profile-form__column profile-form__column_second">
                                    <div className="profile-form__field">
                                        <span className="profile-form__field-name">
                                            CVC
                                        </span>
                                        <input name="cvc" type="text" className="profile-form__field-input" placeholder="CVC" value={this.state.cvc} onChange={this.handleChangeCvc}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="profile-form__column profile-form__column_right">
                            <div className="profile-form__card">
                                <div className="profile-form__card-header-row">
                                    <div className="profile-form__card-logo"></div>
                                    <div className="profile-form__card-date">
                                        {this.props.expiryDate}
                                    </div>
                                </div>    
                                <div className="profile-form__card-number">
                                    {this.props.cardNumber}
                                </div>
                                <div className="profile-form__card-footer-row">
                                    <div className="profile-form__chip-logo"></div>
                                    <div className="profile-form__mc-logo">
                                        <div className="profile-form__ellipse" />
                                        <div className="profile-form__ellipse" />
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>
                    <input data-testid="profile-form__submit" type="submit" value="Сохранить" className="profile-form__submit"/>
                </form>
            </div>
        )
    }
}

export const ProfileFormWithAuth = connect(
    state => ({
        cardNumber: state.card.cardNumber,
        cardName: state.card.cardName,
        expiryDate: state.card.expiryDate,
        cvc: state.card.cvc
    }),
    { saveCard, getCard }
)(ProfileForm);