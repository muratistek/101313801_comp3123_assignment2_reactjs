import React, { useState } from 'react'
import axios from 'axios'

export default function Login() {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleLogin = (e) => {
    e.preventDefault()

    let data = {}

    if (login.includes("@")) {
      data = {
        email: login,
        password: password
      }
    }
    else {
      data = {
        username: login,
        password: password
      }
    }

    axios.post('https://101313801-comp-3123-assignment1.vercel.app/api/user/login', data)
      .then(res => {
        setMessage("success")
        if (login.includes("@")) {
          localStorage.setItem("email", res.data.email)
        }
        else {
          localStorage.setItem("username", res.data.username)
        }
        window.location.reload(false);
      })
      .catch(error => {
        setMessage("error")
      })

  }


  return (
    <div>
      <form className="gradient-custom" onSubmit={handleLogin}>
        <div className="container py-5" style={{ height: "100%" }}>
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                <div className="card-body p-5 text-center">

                  <div className="mb-md-5 mt-md-4 pb-5">

                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">Please enter your login and password!</p>

                    {message === "success" &&
                      <div className="alert alert-success" role="alert">
                        Success. You will be redirected
                      </div>
                    }
                    {message === "error" &&
                      <div className="alert alert-danger" role="alert">
                        Such user does not exist!
                      </div>
                    }

                    <div className="form-outline form-white mb-4">
                      <input type="text" id="email" className="form-control form-control-lg" value={login} onChange={e => { setLogin(e.target.value) }} required />
                      <label className="form-label" htmlFor="email">Email or Username</label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input type="password" id="password" className="form-control form-control-lg" value={password} onChange={e => { setPassword(e.target.value) }} required />
                      <label className="form-label" htmlFor="password">Password</label>
                    </div>

                    <p className="mb-0">Don't have an account? <a href="/signup" className="text-white-50 fw-bold">Sign Up</a>
                    </p>

                    <button className="btn btn-outline-light btn-lg px-5 mt-5" type="submit">Login</button>


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
