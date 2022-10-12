import Image from 'next/image'
import React from 'react'

function FooterLogo () {
    

    return (
        <div className=' md:w-80 flex justify-center items-center cursor-pointer mix-blend-lighten' >
            <div className='w-10 h-12 md:w-16 md:h-24 relative' >
                <Image src="/icons/logo.png" alt="Aquatec logo" layout="fill" className="object-contain" />
            </div>
            <div className="text-white" >
                <h5 >
                    Aquatec
                </h5>
                <h5 >
                    Services limited
                </h5>
            </div>
        </div>
    )
}

export default FooterLogo