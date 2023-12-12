import React from 'react';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import './Index.css';
const Index = () => {
  return (
    <div >
       <Navbar expand="lg" bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home" className='col-md-1 ms-5' >Fusion</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="col-md-5 mx-auto">
            <Nav.Link href="#home">Products</Nav.Link>
            <Nav.Link href="#features">Business</Nav.Link>
            <Nav.Link href="#pricing">Why Fusion</Nav.Link>
            <Nav.Link href="#Integrations">Integrations</Nav.Link>
            <Nav.Link href="#Resources">Resource</Nav.Link>
          </Nav>
          <Stack direction="horizontal" gap={3}>
          <Button variant="outline-success" style={{borderRadius:'30px',width:'100px'}} >Demo</Button>
          <Form className="d-flex ">
            <Button variant="success" style={{borderRadius:'30px' ,width:'100px'}} >Free trail</Button>
          </Form>
          </Stack>

           </Navbar.Collapse>  
        </Container>
      </Navbar>
                          {/* Body Content ----------------- */}

      <Container className='BodyContainer' fluid >
      <Row>
        <Col md={{ span: 4, offset: 2 }} className='mt-4' >
          <h3 className="align-items-center">Step into the world <span style={{color:'#03ff28'}}> of limitless <br/> selling with Fusion </span></h3> 
          <Col className='mt-5'>
          <NavLink to='/'  >
          <h5>Food & Beverage <FontAwesomeIcon icon={faArrowRight} /> </h5>
          <p>Tools that connect the front of house with back of house and <br/> integrate everything that you need to run your restaurant into one <br/> dashboard</p> 
          <Button variant="success" style={{borderRadius:'30px' ,width:'100px'}} >Free trail</Button>
        </NavLink>
        </Col>
        <Col className='mt-3'>
          <NavLink to='/Image2' href="#Retail">
          <h5>Retailright <FontAwesomeIcon icon={faArrowRight} /></h5>
          <p>Tools that connect the front of house with back of house and <br/> integrate everything that you need to run your restaurant into one <br/> dashboard</p> 
          <Button variant="success" style={{borderRadius:'30px' ,width:'100px'}} >Free trail</Button>
        </NavLink>
        </Col>
        <Col className='mt-3'>
          <NavLink to='/Image3' href="#Services">
          <h5>Services & Othersright <FontAwesomeIcon icon={faArrowRight} /></h5>
          <p>Tools that connect the front of house with back of house and <br/> integrate everything that you need to run your restaurant into one <br/> dashboard</p> 
          <Button variant="success" style={{borderRadius:'30px' ,width:'100px'}} >Free trail</Button>
        </NavLink>
        </Col>
        </Col>
      </Row>

    </Container>
    </div>
  );
}

export default Index;
