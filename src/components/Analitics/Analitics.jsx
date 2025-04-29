import AnaliticsTracker from './AnaliticsTracker'
import { Title } from '../Title/Title'
import Calendar from '../calendar/calendar'
import * as S from './Analitics.styled'

const Analitics = () => {
    const title = 'Анализ расходов'

    return (
        <S.analiticsMain>
            <div className="container">
                <Title title={title} />
                <S.analiticsContent>
                    <Calendar />
                    <AnaliticsTracker />
                </S.analiticsContent>
            </div>
        </S.analiticsMain>
    )
}

export default Analitics
