- Reconciliation :- Reconciliation is identify what parts of the virtual DOM have changed and effectively updating those parts in the actual dom.The single root structure simplifies this process by providing a clear entry point for react to determine where update should occur.

- useState & useEffect Hook :-

import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('<https://api.example.com/data>');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      console.log('Component will unmount. Cleanup here.');
    };
  }, []); 

  return (
    <div>
      {data ? (
        <p>Data: {data}</p>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default DataFetcher;