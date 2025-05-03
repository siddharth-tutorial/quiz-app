import React from 'react'
import Header from './Header'
import { Button, Card, Container } from 'react-bootstrap'
import { Link } from 'react-router'

function Home() {
  return (
    <div>
      <Header/>
      <Container className='d-flex justify-content-center align-items-center' style={{minHeight:'80vh'}}>
        <Card className='p-5 text-center shadow' style={{maxWidth:'500px',width:'100%'}}>
            <Card.Body>
                <Card.Title className='mb-4 fs-3'>Web Dev Quiz Challenge</Card.Title>
                <Card.Text className='mb-4'>
                Ready to test your knowledge of HTML, CSS, JavaScript, Git, and more?
                </Card.Text>
                <Button as={Link} to='/quiz' variant='primary' size='lg'>Start Quiz</Button>
            </Card.Body>
        </Card>

      </Container>
    </div>
  )
}

export default Home
