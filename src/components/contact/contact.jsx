import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Form from './form';
import './contact.css';
import Social from '../../assets/images/social.png';


const Contact = () => {
  return <section id="contact">
      <Container>
          <Row>
              <Col lg='12' className='mb-5'>
                <h2>Get In Touch</h2>
              </Col>

              <Col lg='6' md='6'>
                  <div className="contact__info-container  d-flex align-items-center gap-5">
                      <div className="single__info-box w-50">
                          <h6>Social Media</h6>
                          <p>Youtube: @ceyonnasmith</p>
                          <p>Instagram: @ceyonnasmith</p>
                      </div>
                      <div className="single__info-box w-50 ">
                          <h6>Phone</h6>
                          <p>+1-619-872-3038</p>
                      </div>
                  </div>
                    <div className="contact__info-container d-flex align-items-center gap-5">
                        <div className="single__info-box w-50">
                        <h6>Email</h6>
                        <a href = "mailto:support@etheware.com?subject = Support&body = My Message">
                            Send Feedback
                        </a>
                      </div>
                      <div className="single__info-box w-50">
                          <h6>Location</h6>
                          <p>San Diego, California</p>
                      </div>
                    </div>
                    <div className="contact__info-container d-flex align-items-center gap-5">
                        <div className="single__info-box w-100">
                          <img src={Social} alt="etheware" className="contact__img w-100"loading="lazy"/>
                      </div>
                    </div>
              </Col>
              <Col lg='6' md='6'>
                  <Form />
              </Col>
          </Row>
      </Container>
  </section>
  
}

export default Contact