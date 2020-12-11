import React, { useState } from 'react'
import axios from 'axios';
const ProductManager = () => {

    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    return (
        <div className="container w-25 p-3">
        <form onSubmit={onSubmitHandler}>
            <h1>Product Manager</h1>
            <div className="row from-group border border-ligth rounded p-2 my-3 bg-light text-secondary">
                <label className="col-md-3 text-left">Title</label>
                <input className="col form-control ml-3" type="text" onChange = {(e)=>setTitle(e.target.value)}/>
            </div>
            <div className="row from-group border border-ligth rounded p-2 my-3 bg-light text-secondary">
                <label className="col-md-3 text-left">Price</label>
                <input className="col form-control ml-3" type="number" onChange = {(e)=>setPrice(e.target.value)}/>
            </div>
            <div className="row from-group border border-ligth rounded p-2 my-3 bg-light text-secondary">
                <label className="col-md-3 text-left">Description</label>
                <input className="col form-control ml-3" type="text" onChange = {(e)=>setDescription(e.target.value)}/>
            </div>
            <input className="btn btn-light text-dark px-5" type="submit" value="Create"/>
        </form>
        </div>
    )
}

export default ProductManager;