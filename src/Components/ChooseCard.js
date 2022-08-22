import React from 'react'

function ChooseCard({ number, title, children }) {
    return (
        <div className='w-full h-fit grid grid-cols-1 gap-2' >
            <h4 className='w-full flex justify-start gap-5' >
                <span className='text-light-gray' >
                    {number}
                </span>
                {title}
            </h4>
            <p>
                {children}
            </p>
        </div>
    )
}

export default ChooseCard