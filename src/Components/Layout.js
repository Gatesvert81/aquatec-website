import React from 'react'
import Context from './Context'
import Footer from './Footer'
import Navigation from './Navigation'

function Layout({ children }) {
    return (
        <>
            <Context>
                <Navigation />
                {children}
                <Footer />
            </Context>
        </>
    )
}

export default Layout