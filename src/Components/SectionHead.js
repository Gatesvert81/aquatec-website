import React from 'react'

function SectionHead({ children }) {
    return (
        <div className='w-full flex justify-start items-center gap-5' >
            <div className='w-6 h-5 bg-dark-blue' />
            <h3>
                {children}
            </h3>
        </div>
    )
}

export default SectionHead