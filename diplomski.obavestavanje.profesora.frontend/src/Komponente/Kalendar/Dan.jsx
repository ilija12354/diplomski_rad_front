import React from 'react'

export default function Dan({dan,indexReda}) {
  return (
    <div className='border border-gray-200 flex flex-col'>
     <header className='flex flex-col items-center'>
      {indexReda === 0 && (
       <p className='text-sm mt-1'>{dan.format("ddd").toUpperCase()}</p>
      )}
     
     <p className='text-sm p-1 my-1 '>{dan.format('DD')}</p>
     </header>
    </div>
  )
}
