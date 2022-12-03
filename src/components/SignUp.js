import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function SignUp({ setCheckSignUp }) {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const navigate = useNavigate()


  const handleSignUp = (e) => {
    e.preventDefault()

    const data = {
      username: username,
      email: email,
      password: password
    }

    axios.post('https://101313801-comp-3123-assignment1.vercel.app/api/user/signup', data)
      .then(res => {
        setMessage("success")
        setCheckSignUp(true)
        localStorage.setItem("username", username)
        setTimeout(() => navigate('/'), 1000)

      })
      .catch(error => {
        setMessage("error")
      })
  }

  return (
    <div>
      <form className="gradient-custom" onSubmit={handleSignUp}>
        <div className="container py-5" style={{ height: "100%" }}>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                <div className="card-body p-5 text-center">

                  <div className="mb-md-5 mt-md-4 pb-5">

                    <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                    <p className="text-white-50 mb-5">Please enter your username, email and password!</p>

                    {message === "success" &&
                      <div className="alert alert-success" role="alert">
                        Success. Your account has been created
                      </div>
                    }
                    {message === "error" &&
                      <div className="alert alert-danger" role="alert">
                        Such user exists. Try different username/email!
                      </div>
                    }

                    <div className="form-outline form-white mb-4">
                      <input type="text" id="username" className="form-control form-control-lg" value={username} onChange={e => { setUsername(e.target.value) }} required />
                      <label className="form-label" htmlFor="username">Username</label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input type="email" id="email" className="form-control form-control-lg" value={email} onChange={e => { setEmail(e.target.value) }} required />
                      <label className="form-label" htmlFor="email">Email</label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input type="password" id="password" className="form-control form-control-lg" value={password} onChange={e => { setPassword(e.target.value) }} required />
                      <label className="form-label" htmlFor="password">Password</label>
                    </div>

                    <button className="btn btn-outline-light btn-lg px-5 mt-3" type="submit">Sign Up</button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
