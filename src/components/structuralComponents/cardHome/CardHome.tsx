import React from 'react'

const CardHome = () => {
  return (
    <div className="flex ... ">
      <div className='w-1/2   m-2 border-gray-700 border bottom-2 rounded-lg'>
        <div className='flex justify-center m-2'>
          <h4 className='text-2xl'>Title 1</h4>
        </div>

        <div className='flex justify-center'>

          <div className='w-1/2 p-2'>

            <img src="https://i.imgur.com/XEmzYbb.png" alt="" />

          </div>
          <div className='w-1/2 p-4 flex items-center'>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga consequatur ad incidunt vero accusamus aperiam dicta, voluptatibus ex soluta cumque sequi nisi .</p>
          </div>


        </div>

      </div>


      <div className='w-1/2   m-2 border-gray-700 border bottom-2 rounded-lg'>
        <div className='flex justify-center m-2'>
          <h4 className='text-2xl'>Title 2</h4>
        </div>

        <div className='flex justify-center'>

          <div className='w-1/2 p-2'>

            <img src="https://i.imgur.com/XEmzYbb.png" alt="" />

          </div>
          <div className='w-1/2 p-4 flex items-center'>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga consequatur ad incidunt vero accusamus aperiam dicta, voluptatibus ex soluta cumque sequi nisi .</p>
          </div>


        </div>

      </div>

      

    </div>

  )
}

export default CardHome