import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LuShoppingCart } from 'react-icons/lu';
import { IoIosMenu } from "react-icons/io";
function Testing() {
  return (
    <div className="bg-[#eb5757] py-3">

    <Navbar expand="lg" className="mainWidth">
      <Container fluid className='!text-white'>
        <Navbar.Brand href="#"><img src="5e7ff57adad44d1f072965b6_logo.svg" alt="" /></Navbar.Brand>
        <Navbar.Toggle  className='border-0 !text-white'/>
        <Navbar.Collapse >
          <Nav
            className="absolute right-0 navnav"
            style={{ maxHeight: '100vh' }}
            navbarScrol
            >
            <Nav.Link href="#action1" className='text-white mr-7 py-2 cursor-pointer px-3 rounded hover:!bg-black transition-all duration-300'>Home</Nav.Link>
            <Nav.Link href="#action2" className='text-white mr-7 py-2 cursor-pointer px-3 rounded hover:!bg-black transition-all duration-300'>About</Nav.Link>
            <Nav.Link href="#action2" className='text-white mr-7 py-2 cursor-pointer px-3 rounded hover:!bg-black transition-all duration-300'>Shop</Nav.Link>
            <Nav.Link href="#action2" className='text-white mr-7 py-2 cursor-pointer px-3 rounded hover:!bg-black transition-all duration-300'>Donate</Nav.Link>
            <Nav.Link href="#action2" className='text-white mr-7 py-2 cursor-pointer px-3 rounded hover:!bg-black transition-all duration-300'>Contact</Nav.Link>
            <div className="relative flex items-center">
               <span className="text-2xl py-2 px-3 rounded-sm bg-black ">
                            <LuShoppingCart />
               </span>
               <span className='flex items-center justify-center rounded-full w-5 h-5 absolute -top-2 left-11 bg-white text-black font-semibold'>
                            0
               </span>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
              </div>
  )
}

export default Testing