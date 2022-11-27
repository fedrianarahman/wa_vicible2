import React, { useState, useEffect } from 'react'
import { Card, Table } from 'react-bootstrap';
import { decodeToken } from 'react-jwt';
import { ApiService } from '../../ApiService';
const Featured = () => {

    const [datas, setDatas] = useState({
        phoneNumber: '',
        nama: '',
        saldo: '',
        statusLogin: ''
    });

    useEffect(() => {

        fetchData();
    }, []);

    const fetchData = async () =>{
        const token = decodeToken(window.localStorage.getItem("token"));
        const response = await ApiService.post(`/wa/get-user-wa`,token);
        setDatas({...datas, phoneNumber : response.data.data.whatsappNumber, nama : response.data.data.nama, saldo : response.data.data.saldoTopup})
    }
    return (
        <Card variant="warning">
            <Card.Header as="h5" className="card-header">Featured</Card.Header>
            <Card.Body>
                {/* <Card.Title>Special title treatment</Card.Title>
         <Card.Text>
         With supporting text below as a natural lead-in to additional content.
         </Card.Text> */}
                <Table size="sm">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>Nomor Wa :</td>
                            <td>{datas.phoneNumber}</td>
                        </tr>
                        <tr>
                            <td>Nama : </td>
                            <td>{datas.nama}</td>
                        </tr>
                        <tr>
                            <td>status : </td>
                            <td><button type="button" className="btn-custom1"  >
                                Cek
                            </button></td>
                        </tr>
                        <tr>
                            <td>saldo : </td>
                            <td><button type="button" className="btn-light"  >
                                {datas.saldo}
                            </button></td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}

export default Featured