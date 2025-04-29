import AppRoutes from './components/AppRoutes'
import { AuthProvider } from './сontext/AuthProvider'

function App() {
    return (
        <AuthProvider>
            <AppRoutes />
        </AuthProvider>
    )
}

export default App
