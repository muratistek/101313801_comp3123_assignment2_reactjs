import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router'

export default function AddEmployee() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('Male')
  const [salary, setSalary] = useState('')

  const { empid = null } = useParams();

  // Retrieve values if updating a user
  useEffect(() => {
    if (empid !== null) {
      axios.get("https://101313801-comp-3123-assignment1.vercel.app/api/emp/employees/" + empid)
        .then(res => {
          setFirstName(res.data.first_name)
          setLastName(res.data.last_name)
          setEmail(res.data.email)
          setGender(res.data.gender)
          setSalary(res.data.salary)
        })
        .catch(error => {
          console.log(error);
        })
    }
  }, [empid])

  const onSubmitForm = e => {
    e.preventDefault()

    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      gender: gender,
      salary: salary
    }



    // POST REQUEST
    if (empid === null) {
      axios.post('https://101313801-comp-3123-assignment1.vercel.app/api/emp/employees', data)
        .then(res => {
          console.log("Success Addition");
          console.log(res);
          navigate('/employeeList')
        })
        .catch(error => {
          console.log(error)
        })
    }
    else {
      axios.put(`https://101313801-comp-3123-assignment1.vercel.app/api/emp/employees/${empid}`, data)
        .then(res => {
          console.log("Updated Successfully");
          navigate('/employeeList')
        })
        .catch(error => {
          console.log(error);
        })
    }
  }


  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form onSubmit={onSubmitForm} className="container">
            <div className="card">
              <div className="card-title">
                <h2>{empid !== null ? "Update Employee" : "Add New Employee"} </h2>
              </div>
              <div className="card-body">
                <div className="row">

                  <div className="col-lg-12">
                    <div className="form-group py-3">
                      <label htmlFor='firstName'>First Name</label>
                      <input id='firstName' placeholder='Enter First Name' name='firstName' value={firstName} onChange={e => setFirstName(e.target.value)} className='form-control' type="text" required />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group py-3">
                      <label htmlFor='lastName'>Last Name</label>
                      <input id='lastName' placeholder='Enter Last Name' name='lastName' value={lastName} onChange={e => setLastName(e.target.value)} className='form-control' type="text" required />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group py-3">
                      <label htmlFor="email">Email</label>
                      <input id='email' placeholder='Enter Email' name='email' value={email} onChange={e => setEmail(e.target.value)} className='form-control' type="email" required />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group py-3">
                      <label className='label-align'>Gender:</label>
                      <div className="form-check form-check-inline" >
                        <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" value="Male" defaultChecked onChange={e => setGender(e.target.value)}></input>
                        <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" value="Female" onChange={e => setGender(e.target.value)}></input>
                        <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group py-3">
                      <label htmlFor="salary">Salary</label>
                      <input id='salary' placeholder='Enter Salary' name='salary' value={salary} onChange={e => setSalary(e.target.value)} className='form-control' type="number" required />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group py-3">
                      <button className='btn btn-success m-2' type='submit'>Save</button>
                      <Link className='btn btn-danger' to='/employeeList'>Cancel</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
