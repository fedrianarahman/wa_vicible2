import React from 'react'
import { Card, Form, Table, Pagination, Row, Button} from 'react-bootstrap';
import { ApiService } from '../../ApiService';
import { useState } from 'react';

const Outbox = () => {
    const [params,setParams] = useState({
        tanggal1 : '',
        tanggal2 : '',
        jenis : '',
        label : '',
        typeFormInput : '',
    })
  return (
    <div>Outbox</div>
  )
}

export default Outbox