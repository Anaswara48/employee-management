import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'



function Add() {

  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [desig, setDesig] = useState('')
  const [sal, setSal] = useState(0)
  const [exp, setExp] = useState(0)

  useEffect(() => {
    setId(uuid().slice(0, 3))
  }, [])

let location=useNavigate()

  const addEmployee = async (e) => {
    e.preventDefault()
    const body = {
      id,
      name,
      designation: desig,
      salary: sal,
      experience: exp
    }


    const result = await axios.post('http://localhost:8000/addEmployee', body)
    // redirection to home
    location('/')
    alert(result.data.message)


  }
  //   console.log(id);
  // console.log(name);
  // console.log(desig);
  // console.log(sal);
  // console.log(exp);

  return (
    <div>
      <h1 className='text-center mt-5'>Add New Employee</h1>
      <p className='p-5 fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Porro aperiam deserunt voluptatem numquam! Non sed dolores
        soluta in quae eius asperiores necessitatibus officia blanditiis.
        A necessitatibus adipisci magniquos corruption.</p>
      <h3 className='text-center'>Employee Data</h3>
      <form action="" className='container w-50 p-5 bg-light mb-5'>
        <input onChange={(e) => setName(e.target.value)} type="text" className="form-control mt-3" placeholder='employee name' name='n1' id='an1' />
        <input onChange={(e) => setDesig(e.target.value)} type="text" className="form-control mt-3" placeholder='designation' name='n2' id='an2' />
        <input onChange={(e) => setSal(e.target.value)} type="text" className="form-control mt-3" placeholder='salary' name='n3' id='an3' />
        <input onChange={(e) => setExp(e.target.value)} type="text" className="form-control mt-3" placeholder='experience' name='n4' id='an4' />

        <button onClick={(e) => addEmployee(e)} className='btn btn-primary p-2 w-25 mt-4 text-center'>Add</button>
      </form>
    </div>
  )
}

export default Add