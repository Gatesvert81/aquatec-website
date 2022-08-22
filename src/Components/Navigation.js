import { AnimatePresence } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'
import AnchorLink from './AnchorLink'
import Button from './Button'
import { NavContext } from './Context'

function Navigation() {

    const [sideNav, setSideNav] = useState(false)
    const [show, handleShow] = useState(false)

    const [page, setPage] = useContext(NavContext)

    useEffect(() => {
        const myFunc = () => {
            if (window.scrollY > 10) {
                handleShow(true);
            } else handleShow(false);
        }
        window.addEventListener("scroll", myFunc)
        return () => {
            window.removeEventListener("scroll", myFunc)
        }
    }, [])

    const handleNav = (pageName) => {
        setPage(pageName)
        setSideNav(!sideNav)
    }

    return (
        <>
            <nav className={`w-full h-16 fixed top-0 left-0 z-30 flex justify-between items-center px-10 py-2 border-b-2 border-light-white transition ease-in-out ${show ? "bg-dark-blue/80 backdrop-blur-md" : "transparent"} ${sideNav ? "bg-dark-blue/80 backdrop-blur-md" : "transparent"} `} >
                <div className='hidden md:flex justify-start items-center gap-10' >
                    <AnchorLink route="/about">
                        <Button
                            style={`side-nav-btn ${page === 'about' ? "page" : null} `}
                            click={() => setPage('about')}
                        >
                            About
                        </Button>
                    </AnchorLink>
                    <AnchorLink route="/projects">
                        <Button
                            style={`side-nav-btn ${page === 'projects' ? "page" : null} `}
                            click={() => setPage('projects')}
                        >
                            Projects
                        </Button>
                    </AnchorLink>
                </div>
                <div>
                    <AnchorLink route="/">
                        logo
                    </AnchorLink>
                </div>
                <div className='hidden md:flex justify-start items-center gap-10'>
                    <AnchorLink route="/store">
                        <Button
                            style={`side-nav-btn ${page === 'store' ? "page" : null} `}
                            click={() => setPage('store')}
                        >
                            Store
                        </Button>
                    </AnchorLink>
                    <AnchorLink route="/contact">
                        <Button
                            style={`side-nav-btn ${page === 'contact' ? "page" : null} `}
                            click={() => setPage('contact')}
                        >
                            Contact
                        </Button>
                    </AnchorLink>
                </div>
                <div
                    className='md:hidden flex'
                    onClick={() => setSideNav(!sideNav)}
                >
                    Hamburger
                </div>
            </nav>
            <AnimatePresence>
                {
                    sideNav && (
                        <nav className='w-full md:hidden h-full fixed top-16 left-0 z-30 bg-dark-blue/80 backdrop-blur-md flex flex-col gap-10 justify-center items-center ' >
                            <AnchorLink route="/">
                                <Button
                                    style={`side-nav-btn ${page === 'home' ? "page" : null} `}
                                    click={() => handleNav('home')}
                                >
                                    Home
                                </Button>
                            </AnchorLink>
                            <AnchorLink route="/about">
                                <Button
                                    style={`side-nav-btn ${page === 'about' ? "page" : null} `}
                                    click={() => handleNav('about')}
                                >
                                    About
                                </Button>
                            </AnchorLink>
                            <AnchorLink route="/store">
                                <Button
                                    style={`side-nav-btn ${page === 'store' ? "page" : null} `}
                                    click={() => handleNav('store')}
                                >
                                    Store
                                </Button>
                            </AnchorLink>
                            <AnchorLink route="/projects">
                                <Button
                                    style={`side-nav-btn ${page === 'projects' ? "page" : null} `}
                                    click={() => handleNav('projects')}
                                >
                                    Projects
                                </Button>
                            </AnchorLink>
                            <AnchorLink route="/contact">
                                <Button
                                    style={`side-nav-btn ${page === 'contact' ? "page" : null} `}
                                    click={() => handleNav('contact')}
                                >
                                    Contact
                                </Button>
                            </AnchorLink>
                        </nav>
                    )
                }
            </AnimatePresence>
        </>
    )
}

export default Navigation