import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table, Button } from 'react-bootstrap'

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

  useEffect(() => {
    getEmployeeData();
  }, [])

  return (
    <div className='container'>
      <h1>Employee List</h1>
      <Button className='align-btn-y' variant="primary">Add Employee</Button>{' '}
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
                  <Button variant="warning">Update</Button>{' '}
                  <Button variant="danger">Delete</Button>{' '}
                  <Button variant="primary">View</Button>{' '}
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}
