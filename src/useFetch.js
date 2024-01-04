import { useState, useEffect } from "react";
// Complete the following hook
const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


                    //It should return data returned from fetch, loading, error and getJoke
  const getJoke = async () => {
    try {
      const response = await fetch(url);
      if(!response.ok){
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const jsonData = await response.json();
      setData(jsonData);
    } catch (err){
      setError(err.message)
    }finally{
      setLoading(false);
    }

  };

  useEffect(() => {
    getJoke();
  },[url]);


  return {data, loading, error, getJoke}
};
// export the useFetch hook as a default export
export default useFetch;
