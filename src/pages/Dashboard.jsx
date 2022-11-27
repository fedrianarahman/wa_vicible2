import React from 'react'
import MainPanel from '../hooks/MainPanel';
import "./assets/css/Dashboard.css";
import { Container, Row } from 'react-bootstrap';
import Featured from './DashboardComponent/Featured';
import WaMenu from './DashboardComponent/WaMenu';
import QrCode from './DashboardComponent/QrCode';
import RegisterUser from './DashboardComponent/RegisterUser';
import Outbox from './DashboardComponent/Outbox';
const Dashboard = () => {

  return (
    <MainPanel>
      <Container>
        <Row>
          <div className='col col-md-3'>
            <Featured />
            <div className='mt-4'>
              <WaMenu />
            </div>
            <div className='mt-4'>
              <QrCode />
            </div>
          </div>
          <div className='col col-md-9'>
            <RegisterUser />
            <div className='outbox'>
              <Outbox />
            </div>
          </div>
        </Row>
      </Container>
    </MainPanel>
  )
}

export default Dashboard