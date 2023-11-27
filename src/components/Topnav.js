import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Topnav = () => {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home"> TseYang </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end p-2">
                    <Nav.Link href="#l">
                        About Me
                    </Nav.Link>
                    <Nav.Link href="#l" className='mx-2'>
                        Works
                    </Nav.Link>
                    <Nav.Link href="#l">
                        Resume
                    </Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Topnav