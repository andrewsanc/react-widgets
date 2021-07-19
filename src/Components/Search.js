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

      setSearchResults(data.query.search);
    }

    if (searchTerm && !searchResults.length) {
      search();
    } else {
      var delayedRequest = setTimeout(() => {
        if (searchTerm) {
          search();
        }
      }, 1000);
    }

    return () => {
      clearTimeout(delayedRequest);
    }
  }, [searchTerm]);

  const renderedResults = searchResults.map(resultObj => {
    return (
      <div key={resultObj.pageid} className='item'>
        <div className='right floated content'>
          <a className='ui button' href={`https://en.wikipedia.org?curid=${resultObj.pageid}`}>Visit</a>
        </div>
        <div className='content'>
          <div className='header'><a href={`https://en.wikipedia.org?curid=${resultObj.pageid}`}>{resultObj.title}</a></div>
          <span dangerouslySetInnerHTML={{ __html: resultObj.snippet}}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Search Term</label>
          <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className='input' />
        </div>
      </div>
      <div className='ui celled list'>
        {renderedResults}
      </div>
    </div>
  );
}

export default Search;