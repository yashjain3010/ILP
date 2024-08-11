import { useEffect } from "react";
import { useState } from "react";
import { axios } from "axios";

const Datafetcher = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetchData = async () => {
      try {
        const response = await axios.get("<https://api.example.in>");
        setData(response);
      } catch (e) {
        console.log("Error fetching data: ", e);
      }
    };

    fetchData();

    return () => {
      console.log("Component will unmount. Cleanup here");
    };
  }, []);

  return <div>{data ? <p>Data : data</p> : <p>Loading data...</p>}</div>;
};

export default Datafetcher;
