function AllProducts({ product }) {
    return (
    < div >
    <h3>Products in Cart</h3>
    { product .map((product) => (
    < p key ={ product }>{ product }</ p >
    ))}
    </ div >
    );
    }
export default AllProducts;