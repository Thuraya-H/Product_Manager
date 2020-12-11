import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const Detail = props => {
    const [thisproduct, setThisProduct] = useState({})
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
            .then(res=> setProduct(res.data));
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then(res => setThisProduct(res.data))
    }, [])

    const deleteProduct = (e) => {
        axios.delete('http://localhost:8000/api/product/' + props.id)
            .then(res => {
                removeFromDom(props.id)
            })
    }

    const removeFromDom = productId => {
        setProduct(product.filter(prod => prod._id !== productId));
    }

    return (
        <div>
            <h3>{thisproduct.title}</h3>
            <p>Price: ${thisproduct.price}</p>
            <p>Description: {thisproduct.description}</p>
            <Link className="mx-2" to={"edit"}>Edit</Link>
            |
            <button className="btn btn-dark mx-3 px-3" onClick={(e)=>{deleteProduct(props.id); navigate("/product") }}> Delete</button>
        </div>
    )
}

export default Detail;