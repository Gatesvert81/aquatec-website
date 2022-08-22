import React from 'react'

function StoreCard({ children }) {
    return (
        <div className='w-60 h-60 bg-blue-300 rounded-full overflow-hidden' >
            <div className='w-full h-full flex flex-col justify-center items-center bg-dark-blue/50 -rotate-12' >
                <h3>
                    {children}
                </h3>
            </div>
        </div>
    )
}

export default StoreCard