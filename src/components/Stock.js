import React from 'react'

const Stock = (props) => (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.stock.name}</h5>
          <p className="card-text">{
              props.stock.type
            }</p>
            <p> Price: {props.stock.price}</p>
            <button onClick={props.onClick}>Buy Stock</button>
        </div>
      </div>
    </div>
  
);

export default Stock;
