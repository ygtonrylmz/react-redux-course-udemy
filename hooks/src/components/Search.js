import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('programming');
  // result.length 2. api call yaptığı için çözüm olarak oluşturuldu.
  // debouncedTerm değiştiğinde api call yapılıyor.
  // Bu sayede her değişiklikte birden fazla api call yapılması engellendi.
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  // When [term] changes, run this code
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  // When [debouncedTerm] changes, run this code
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm,
        },
      });

      setResults(data.query.search);
    };
    search();
  }, [debouncedTerm]);

  // When [term] changes, run this code
  // useEffect(() => {
  //   //#region useEffect Cleanup
  //   // console.log('Term was changed');

  //   // return () => {
  //   //   console.log('Cleanup');
  //   // };
  //   //#endregion useEffect Cleanup

  //   //#region ASYNC Solution 1
  //   // Mostly use solution
  //   // const search = async () => {
  //   //   const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
  //   //     params: {
  //   //       action: 'query',
  //   //       list: 'search',
  //   //       origin: '*',
  //   //       format: 'json',
  //   //       srsearch: term,
  //   //     },
  //   //   });

  //   //   setResults(data.query.search);
  //   // };

  //   // if (term && !results.length) {
  //   //   search();
  //   // } else {
  //   //   const timeoutId = setTimeout(() => {
  //   //     if (term) search();
  //   //   }, 1000);

  //   //   return () => {
  //   //     clearTimeout(timeoutId);
  //   //   };
  //   // }

  //   //#endregion ASYNC Solution 1

  //   //#region ASYNC Solution 2
  //   // (async () => {
  //   //   await axios.get('');
  //   // })();
  //   //#endregion ASYNC Solution 2

  //   //#region ASYNC Solution 3
  //   // axios.get('').then((response) => {
  //   //   console.log(response);
  //   // });
  //   //#endregion ASYNC Solution 3
  // }, [results.length, term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className='item'>
        <div className='right floated content'>
          <a className='ui button' href={`https://en.wikipedia.org?curid=${result.pageid}`}>
            Go
          </a>
        </div>
        <div className='content'>
          <div className='header'>{result.title}</div>
          {/* HTML taglerini silmek için eklendi. XSS ataklarına açık */}
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
          {/* {result.snippet} */}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Search for a Word</label>
          <input
            onChange={(e) => setTerm(e.target.value)}
            value={term}
            type='text'
            className='input'
          />
        </div>
      </div>
      <div className='ui celled list'>{renderedResults}</div>
    </div>
  );
};
export default Search;
