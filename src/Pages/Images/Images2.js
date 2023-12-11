import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


const Images2 = () => {
  return (
    <div>
      <Container >
      <Row className='Row'>
      <Col md={{ span: 5, offset: 6 }} sm={8} >
      <Image className='Image1M' src={require('../../images/retailright-img-1.png')}  rounded />
         </Col>
   </Row>

         <Row className='mt-3'>
         <Col  md={{ span: 3, offset: 6 }}   >
         <Image src={require('../../images/retailright-img-2.png')} style={{height:'220px', width:'300px'}} rounded />
         </Col>

         <Col  md={{ span: 3, offset: 4 }} className='ms-0'>
         <Image src={require('../../images/retailright-img-3.png')} style={{height:'220px', width:'300px'}} rounded />
         </Col>
         </Row>
    </Container>
    </div>
  );
}

export default Images2;
