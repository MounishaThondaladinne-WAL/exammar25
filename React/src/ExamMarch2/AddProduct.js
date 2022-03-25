
function AddProducts({ setProduct }) {
    function handleSubmit(event) {
    event .preventDefault();
    const product = event . target  . product . value ;
    setProduct(prevProducts => {
        console.log(prevProducts)
        return[... prevProducts , product ]});
    }
    return (
    < form onSubmit ={ handleSubmit }>
    < input type ="text" id ="product" />
    < button type ="submit"> Add To Cart </ button >
    </ form >
    );
    }
    export default AddProducts;