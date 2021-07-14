import React, { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');


  return (
      <div className='ui form'>
        <div className='field'>
          <label>Enter Search Term</label>
          <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className='input' />
        </div>
      </div>
  );
}

export default Search;