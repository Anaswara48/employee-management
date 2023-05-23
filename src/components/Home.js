import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Col, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Home() {

    const [employees, setEmployees] = useState([])
    // api call
    const fetchEmployees = async () => {
        const result = await axios.get('http://localhost:8000/getAllEmployee')
        setEmployees(result.data.message);
    }

    // api-delete
    const deleteEmployee = async (id) => {
        const result = await axios.delete('http://localhost:8000/deleteEmployee/' + id)
        alert(result.data.message)
        fetchEmployees()

    }

    


    console.log(employees);
    useEffect(() => {
        fetchEmployees()

    }, [])

    return (

        <div className='p-3'>
            <Row>
                <Col lg={4} className='ms-3'>
                    <div className='w-100 mt-4 p-3  text-center container  text-dark'>
                        <h1 className='text-center p-3'>Employee Management App</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Porro aperiam deserunt voluptatem numquam! Non sed dolores
                            soluta in quae eius asperiores necessitatibus officia blanditiis.
                            A necessitatibus adipisci magniquos corruption.</p>

                        <Link to={'/add'}>
                            <Button variant="warning" className='fs-5 text-light' style={{ borderRadius: '10px' }}>
                                <i class="fa-solid fa-user-plus"></i>
                                Add New Employee
                            </Button>
                        </Link>
                    </div>
                </Col>
                <Col lg={6}>
                    <Col xs={6} md={4}>
                        <Image style={{ height: '400px', marginLeft: '265px', borderRadius: '203px' }} className='p-3' src="ems.png" />
                    </Col>

                </Col>
            </Row>

            <div className='container-fluid mt-4 bg-secondary'>
                <h1 className='text-center'>List of Employees</h1>
                <Table striped bordered hover variant="secondary">
                    <thead>
                        <tr className='text-warning'>

                            <th>#</th>
                            <th>Id</th>
                            <th> Name</th>
                            <th>Designation</th>
                            <th>Salary</th>
                            <th>Experience</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody className='fs-3'>
                        {
                            employees?.map((employee, index) => (

                                <tr>
                                    <td>{index}</td>
                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.designation}</td>
                                    <td>{employee.salary}</td>
                                    <td>{employee.experience}</td>

                                    <td className='text-center'>
                                        <ButtonGroup size="lg" className='p-2 ms-3 text-light' >
                                            <Link to={`edit/${employee.id}`}>
                                                <Button variant='success' className='text-light ' style={{ borderRadius: '187px' }}>
                                                    <i class="fa-solid fa-user-pen"></i>edit
                                                </Button>
                                            </Link>


                                            <Link to={`view/${employee.id}`}>
                                                <Button variant='primary' style={{ borderRadius: '187px' }}>
                                                    <i class="fa-solid fa-address-card"></i>view
                                                </Button>
                                            </Link>


                                            <Link to={`delete/${employee.id}`}>
                                                <Button onClick={()=>deleteEmployee(employee.id)} variant='danger' style={{ borderRadius: '187px' }}>
                                                    <i class="fa-sharp fa-solid fa-trash"></i>delete
                                                </Button>
                                            </Link>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                                // <tr>
                                //     <td>2</td>
                                //     <td>Jacob</td>
                                //     <td>tester</td>
                                //     <td>45000</td>
                                //     <td>3</td>
                                //     <td></td>
                                //     <td>
                                //     <ButtonGroup size="lg" className='p-2 ms-3 text-light'  >
                                //             <Button variant='success' className='text-light' style={{borderRadius:'187px'}}>
                                //                 <i class="fa-solid fa-user-pen"></i>edit
                                //             </Button>
                                //             <Button variant='primary'  style={{borderRadius:'187px'}}>
                                //               <i class="fa-solid fa-address-card"></i>view
                                //             </Button>
                                //             <Button variant='danger' style={{borderRadius:'187px'}}>
                                //                 <i class="fa-sharp fa-solid fa-trash"></i>delete
                                //             </Button>
                                //         </ButtonGroup>
                                //     </td>
                                // </tr>
                            ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Home