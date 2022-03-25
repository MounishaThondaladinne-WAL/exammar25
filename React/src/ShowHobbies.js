import { useParams } from "react-router-dom";
const ShowHobbies =()=>{
    const urlParams = useParams();
    console.log(urlParams)
    return(
        <div>
            <h1>List of Hobbies</h1>
            <p><b>Hobby1:</b>{urlParams.hobby1}</p>
            <p><b>Hobby2:</b>{urlParams.hobby2}</p>
            <p><b>Hobby3:</b>{urlParams.hobby3}</p>
            <p><b>Hobby4:</b>{urlParams.hobby4}</p>
            <p><b>Hobby5:</b>{urlParams.hobby5}</p>
        </div>
    )
}
export default ShowHobbies;