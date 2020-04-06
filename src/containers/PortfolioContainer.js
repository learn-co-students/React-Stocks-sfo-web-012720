import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.portfolio.map((port,i) => 
              <Stock stock={port} onClick ={() => {this.props.onClick(i)}}/>
            //render your portfolio stocks here
          )}
      </div>
    );
  }

}

export default PortfolioContainer;
