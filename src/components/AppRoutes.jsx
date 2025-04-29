import { Route, Routes } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import MainPage from '../pages/Main'
import AnaliticsPage from '../pages/Analitics'
import SignInPage from '../pages/SignIn'
import SignUpPage from '../pages/SignUp'

function AppRoutes() {
    return (
        <Routes>
            <Route element={<PrivateRoute />}>
                <Route path="/" element={<MainPage />} />
                <Route path="/analytics" element={<AnaliticsPage />} />
            </Route>

            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
    )
}

export default AppRoutes
