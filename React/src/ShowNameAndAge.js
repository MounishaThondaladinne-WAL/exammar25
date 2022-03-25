import { useParams } from "react-router-dom";
const ShowNameAndAge =()=>{
    const urlParams = useParams();
    console.log(urlParams)
    return(
        <div>Name is {urlParams.name} and age is {urlParams.age}</div>
    )
}
export default ShowNameAndAge;