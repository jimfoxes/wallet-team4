import './App.css'
import AnaliticsTracker from './components/Analitics/AnaliticsTracker'
import { Header } from './components/Header/Header'
import Calendar from './components/calendar/calendar'

function App() {
    return (
        <>
            <Header />
            <Calendar />
            <AnaliticsTracker />
        </>
    )
}

export default App
