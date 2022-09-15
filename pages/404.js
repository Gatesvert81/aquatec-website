import Head from 'next/head'
import React from 'react'
import Page from '../src/AnimatedComponents/Page'
import AnchorLink from '../src/Components/AnchorLink'
import Button from '../src/Components/Button'

function NotFound() {
    return (
        <Page>
            <Head>
                <title>Aquatec | 404</title>
                <meta name="description" content="Url Page not available" />
                <link rel="icon" href="/icons/logo.png" />
            </Head>
            <main className='h-50vh flex flex-col text-center justify-center items-center gap-5' >
                <h2>
                    Guess You are Lost
                </h2>
                <AnchorLink route="/">
                    <Button style="primary-btn" >
                        Go to Homepage
                    </Button>
                </AnchorLink>
            </main>
        </Page>
    )
}

export default NotFound