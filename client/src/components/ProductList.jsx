import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
const ProductList = props => {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }
    return (
        <div className="container">
            <h2>All Products:</h2>
            {props.products.map((product, idx)=>{
                return <p>
                    <Link className="mx-2" to ={product._id} key={idx}>
                        {product.title} 
                    </Link>
                    |
                    <button className="btn btn-dark mx-3 px-3" onClick={(e)=>{deleteProduct(product._id)}}> Delete</button>
                </p>
            })}
        </div>
    )
}

export default ProductList;