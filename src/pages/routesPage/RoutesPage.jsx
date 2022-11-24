import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllGame from '../../components/elements/AllGame'
import Base from '../../components/Layout/Base'
import Home from '../../pages/Home'
import PageNotFound from '../../pages/PageNotFound'

const RoutesPage = () => {
    return (
        <>
            <BrowserRouter>
                <Base>
                    <Routes >
                        <Route index path='/' element={<Home />} />
                        <Route path='/allgame' element={<AllGame />} />
                        <Route path='/*' element={<PageNotFound />} />
                    </Routes>
                </Base>
            </BrowserRouter>
        </>
    )
}

export default RoutesPage