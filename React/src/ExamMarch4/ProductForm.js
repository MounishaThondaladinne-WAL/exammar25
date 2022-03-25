import { useContext ,useState} from "react";
import ProductContext from "./ProductContext";
const ProductForm=()=>{
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [brand,setBrand] = useState("");
    const [status,setStatus] = useState("");
    const {dispatch}= useContext(ProductContext);
    console.log({dispatch})
    return(
            <div>
            <h1 className="Product-heading">Products App</h1>
                <input type = "text" name="name" placeholder="Enter Product Name" onInput ={(event)=>{setName(event.target.value)}}
                 className="Product-element"/>
                 <input type = "number" name="price" placeholder="Enter Product Price" onInput ={(event)=>{setPrice(event.target.value)}}
                 className="Product-element"/>
                 <input type = "text" name="brand" placeholder="Enter Product Brand" onInput ={(event)=>{setBrand(event.target.value)}}
                 className="Product-element"/>
                 <div onChange={(event)=>{setStatus(event.target.value)}} className="Product-element">
                    <input type="radio" value="available" name="status"/>Available<br/>
                    <input type="radio" value="unavailable" name="status"/>UnAvailable<br/>
                </div>
                <button onClick={()=>{dispatch({type:'add',value1:name,value2:price,value3:brand,value4:status})}}className="Product-element">Add Product</button>  
        </div>
    )
}
export default ProductForm;
