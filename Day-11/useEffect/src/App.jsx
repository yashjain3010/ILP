import React, {useEffect, useState} from 'react'

  const fetchData = () => {
    const [data,setData] = useState(null);

    useEffect(() => {
      const fetchingData = async () => {
        try{
          const response = await fetch('<https://api.example.com>');
          const result = await response.json();
          setData(result);
        }
        catch(e){
          console.error('Error fetching data',error);
        }
      }

      fetchingData();

      return () => {
        console.log('Component will unmount. Cleanup here');
      }
    },[])

    return <div>
      {data ? (
        <p>Data: {data}</p>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  }

export default fetchData;
