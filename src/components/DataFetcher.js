import React,{useState,useEffect} from 'react';
import 'regenerator-runtime/runtime';


const DataFetcher = () => {

    const [data,setData] = useState({});

    useEffect(() => {
        const fetchData = async ()=>{
            try{
                const response = await fetch("https://dummyjson.com/products");
                const result = await response.json();
                setData(result);
            }
            catch(error){
                console.error("Error fetching data",error)
            }
        }

        fetchData();
    },[]);

    // console.log(Object.keys(data).length);

    return (
        <div>
            {Object.keys(data).length>0?
            <div>
                <h1>Data Fetched from API</h1>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>:<p>loading...</p>
            }
        </div>
    );
};

export default DataFetcher;


