import Main from '../components/Main/Main'
import { Header } from '../components/Header/Header'

import { Outlet } from 'react-router-dom'

function MainPage() {
    return (
        <>
            <Header />
            <Main />
            <Outlet />
        </>
    )
}

export default MainPage
