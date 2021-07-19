import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('programming');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',        
          format: 'json',
          srsearch: searchTerm
        }
      });

      setSearchResults(data);
    }

    if (searchTerm) {
      search();
    }
  }, [searchTerm]);

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