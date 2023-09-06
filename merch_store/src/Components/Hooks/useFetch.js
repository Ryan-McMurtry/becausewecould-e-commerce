import {useEffect, useState} from "react";
import { makeRequest } from "../../makeRequests";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, seterror] = useState(false);

    useEffect(() => {

        const fetchdata = async () => {
            try {
            setLoading(true)
            const res = await makeRequest.get(url);
            setData(res.data.data);
            } catch (err) {
            seterror(true)
            }
            setLoading(false);
        }
        fetchdata();
        }, [url]);
        
        return { data, loading, error }
}

export default useFetch;