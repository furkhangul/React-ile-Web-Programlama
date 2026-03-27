import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

function UserInfo(props){ 
    const{name,surname,age,department,salary,email,phone} = props
    return(
        <div>
            <table class="table">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Surname</th>
                <th scope="col">Age</th>
                <th scope="col">Department</th>
                <th scope="col">Salary</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>{name}</td>
                <td>{surname}</td>
                <td>{age}</td>
                <td>{department}</td>
                <td>{salary} $</td>
                <td>{email}</td>
                <td>{phone}</td>
                </tr>
            </tbody>
            </table>
            
        </div>
    )
}

UserInfo.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    department: PropTypes.string.isRequired,
    salary: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
}
export default UserInfo
