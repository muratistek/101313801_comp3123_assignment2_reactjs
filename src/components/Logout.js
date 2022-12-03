import React from 'react'
import Button from 'react-bootstrap/Button';

export default function Logout() {
  const logout = () => {
    localStorage.clear()

    window.location.assign('/');
  }

  return (
    <Button onClick={() => logout()} variant="dark">Logout</Button>
  )
}
