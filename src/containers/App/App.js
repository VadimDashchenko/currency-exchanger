import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as ExchangerActions from '../../store/actions/exchanger';
import ExchangerPage from '../ExchangerPage/ExchangerPage';
import ClipLoader from 'react-spinners/ClipLoader'; 
import './App.scss';

class App extends Component {

  state = {
    loading: true
  }

  componentDidMount(){
    this.loadCurrencyData()
  }

  loadCurrencyData = () => {
    const {loadCurrency} = this.props;
    fetch('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11')
      .then(res => res.json())
      .then(result => {
        loadCurrency(result)
        this.setState({loading: false})
      })
      .catch(error => console.log(error))
  } 

  render(){
    const {loading} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <p>Currency exchanger</p> 
        </header>
          {loading 
          ?
          <ClipLoader
            size={100}
            color={"#282c34"}
            loading={loading}
           />
          :
          <ExchangerPage />
        }
      </div>
    )
  }
}

export default connect(
  null,
  ExchangerActions
)(App);
