import React, { Component } from 'react';
import Stock from '../components/Stock'
import PortfolioContainer from './PortfolioContainer';

class StockContainer extends Component {

 
  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Stocks</h2>
        { this.props.stocks.map((stock, i) => 
        <Stock stock={stock} onClick ={() => {this.props.onClick(i)}}/> ) 
        
        //render the list of stocks here
        }
      </div>
    );
  }

}

export default StockContainer;
