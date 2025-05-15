import React from 'react'
import AnaliticsHeader from './AnaliticsHeader'
import AnaliticsCategory from './AnaliticsCategory'
import * as S from './Analitics.styled'

const AnaliticsTracker = ({ transactions }) => {
    const AnaliticsCategories = [
        {
            id: 1,
            amount: 3590,
            height: '328px',
            color: 'rgba(217, 182, 255, 1)',
            category: 'Еда',
        },
        {
            id: 2,
            amount: 1835,
            height: '169px',
            color: 'rgba(255, 181, 61, 1)',
            category: 'Транспорт',
        },
        {
            id: 3,
            amount: '',
            height: '4px',
            color: 'rgba(110, 228, 254, 1)',
            category: 'Жилье',
        },
        {
            id: 4,
            amount: 1250,
            height: '109px',
            color: 'rgba(176, 174, 255, 1)',
            category: 'Развлечения',
        },
        {
            id: 5,
            amount: 600,
            height: '65px',
            color: 'rgba(188, 236, 48, 1)',
            category: 'Образование',
        },
        {
            id: 6,
            amount: 2306,
            height: '212px',
            color: 'rgba(255, 185, 184, 1)',
            category: 'Другое',
        },
    ]

    return (
        <S.TrackerCard>
            <AnaliticsHeader totalAmount="9 581 ₽" date="10 июля 2024" />
            <S.AnaliticsCategoriesContainer>
                {AnaliticsCategories.map((category) => (
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
