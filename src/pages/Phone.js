import React, { useState } from 'react';
import useFetch from "../action/useFetch";
import SearchBar from '../pages/Search';

const Phone = () => {
  const [input, setInput] = useState('');
  const { data: categories } = useFetch('http://localhost:8000/categories?mobile',)
  const updateInput = (input) => {
    setInput(input);
  }
  return (
    <div >
      <SearchBar
        input={input}
        onChange={updateInput}
      />
      <div className='reports'>
        {categories?.filter((value) => {
          if (input === "") {
            return value;
          } else if (value.title.toLowerCase().includes(input.toLowerCase())) {
            return value
          }
        }).map(body => (
          <div className="blog-preview" key={body.id} >
            <h2>{body.title}</h2>
            <p>Message: {body.message}</p>
            <p>Price: {body.price}</p>
          </div>
        ))}
      </div>
    </div>

  );
}

export default Phone;
