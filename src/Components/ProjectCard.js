import React from 'react'

function ProjectCard({ children }) {
    return (
        <div className='w-full h-30vh bg-blue-400 relative overflow-hidden ' >
            Image
            <div className='flex flex-col gap-2 bg-white/70 absolute -bottom-24 hover:bottom-0 px-2 hover:ease-in-out ' >
                <h5 className='flex md:justify-between justify-start gap-5' >
                    <span className='text-light-gray' >
                        01
                    </span>
                    <span>
                        Movinpic Hotel
                    </span>
                    <span className='hidden md:flex'>
                        Accra, Ghana
                    </span>
                    <span className='hidden md:flex'>
                        2005
                    </span>
                </h5>
                <p>
                    {children}
                </p>
            </div>
        </div>
    )
}

export default ProjectCard