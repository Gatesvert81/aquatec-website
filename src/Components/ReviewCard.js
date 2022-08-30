import React from 'react'

function ReviewCard({ title, children, name }) {
    return (
        <div className='w-80 h-full rounded-lg shrink-0 bg-white p-5 shadow-md ' >
            <h3>
                {title}
            </h3>
            <p>
                {children}
            </p>
            <div className='flex flex-col justify-start gap-2' >
                <h6 className='flex flex-col justify-start'>
                    {name}
                    
                </h6>
            </div>
        </div>
    )
}

export default ReviewCard