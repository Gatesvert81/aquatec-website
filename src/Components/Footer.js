import React from 'react'
import Button from './Button'

function Footer() {
    return (
        <footer className='w-full h-fit bg-dark-blue flex flex-col gap-3 justify-center items-center p-10' >
            <div>
                logo
            </div>
            <div className='w-full flex justify-center gap-2' >
                <Button>
                    Home
                </Button>
                <Button>
                    About
                </Button>
                <Button>
                    Store
                </Button>
                <Button>
                    Projects
                </Button>
                <Button>
                    Contact
                </Button>
            </div>
            <div>
                <div className='text-center capitalize' >
                    <h6 className='capitalize font-medium' >
                        Abelemkpe, Ghana
                    </h6>
                    <h6 className='capitalize font-medium'>
                        94, swaniker street GA-092-9410
                    </h6>
                    <h6 className='capitalize font-medium'>
                        (+233) 302 768 760
                    </h6>
                    <h6 className='lowercase font-medium'>
                        info@aquatecghana.com
                    </h6>
                </div>
                <div>
                    Icons
                </div>
            </div>
        </footer>
    )
}

export default Footer