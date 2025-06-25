import { Route, Routes } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import MainPage from '../pages/Main'
import AnaliticsPage from '../pages/Analitics'
import SignInPage from '../pages/SignIn'
import SignUpPage from '../pages/SignUp'
import CalendarMobile from '../pages/CalendarMobile'

function AppRoutes() {
    return (
        <Routes>
            <Route element={<PrivateRoute />}>
                <Route path="/" element={<MainPage />}>
                    {/* Outlet */}
                </Route>

                <Route path="/analytics" element={<AnaliticsPage />}>
                    {/* Outlet */}
                </Route>
                <Route path="/calendar" element={<CalendarMobile />} />
            </Route>

            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
    )
}

export default AppRoutes
