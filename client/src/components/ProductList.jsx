import React from 'react'
import { Link } from '@reach/router';
export default props => {
    return (
        <div className="container m-5 p-5">
            <h2>All Products:</h2>
            {props.products.map((product, idx)=>{
                return <p><Link to ={product._id} key={idx}>{product.title}</Link></p>
            })}
        </div>
    )
}