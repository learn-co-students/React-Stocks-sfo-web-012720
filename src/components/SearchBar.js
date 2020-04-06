import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" name = "radioButton" value="Alphabetically" onChange = {() => props.onAlpha()}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" name = "radioButton" value="Price" checked={null} onChange = {() => props.onChange()}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter: </strong>
        <select onChange = {(event) => props.checked(event)} >
        <option value="" >All</option> 
        <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
