import React from 'react'

const StudentArea = () => {
  return (
    <div className="grid grid-cols-12 my-4 ">
      <div className="md:col-span-3  sm:col-span-full p-2 flex justify-center">
        <div className='w-10/12    border-gray-800 border bottom-3 rounded-lg'>
          <div className='flex justify-center'>
            <div className='w-7/12 my-4'>
              <img src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png" alt="" />
            </div>
          </div>

          <div className='p-3'>
            <h1 className='text-2xl py-1'>Nome</h1>
            <h1 className='text-2xl py-1'>Graduação</h1>
            <div className='flex justify-start'>
              <h1 className='text-2xl py-1 mr-1'>Altura</h1>
              <h1 className='text-2xl py-1 ml-1'>Peso</h1>
            </div>
            <h1 className='text-2xl py-1'>RG</h1>
            <h1 className='text-2xl py-1'>CPF</h1>
            <h1 className='text-2xl py-1'>Idade</h1>

          </div>

        </div>
      </div>
      <div className="md:col-span-9 sm:col-span-full p-2 flex justify-center">

        <table className='w-10/12   border-gray-800 border bottom-3 rounded-lg'>
          <thead className='border-gray-800 border  p-3'>
            <tr className='border-gray-800 border p-3'>
              <th className='text-3xl border-gray-800 border  p-3 text-center'>Data</th>
              <th className='text-3xl border-gray-800 border p-3 text-center'>Aula</th>
              <th className='text-3xl border-gray-800 border p-3 text-center'>Status</th>
            </tr>
          </thead>

          <tbody className='border-gray-800 border p-3'>
            <tr className='border-gray-800 border p-3'>
              <td className='border-gray-800 border p-3'>Douglas</td>
              <td className='border-gray-800 border p-3'>Toledo</td>
              <td className='border-gray-800 border p-3'>29</td>
            </tr>
            <tr>
              <td className='border-gray-800 border p-3'>Lorem</td>
              <td className='border-gray-800 border p-3'>Ipsum</td>
              <td className='border-gray-800 border p-3'>35</td>
            </tr>
            <tr className='border-gray-800 border p-3'>
              <td className='border-gray-800 border p-3'>Douglas</td>
              <td className='border-gray-800 border p-3'>Toledo</td>
              <td className='border-gray-800 border p-3'>29</td>
            </tr>
            <tr className='border-gray-800 border p-3'>
              <td className='border-gray-800 border p-3'>Douglas</td>
              <td className='border-gray-800 border p-3'>Toledo</td>
              <td className='border-gray-800 border p-3'>29</td>
            </tr>
            <tr className='border-gray-800 border p-3'>
              <td className='border-gray-800 border p-3'>Douglas</td>
              <td className='border-gray-800 border p-3'>Toledo</td>
              <td className='border-gray-800 border p-3'>29</td>
            </tr>
            <tr className='border-gray-800 border p-3'>
              <td className='border-gray-800 border p-3'>Douglas</td>
              <td className='border-gray-800 border p-3'>Toledo</td>
              <td className='border-gray-800 border p-3'>29</td>
            </tr>
            <tr className='border-gray-800 border p-3'>
              <td className='border-gray-800 border p-3'>Douglas</td>
              <td className='border-gray-800 border p-3'>Toledo</td>
              <td className='border-gray-800 border p-3'>29</td>
            </tr>
             <tr className='border-gray-800 border p-3'>
              <td className='border-gray-800 border p-3'>Douglas</td>
              <td className='border-gray-800 border p-3'>Toledo</td>
              <td className='border-gray-800 border p-3'>29</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default StudentArea