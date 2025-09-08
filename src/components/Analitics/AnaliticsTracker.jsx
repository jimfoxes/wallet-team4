import AnaliticsHeader from './AnaliticsHeader'
import AnaliticsCategory from './AnaliticsCategory'

import {
    categorySetter,
    columnsHeightDefiner,
    sumFormat,
} from '../../services/utilities'

import * as S from './Analitics.styled'

const AnaliticsTracker = ({ analyticsData }) => {
    const AnaliticsCategories = [
        {
            id: 1,
            amount: 0,
            height: '1px',
            color: 'rgba(217, 182, 255, 1)',
            category: 'Еда',
        },
        {
            id: 2,
            amount: 0,
            height: '1px',
            color: 'rgba(255, 181, 61, 1)',
            category: 'Транспорт',
        },
        {
            id: 3,
            amount: 0,
            height: '1px',
            color: 'rgba(110, 228, 254, 1)',
            category: 'Жилье',
        },
        {
            id: 4,
            amount: 0,
            height: '1px',
            color: 'rgba(176, 174, 255, 1)',
            category: 'Развлечения',
        },
        {
            id: 5,
            amount: 0,
            height: '1px',
            color: 'rgba(188, 236, 48, 1)',
            category: 'Образование',
        },
        {
            id: 6,
            amount: 0,
            height: '1px',
            color: 'rgba(255, 185, 184, 1)',
            category: 'Другое',
        },
    ]

    function columnsDataDefiner(dataTransactions) {
        const columnsData = columnsHeightDefiner(dataTransactions)

        const maxAmount = Object.values(columnsData).sort((a, b) => b - a)

        return AnaliticsCategories.map((el) => {
            const currentCategoryEng = categorySetter(el.category)

            if (currentCategoryEng in columnsData) {
                el.amount = columnsData[currentCategoryEng]
                el.height = `${Math.floor(
                    (columnsData[currentCategoryEng] / maxAmount[1]) *
                        columnsData.maxHeight
                )}px`

                return el
            } else {
                return el
            }
        })
    }

    const formatDateRange = () => {
        const savedPeriod = JSON.parse(localStorage.getItem('selectedPeriod'))
        if (savedPeriod?.start && savedPeriod?.end) {
            const start = new Date(savedPeriod.start)
            const end = new Date(savedPeriod.end)

            const formatDate = (date) => {
                return date.toLocaleDateString('ru-RU', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                })
            }

            return `${formatDate(start)} - ${formatDate(end)}`
        }
        return 'период не выбран'
    }

    return (
        <S.TrackerCard>
            <AnaliticsHeader
                totalAmount={
                    sumFormat(
                        columnsHeightDefiner(analyticsData).totalSum.toString()
                    ) + ' ₽'
                }
                date={formatDateRange()}
            />
            <S.AnaliticsCategoriesContainer>
                {columnsDataDefiner(analyticsData).map((category) => (
                    <AnaliticsCategory
                        key={category.id}
                        amount={
                            category.amount
                                ? `${category.amount.toLocaleString('ru-RU')} ₽`
                                : '0 ₽'
                        }
                        barHeight={category.height}
                        barColor={category.color}
                        categoryName={category.category}
                    />
                ))}
            </S.AnaliticsCategoriesContainer>
        </S.TrackerCard>
    )
}

export default AnaliticsTracker
