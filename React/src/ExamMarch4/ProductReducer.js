import useLocalStorage from "use-local-storage";
const ProductReducer = (state, action) => {
  if (action.type == "add") {
    let productObj = {
      name: action.value1,
      price: action.value2,
      brand: action.value3,
      status: action.value4,
    };
    localStorage.setItem("Products", JSON.stringify([...state, productObj]));
    return [...state, productObj];
  }
};
export default ProductReducer;
