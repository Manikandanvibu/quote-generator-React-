import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>

    <Card style={{textAlign: "center", marginTop: "9rem"}} className='container border'>
      <Card.Body className='mt-5' style={{minWidth: "150px"}}>
        <Card.Subtitle className="mt-5 mb-4 text-muted fs-1 underline">Quote Generator</Card.Subtitle>
        <Card.Text className='fs-3'>
          To Generate Random Quotes Press Below Button
        </Card.Text>
        <Link to={'/Random'}><button type="button" class="btn btn-outline-secondary btn-lg">Start</button></Link>
      </Card.Body>
    </Card>


    </>
  )
}

export default Home