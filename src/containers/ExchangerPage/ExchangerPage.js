import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as ExchangerActions from '../../store/actions/exchanger';
import InputForm from '../../components/InputForm/InputForm';
import Selector from '../../components/Selector/Selector';

class ExchangerPage extends Component {

    state = {
        second: 0,
        first: 1,
        currentCurrency: null
    }

    componentDidMount(){
        this.getTypeOfExchange()
    }

    getTypeOfExchange = () => {
        const {currency} = this.props;
        let current = currency.find(i => i.ccy)
        this.setState({
            second: current.buy,
            currentCurrency: current
        })
    }

    handleChange = ({target:{name, value}}) => {
        const {currentCurrency} = this.state;
        if(name === 'first') {
            this.setState({
                first: value,
                second: currentCurrency.buy * value
            })
        }
        else {
            this.setState({
                second: value,
                first: value/currentCurrency.buy 
            })
        }
    }

    changeCurrentCurrency = (data) => {
        const {changeCurrency, currency} = this.props;
        changeCurrency(data);
        let res = currency.find(i => i.ccy === data);
        this.setState({
            first: 1,
            second: res.buy,
            currentCurrency: res
        })
    }

    render(){
        const {currency} = this.props;
        const {first, second} = this.state;
        return(
            <section className="exchanger-page__section">
                <Selector data={currency} changeCurrency={this.changeCurrentCurrency} />
                <div className="exchanger-page__input-block">
                    <InputForm first={first} second={second} currencyChange={this.handleChange} />
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    currency: state.exchange.currency
})

export default connect(
    mapStateToProps,
    ExchangerActions
)(ExchangerPage);