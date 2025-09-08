import { Route, Routes } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import MainPage from '../pages/Main'
import AnaliticsPage from '../pages/Analitics'
import SignInPage from '../pages/SignIn'
import SignUpPage from '../pages/SignUp'
import MobileCalendarPage from '../pages/CalendarMobile'
import MobileCostsformPage from '../pages/Costsform'

function AppRoutes() {
    return (
        <Routes>
            <Route element={<PrivateRoute />}>
                <Route path="/" element={<MainPage />}></Route>

                <Route path="/analytics" element={<AnaliticsPage />}></Route>

                <Route path="/calendar" element={<MobileCalendarPage />} />
                <Route
                    path="/mobileCostsform/:id?"
                    element={<MobileCostsformPage />}
                ></Route>
            </Route>

            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
    )
}

export default AppRoutes
