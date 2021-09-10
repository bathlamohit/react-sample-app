import React, { useState } from 'react';
import useFetch from "../action/useFetch";
import SearchBar from '../pages/Search';

const Led = () => {
  const [input, setInput] = useState('');
  const { data: categories } = useFetch('http://localhost:8000/categories?LED')

  const updateInput = (input) => {
    setInput(input);
  }

  return (
    <div>
      <SearchBar
        input={input}
        onChange={updateInput}
      />
      <div className="reports">

        {categories?.filter((value) => {
          if (input === "") {
            return value;
          } else if (value.title.toLowerCase().includes(input.toLowerCase())) {
            return value
          }
        }).map((value, key) => (
          <div className="blog-preview" key={key} >
            <h2>{value.title}</h2>
            <p>Message: {value.message}</p>
            <p>Price: {value.price}</p>
          </div>
        ))}
      </div>
    </div>

  );
}

export default Led;
