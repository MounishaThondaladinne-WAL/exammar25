
function AddTodo({ setTodos }) {
    function handleSubmit(event) {
    event .preventDefault();
    const todo = event . target  . todo . value ;
    setTodos(prevTodos => {
        console.log(prevTodos)
        return[... prevTodos , todo ]});
    }
    return (
    < form onSubmit ={ handleSubmit }>
    < input type ="text" id ="todo" />
    < button type ="submit"> Add Todo </ button >
    </ form >
    );
    }
    export default AddTodo;