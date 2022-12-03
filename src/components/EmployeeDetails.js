import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';

export default function EmployeeDetails() {
  const [userDetails, setUserDetails] = useState()

  let { empid } = useParams();

  useEffect(() => {
    axios.get("https://101313801-comp-3123-assignment1.vercel.app/api/emp/employees/" + empid)
      .then(res => {
        console.log(res.data)
        setUserDetails(res.data)
      })
      .catch(error => {
        console.log(error);
      })
  }, [empid])

  return (
    <>
      <div className='container border mt-5' style={{ width: "500px" }}>
        <h2>View Employee Details</h2>
        <p><b>First Name:</b> {userDetails && userDetails.first_name}</p>
        <p><b>Last Name:</b> {userDetails && userDetails.last_name}</p>
        <p><b>Email:</b> {userDetails && userDetails.email}</p>
        <p><b>Gender:</b> {userDetails && userDetails.gender}</p>
        <p><b>Salary:</b> {userDetails && userDetails.salary}</p>
      </div>
      <div className="container mt-4 text-center">
        <Link className='btn btn-danger' to='/employeeList'>Back</Link>
      </div>
    </>
  )
}
