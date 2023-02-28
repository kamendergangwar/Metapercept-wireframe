import React from 'react'
import { Navbar ,Nav} from 'react-bootstrap'

function Wireframe() {
  return (
    <div>
        <Navbar bg="light" expands="lg">
            
            <Navbar.Brand href="#">Title</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='ml-auto'>
                    <Nav.Link href="#Home">Home</Nav.Link>
                    <Nav.Link href="#About">About</Nav.Link>
                    <Nav.Link href="#Blog">Blog</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
<div className='d-flex justify-content-center'>
    <div >title
        <h2>Lorem lumsum</h2>
    </div>
    <div>classes</div>
</div>
    </div>
  )
}

export default Wireframe