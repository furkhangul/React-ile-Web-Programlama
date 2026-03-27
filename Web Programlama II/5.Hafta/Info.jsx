import React from "react";
import PropTypes from "prop-types"
function Info(props){
    const {username, age, department, salary} = props
    return(
        <div>
            <h2>User: {username}</h2>
                <ul>
                    <li>Age: {age}</li>
                    <li>Department: {department}</li>
                    <li>Salary: {salary}$</li>
                </ul>
        </div>
    )
}

Info.propTypes = {
    username: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    department: PropTypes.string.isRequired,
    salary: PropTypes.number.isRequired

}  

export default Info
