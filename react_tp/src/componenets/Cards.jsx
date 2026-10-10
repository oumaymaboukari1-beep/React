import React from 'react'

const Cards = ({product,price}) => {
  return (
   <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src="/src/assets/react.svg" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{product} : {price}</div>

  </div>
</div>
  )
}

export default Cards