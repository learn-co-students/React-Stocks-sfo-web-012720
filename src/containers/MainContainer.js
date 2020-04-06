import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor(){
    super();
    this.state = {
      stocks : [],
      portfolio: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then((resp) => resp.json())
    .then((stockData) => {
      this.setState({
        stocks: stockData
      })
      console.log(stockData.ticker)
    })
  }

  moveStock(i){
    var portfolio = this.state.portfolio.slice()
    portfolio.push(this.state.stocks[i])
    this.setState({
      portfolio: portfolio
    })

  }

  removeStock(i){
    var portfolio = this.state.portfolio.slice()
    portfolio.splice(i, 1)
    this.setState({
      portfolio: portfolio
    })
  }

  sortPrices = (event) => {
    let stocks = this.state.stocks.slice()
    stocks.sort((a,b) => { 
      return (a.price - b.price) } )
      this.setState({
        stocks: stocks
      })
    
    }

  sortAlpha = (event) => {
    let stocks = this.state.stocks.slice()
    stocks.sort((a,b) => { 
      return (a.ticker.localeCompare (b.ticker)) } )
      this.setState({
        stocks: stocks
      })
    
    }

  filterBy = (event)=> {
    var copy = this.state.stocks.slice() 
    var filtered = copy.filter(element => element.type === event.target.value)
    this.setState({
      stocks: filtered
    })

  }

  //want to pass the stocks onto the stock container, then on click pass the stocks to the portfolio container
  render() {
   
    return (
      <div>
        <SearchBar onChange = { () => this.sortPrices()} checked = { (event) => this.filterBy(event)} 
        onAlpha = { ()=> this.sortAlpha()}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.stocks} onClick = {(i) => this.moveStock(i)}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={this.state.portfolio} onClick = {(i) => this.removeStock(i)}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
