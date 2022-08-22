import React from 'react'

function ReviewCard({ title, children, name, position }) {
    return (
        <div className='w-full h-fit rounded-md ' >
            <h3>
                {title}
            </h3>
            <p>
                {children}
            </p>
            <div className='flex flex-col justify-start gap-2' >
                <h6 className='flex flex-col justify-start'>
                    {name}
                    <span className='text-light-gray' >
                        {position}
                    </span>
                </h6>
            </div>
        </div>
    )
}

export default ReviewCard