import React, { useState } from 'react'

const CardContent = () => {
  const [cardItens, setCardItens] = useState([
    {title: 'Card 1', imgsrc: 'https://i.imgur.com/XEmzYbb.png'},
    {title: 'Card 2', imgsrc: 'https://i.imgur.com/XEmzYbb.png'},
    {title: 'Card 3', imgsrc: 'https://i.imgur.com/XEmzYbb.png'},
    {title: 'Card 4', imgsrc: 'https://i.imgur.com/XEmzYbb.png'},
    {title: 'Card 5', imgsrc: 'https://i.imgur.com/XEmzYbb.png'},
    {title: 'Card 6', imgsrc: 'https://i.imgur.com/XEmzYbb.png'},
  ])
  return (
    <>
      <div className='flex justify-center flex-wrap w-100'>

        {
          cardItens.map((item, index) => {

            return(
              <div className='lg:w-1/4 lg:h-1/4 p-2 m-2 border-gray-800 border bottom-3 rounded-lg'>
              <div className='flex justify-center'>
                <h4 className='text-2xl'>{item.title}</h4>
              </div>
    
              <div className='flex justify-center'>
                <img src={item.imgsrc} alt="" />
    
              </div>
    
            </div>  
            )

          })
        }

      </div>
    </>
  )
}

export default CardContent