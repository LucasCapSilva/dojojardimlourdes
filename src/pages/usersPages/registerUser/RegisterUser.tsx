import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const RegisterUser = () => {
  return (
    <div className='flex justify-center items-center h-screen  w-full'>

      <div className='w-5/6     border-gray-800 border bottom-3 rounded-lg p-4'>

        <div className='my-3'>

          <h1 className='text-3xl'>Cadastro de Usuário</h1>
        </div>

        <div className='flex justify-start'>

          <div className='md:w-3/6 sm:w-full px-1'>


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
          </div>
          <div className='md:w-3/6 sx:w-full px-1'>

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

            <Form.Group className="flex justify-center mb-3" controlId="formBasicCheckbox">
              <button className='bg-green-600 hover:bg-green-500 active:bg-green-200 focus:outline-none focus:ring focus:ring-green-300 px-4 py-2 rounded-xl text-white ...'>Sing up</button>
            </Form.Group>
            <Form.Group className="flex justify-center mb-3" controlId="formBasicCheckbox">
              <button className='bg-blue-600 hover:bg-blue-500 active:bg-blue-200 focus:outline-none focus:ring focus:ring-blue-300 px-3 py-1 rounded-2xl text-white ...'>Log in</button>
            </Form.Group>

          </div>

        </div>

      </div>





    </div>


  )
}

export default RegisterUser