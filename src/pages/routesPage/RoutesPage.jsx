import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllGame from '../../components/elements/AllGame'
import GameDetail from '../../components/elements/GameDetail'
import Marketplace from '../../components/elements/Marketplace'
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
                        <Route path='/gamedetail' element={<GameDetail />} />
                        <Route path='/marketplace' element={<Marketplace />} />
                        <Route path='/*' element={<PageNotFound />} />
                    </Routes>
                </Base>
            </BrowserRouter>
        </>
    )
}

export default RoutesPage