import React, { useEffect, useState } from 'react';
import ProductManager from '../components/ProductManager';
import ProductList from '../components/ProductList';
import axios from 'axios';

export default () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
            .then(res=>{
                setProduct(res.data);
                setLoaded(true);
            });
    },[])
    return (
        <div>
           <ProductManager />
           <hr/>
           {loaded && <ProductList products={product}/>}
        </div>
    )
}
