import React from 'react';
import "./styles/Navigation.css"
import { Navbar,Container, Nav } from "react-bootstrap";
import { AuthContext } from '../hooks/AuthProvider';
const Navigation = () => {
    const {onLogout} = React.useContext(AuthContext);
    const token = React.useContext(AuthContext).getToken();
    return (
        <>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Logo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="#features">WA Blaste</Nav.Link>
            <Nav.Link href="#pricing">Set up</Nav.Link>
          </Nav>
          {token && (
                <button type="button" className="btn-custom1"  onClick={onLogout}>
                    Sign Out
                </button>
            )}
        </Container>
      </Navbar>
      <br></br>
      <br></br>
      <br></br>
        </>
    );
}

export default Navigation;