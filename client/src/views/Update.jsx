import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';

const Update = props => {
    const { id } = props;
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, [])
    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            title,
            price,
            description
        })
            .then(res => console.log(res));
    }
    return (
        <div className="container w-25 p-3">
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
            <div className="row from-group border border-ligth rounded p-2 my-3 bg-light text-secondary">
                <label className="col-md-3 text-left">Title</label>
                <input className="col form-control ml-3" type="text" value={title}  onChange = {(e)=>setTitle(e.target.value)}/>
            </div>
            <div className="row from-group border border-ligth rounded p-2 my-3 bg-light text-secondary">
                <label className="col-md-3 text-left">Price</label>
                <input className="col form-control ml-3" type="number" value={price} onChange = {(e)=>setPrice(e.target.value)}/>
            </div>
            <div className="row from-group border border-ligth rounded p-2 my-3 bg-light text-secondary">
                <label className="col-md-3 text-left">Description</label>
                <input className="col form-control ml-3" type="text" value={description} onChange = {(e)=>setDescription(e.target.value)}/>
            </div>
                <input onClick={() => navigate("/product")} className="btn btn-light text-dark px-3" type="submit" value="Update" />
            </form>
        </div>
    )
}

export default Update;