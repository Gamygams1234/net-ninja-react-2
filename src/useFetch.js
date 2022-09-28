import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

//   this is to make sure when we switch, it doesnt mess with the state in the home component
  useEffect(() => {
    const abortConst = new AbortController();
    fetch(url, { signal: abortConst.signal })
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
        if (e.name === "AbortError") {
          console.log("fetch aborted");
        }
        console.log(e.message);
        setError(e.message);
        setIsPending(false);
      });
    return () => abortConst.abort();
  }, []);

  return { data, isPending, error };
};

export default useFetch;
