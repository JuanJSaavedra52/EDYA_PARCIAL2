import { useEffect } from "react";
import { useState } from "react";


export const GetImagenes = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.log('error'));
    }, [])
    return (
        <>
            <div>
                {data.map(item => (<img src={item.url} alt={item.title}/>))}
            </div>
        </>
    )
}