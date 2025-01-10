import React from 'react'
import Navbar from './Navbar'
import { Container,Row,Button } from 'react-bootstrap'
export default function Services() {
  return (
    <div>

<Navbar />

<Container className='w-75 shadow p-5 mt-5'>
<Row>
    <div className='col-md-5'>
        <img src='https://www.icegif.com/wp-content/uploads/2022/08/icegif-811.gif' alt='photo' className='img-fluid' />
    </div>
    <div className='col-md-7'>
        <h1>Services Page</h1>
        <p>welcome to Our Services Page</p>
        <Button className='btn text-white bg-primery w-50 '>Click me!</Button>
    </div>

</Row>
</Container>
    </div>
  )
}
