import React, { useState } from 'react'
import './assets/css/Login.css'
import { Container, Card, Button, Form, Row, Col,  } from 'react-bootstrap';
import logo from './assets/img/logo-ss.png';
import axios from 'axios';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
let URL = require('../config.json');

export let token = '';
const Login = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const [params, setParams] = useState({
        hidden : 'hidden',
        textBtn : 'Request OTP',
        phoneNumber : '',
        otpNumber : '',
        textFeedBack : '',
        feedbackType : 'invalid',
        isDisabled : false,
        colorText : ''
    })

    const handleChange = (event) =>{
        let name = event.target.name;
        let value = event.target.value;
        setParams({...params, [name] : value, isDisabled : false, textFeedBack : ''})
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        let phoneNumber = params.phoneNumber;
        let otp = params.otpNumber;
        if (params.otpNumber) {
            let urlLogin = `${URL.host}/wa/login-by-otp`;
            let login = await axios.post(urlLogin, {phoneNumber, otp});
            token= login.data.data;
            window.localStorage.setItem("token", token);
            const origin = location.state?.from?.pathname || '/home';
            navigate(origin);
        }else{
            let url = `${URL.host}/wa/request-otp`;
            let reqOtp = await axios.post(url, {phoneNumber} );
            if (reqOtp.data.status =="error") {
                setParams({...params, textFeedBack : reqOtp.data.message+'!', feedbackType : 'text', isDisabled : true, colorText : 'text-danger'})
                return false;
            }else{
                setParams({...params, hidden : 'text', textBtn : 'Log in', textFeedBack : reqOtp.data.status +'! silahkan masukan otp', feedbackType : 'text', colorText : 'text-success'})
            }
        }
    }
  return (
    <div className='wrapp'>
        <Container>
            <Row>
                <Card className='card-custom'>
                    <Row>
                        <Col className='col col-md-6'>
                            <img src={''} className='img-logo' />
                        </Col>
                        <Col className='col col-md-6'>
                            <h2 className='form-title'>Account Login</h2>
                        <div className='wrapp-form'>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Control type='text' name='phoneNumber' id='form-custom' placeholder='Phone Number' onChange={handleChange} onKeyPress={(event) => {
                                                    if (!/[0-9]/.test(event.key)) {
                                                        event.preventDefault();
                                                    }
                                                }} required={true}/>
                                    <Form.Control.Feedback className={params.colorText} type={params.feedbackType} >
                                        {params.textFeedBack}
                                    </Form.Control.Feedback>
                                    <Form.Control type={params.hidden} name='otpNumber' id='form-custom' className='form-otp' placeholder='OTP Number' onChange={handleChange} required={true}/>
                                </Form.Group>
                                <button type='submit' className='btn-custom' disabled={params.isDisabled}>{params.textBtn}</button>
                            </Form>
                        </div>
                        </Col>
                    </Row>
                </Card>
            </Row>
        </Container>
    </div>
  )
}

export default Login