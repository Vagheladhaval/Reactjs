import React from 'react'
import Navbar from './Navbar'
import { Container,Row,Button } from 'react-bootstrap'
export default function Gallery() {
  return (
    <div>

<Navbar />

<Container className='w-75 shadow p-5 mt-5'>
<Row>
    <div className='col-md-5'>
        <img src='https://media.giphy.com/media/kMM3vtBEgSsLu/giphy.gif' alt='photo' className='img-fluid' />
    </div>
    <div className='col-md-7'>
        <h1>Gallery Page</h1>
        <p>welcome to Our Gallery Page</p>
        <Button className='btn text-white bg-primery w-50 '>Click me!</Button>
    </div>

</Row>
</Container>

    </div>
  )
}
