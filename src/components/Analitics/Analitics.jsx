import AnaliticsTracker from './AnaliticsTracker'
import Calendar from '../Calendar/Calendar'
import * as S from './Analitics.styled'

const Analitics = () => {
    return (
        <S.analiticsMain>
            <S.Title>Анализ расходов</S.Title>
            <S.analiticsContent>
                <Calendar />
                <AnaliticsTracker />
            </S.analiticsContent>
        </S.analiticsMain>
    )
}

export default Analitics
