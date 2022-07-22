import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
  return (
    <>
      <div className='flex justify-center items-center h-screen  w-full '>

        <div className='md:w-1/4 sm:w-full  border-gray-800 border bottom-3 rounded-lg px-4 py-10'>

          <div className='my-1 flex justify-center'>

            <h1 className='text-3xl'>Login</h1>
          </div>
          <div className='flex justify-center  '>

            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <button type="submit" className='bg-blue-600 hover:bg-blue-500 active:bg-blue-200 focus:outline-none focus:ring focus:ring-blue-300 px-3 py-1 rounded-2xl text-white ...'>Log In</button>

            </Form>

          </div>

        </div>

      </div>
    </>
  )
}

export default Login