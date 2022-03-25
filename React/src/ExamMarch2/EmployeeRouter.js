import { useParams } from "react-router-dom";
const Employee = () => {
    const details = useParams()
    return (
        <table>
            <tr>
                <th> Employee</th>
                <th>Age</th>
                <th>City</th>
            </tr>
            <tr>
                <td>{details.name1}</td>
                <td>{details.age1}</td>
                <td>{details.city1}</td>
            </tr>
            <tr>
                <td>{details.name2}</td>
                <td>{details.age2}</td>
                <td>{details.city2}</td>
            </tr>
        </table>
    )
}
export default Employee;