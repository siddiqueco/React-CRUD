
import React from "react";
import { Button, Jumbotron,Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <Jumbotron fluid style={{marginTop:'20%'}}>
        <Container className='text-center'>
          <h1>404 Not Found</h1>
          <Link to='/'><Button>Back Home</Button></Link>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default NotFound;
