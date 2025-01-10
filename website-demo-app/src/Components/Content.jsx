import React from 'react'
import { Container,Row,Button } from 'react-bootstrap'

export default function Content() {
  return (
    <div>
        <Container className='w-75 shadow p-5 mt-5'>
        <Row>
            <div className='col-md-5'>
                <img src='https://usagif.com/wp-content/uploads/2021/4fh5wi/welcome-15.gif' alt='photo' className='img-fluid' />
            </div>
            <div className='col-md-7'>
                <h1>Home Page</h1>
                <p>welcome to Our Home Page</p>
           <Button className='btn text-white bg-primery w-50 '>Click me!</Button>
            </div>
           

        </Row>
      </Container>
      
    </div>
  )
}
