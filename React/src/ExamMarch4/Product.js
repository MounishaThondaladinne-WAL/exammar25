import { useReducer } from "react";
import ProductReducer from "./ProductReducer";
import ProductContext from "./ProductContext";
import ProductForm from "./ProductForm";
import useLocalStorage from "use-local-storage";
const Product=()=>{
    const initialstate= [{ name: "", price: "", brand:"",status:""}]
    const [state,dispatch]=useReducer(ProductReducer,initialstate);
    
    console.log(state);
    const reducervalue={state,dispatch}
    console.log(reducervalue);
    return(
        <div>
        <ProductContext.Provider value={reducervalue}>
            <ProductForm></ProductForm>
        </ProductContext.Provider>
        </div>
    )
}
export default Product;