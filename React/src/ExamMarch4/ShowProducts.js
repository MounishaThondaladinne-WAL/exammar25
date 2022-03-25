import { useState } from "react";
const ShowProducts=()=>{
    const TotalProducts = JSON.parse(localStorage.getItem("Products"))
    console.log(TotalProducts.length);
    return(<div>
        <h1>Products</h1>
        {TotalProducts.map((val,index)=>{
            if(val.name!=""){
            return(
            <div>
            <p>ProductName:{val.name}</p>
            <p>ProductPrice:{val.price}</p>
            <p>ProductBrand:{val.brand}</p>
            <p>ProductAvalability:{val.status}</p>
            </div>)}
        })}
    </div>)
            
}
export default ShowProducts;
