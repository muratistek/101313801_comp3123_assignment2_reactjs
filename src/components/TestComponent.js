import React, { useState } from 'react'
import axios from 'axios'

export default function TestComponent() {
  const [data, setData] = useState([])

  const getData = () => {
    axios.get("https://101313801-comp-3123-assignment1.vercel.app/api/emp/employees").then(res => {
      console.log(res.data);
      setData(...res.data)
    })
  }

  return (
    <div>
      <button onClick={() => getData()}>Get Data</button>
      <p></p>
    </div>
  )
}
