import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

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
    <div className='container border' style={{ width: "500px" }}>
      <h2>View Employee Details</h2>
      <p>First Name: {userDetails && userDetails.first_name}</p>
      <p>Last Name: {userDetails && userDetails.last_name}</p>
      <p>Email: {userDetails && userDetails.email}</p>
      <p>Gender: {userDetails && userDetails.gender}</p>
      <p>Salary: {userDetails && userDetails.salary}</p>
    </div>
  )
}
