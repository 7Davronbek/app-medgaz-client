import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Headerbox from '../components/Headerbox'
import Services from '../components/Services'
import Servis from '../components/Servis'
import About from '../components/About'
import Clients from '../components/Clients'
import Works from '../components/Works'
import Loader from '../components/Loader'
import Bot from '../components/Bot'

const Main = ({setModal}) => {

    const [loader, setloader] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setloader(false)
        }, 2000);
    })

    return (
        <>

            {loader ? <><Loader /></> : <>
            </>
            }
            <Header setModal={setModal} />
            <Headerbox />
            <Services />
            <Servis />
            <About />
            <Clients />
            <Works />
        </>
    )
}

export default Main