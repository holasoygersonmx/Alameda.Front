import { useState, useEffect } from "react";

export const useFetch = (url) => {

    const[response, setResponse] = useState({});

    useEffect(() => {
        const request = async() => {
            let fetch = await fetch(url);
            let data = await fetch.json();
            setResponse(data.value);
        }
        request();
    }, [url]);

    return response;
}