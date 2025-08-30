import React from 'react'
import Form from 'react-bootstrap/Form';

function ContactForm() {
  return (
    <div className='flex justify-center items-center py-20'>
    <div className='flex mainWidth justify-between '>
      <div className="formCon flex flex-col gap-3">
        <div className="con">
          <h3>Contact Us</h3>
          <div className="paras">
            <p>Acme Outdoors</p>
            <p>123 Rainy Street</p>
            <p>Oklahoma City, OK 73129</p>
          </div>
        </div>

        <div className="numbers flex flex-col">
          <strong>General Inquiries: <span className='font-medium'>(405) 555-5555</span></strong>
          <strong>Customer Support: <span className='font-medium'>(405) 555-5556</span></strong>
        </div>
      </div>
        <Form className='w-[70%]'>
          <h3>Contact Form</h3>
          <p>Send us a message and we'll get back to you as soon as we can!</p>

          <Form.Group className="mb-3" >
            <Form.Label>Name</Form.Label>
            <Form.Control className='border-black' type="text" placeholder="John Doe" />
          </Form.Group>

          <Form.Group className="mb-3 ">
            <Form.Label>Email address</Form.Label>
            <Form.Control className='border-black' type="email" placeholder="name@example.com" />
          </Form.Group>

          <Form.Group className="mb-3 " >
            <Form.Label>Your Message</Form.Label>
            <Form.Control className='border-black' as="textarea" rows={3} />
          </Form.Group>

          <button className='border-1 bg-[#eb5757] py-2 px-4 hover:bg-black transition-all duration-[.3s] font-medium  !rounded-lg text-white '>Submit</button>
        </Form>
    </div>
    </div>
  )
}

export default ContactForm;
 