import AnaliticsTracker from '../Analitics/AnaliticsTracker'
import { Title } from '../Title/Title'
import Calendar from '../calendar/calendar'
import * as S from './Main.styled'

export const Main = () => {
    const title = 'Анализ расходов!'

    return (
        <S.main>
            <div className="container">
                <Title title={title} />
                <S.mainContent>
                    <Calendar />
                    <AnaliticsTracker />
                </S.mainContent>
            </div>
        </S.main>
    )
}
