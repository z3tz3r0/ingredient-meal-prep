import React from 'react'

const Card = ({ categoryName, categoryImage }) => {
    return (
        <div className='flex flex-col justify-between p-4 bg-white rounded-2xl h-52 max-w-3xs'>
            <img src={categoryImage} alt={categoryName} className='shrink-0' />
            <h2 className='text-2xl font-bold'>{categoryName}</h2>
        </div>
    )
}

export default Card