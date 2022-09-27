import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
        setError(null);
        setIsPending(false);
      })
      .catch((e) => {
        console.log(e.message);
        setError(e.message);
        setIsPending(false);
      });
  }, []);

  return {data, isPending, error}
};

export default useFetch;
