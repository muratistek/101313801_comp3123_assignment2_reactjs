import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function EmployeeList() {
  const [employeeData, setEmployeeData] = useState([])

  const getEmployeeData = () => {
    axios.get("https://101313801-comp-3123-assignment1.vercel.app/api/emp/employees")
      .then(res => {
        console.log(res.data);
        setEmployeeData([...res.data])
      })
      .catch(error => {
        console.log(error);
        setEmployeeData([])
      })
  }

  const deleteEmployee = (id) => {
    if (window.confirm("Do you want to delete the employee?")) {
      axios.delete(`https://101313801-comp-3123-assignment1.vercel.app/api/emp/employees?eid=${id}`)
        .then(res => {
          console.log("Removed Successfully");
          getEmployeeData()
        })
        .catch(error => {
          console.log(error);
        })
    }
  }


  useEffect(() => {
    getEmployeeData();
  }, [])

  return (
    <div className='container'>
      <h1>Employee List</h1>
      <Link to="/addEmployee" className='btn align-btn-y btn-primary'>Add New Employee</Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.length !== 0 &&
            employeeData.map(employee => (
              <tr key={employee._id}>
                <td>{employee.first_name}</td>
                <td>{employee.last_name}</td>
                <td>{employee.email}</td>
                <td>
                  <Button href={`/addEmployee/${employee._id}`} variant="warning">Update</Button>{' '}
                  <Button onClick={() => deleteEmployee(employee._id)} variant="danger">Delete</Button>{' '}
                  <Button href={`/viewEmployee/${employee._id}`} variant="primary">View</Button>{' '}
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}
