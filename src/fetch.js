import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);



    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then((res) => {
                    if (!res.ok) {
                        throw Error('cannot fetch resource from server')
                    }

                    return res.json();
                })
                .then((data) => {
                    setData(data.Results)
                    setPending(false);
                })
                .catch((err) => {
                    if (err.name === 'AbortError') {
                        console.log('fetch abborted')
                    } else {
                        setError(err.message)
                        setPending(false);
                    }
                })
        }, 1000)

        // abort the fetch
        return () => abortCont.abort();

    }, [url])


    return { data, pending, error }
}

export default useFetch;