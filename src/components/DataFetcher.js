import React,{useState,useEffect} from 'react';
import 'regenerator-runtime/runtime';


const DataFetcher = () => {

    const [data,setData] = useState("");

    useEffect(() => {
        const fetchData = async ()=>{
            try{
                const response = await fetch("https://dummyjson.com/products");
                const result = await response.json();
                setData(result.products);
            }
            catch(error){
                console.error("Error fetching data",error)
            }
        }

        fetchData();
    },[]);

    console.log(data);

    return (
        <div>
            {data.length > 0 ? (
                data.map((product) => (
                    <div key={product.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p><strong>Category:</strong> {product.category}</p>
                        <p><strong>Price:</strong> ${product.price}</p>
                        <p><strong>Discount:</strong> {product.discountPercentage}%</p>
                        <p><strong>Rating:</strong> {product.rating} / 5</p>
                        <p><strong>Stock:</strong> {product.stock} units available</p>
                        <img src={product.thumbnail} alt={product.title} style={{ width: '100px' }} />
                    </div>
                ))
            ) : (
                <p>Loading products...</p>
            )}
        </div>
    );
};

export default DataFetcher;


