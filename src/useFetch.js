import { useEffect,useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isloading,setIsloading] = useState(true)
    const [error,setError] = useState()

    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res.ok) {
                throw Error('Could not fetch the data for the resource');
            }
            return res.json()
        })
        .then(data => {
            setData(data)
            setIsloading(false)
            setError(null)
        })
        .catch(err => {
            setError(err.message)
            setIsloading(false)
        })
    }, [url])
    return { data,isloading,error }
}
export default useFetch;