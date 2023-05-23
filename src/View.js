import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  ListGroup, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';




function View() {
  const [employee, setEmployee] = useState([])

  const params = useParams()
  // api
  const fetchEmp = async () => {
    const result = await axios.get('http://localhost:8000/getEmployee' + params.id)
    setEmployee(result.data.message);
  }
  console.log(employee);

  useEffect(() => {
    fetchEmp()
  }, [])

  return (
    <div className=' bg-secondary'>
      <Row>
        <div className='text-center'>
          <Image style={{ height: '420px', width: '450px' }} className='p-5' src="https://i.postimg.cc/2yPVgCD4/user2.jpg" roundedCircle />
        </div>

        <div className='text-center' >
          <Card className='text-center w-50 container  mt-2 '>
            <Card.Body>
              <Card.Title><h1>Employee Name : {employee.name}</h1></Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item><h4> Employee Id- {employee.id}</h4></ListGroup.Item>
              <ListGroup.Item><h4> Designation-   {employee.designation}</h4></ListGroup.Item>
              <ListGroup.Item><h4> Salary- {employee.salary}</h4></ListGroup.Item>
            </ListGroup>

          </Card>
        </div>
      </Row>
    </div>
  )
}

export default View