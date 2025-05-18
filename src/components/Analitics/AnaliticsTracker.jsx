import React from 'react'
import AnaliticsHeader from './AnaliticsHeader'
import AnaliticsCategory from './AnaliticsCategory'

import {
    categorySetter,
    columnsHeightDefiner,
    sumFormat,
} from '../../services/utilities'

import * as S from './Analitics.styled'

const AnaliticsTracker = () => {
    const dataTransactions = [
        {
            _id: '67e52357be69db1bb99a1b74',
            userId: '6421860c32e0301869fb3301',
            description: 'new Description',
            category: 'food',
            date: '2025-12-13T00:00:00.000Z',
            sum: 3500,
        },
        {
            _id: '67e52409be69db1bb99a1b75',
            userId: '6421860c32e0301869fb3301',
            description: 'test',
            category: 'housing',
            date: '2025-04-02T00:00:00.000Z',
            sum: 121,
        },
        {
            _id: '67e5240bbe69db1bb99a1b76',
            userId: '6421860c32e0301869fb3301',
            description: 'test',
            category: 'housing',
            date: '2025-04-02T00:00:00.000Z',
            sum: 1211,
        },
        {
            _id: '67e5240dbe69db1bb99a1b77',
            userId: '6421860c32e0301869fb3301',
            description: 'test',
            category: 'housing',
            date: '2025-04-02T00:00:00.000Z',
            sum: 12121,
        },
        {
            _id: '67e52414be69db1bb99a1b78',
            userId: '6421860c32e0301869fb3301',
            description: 'test',
            category: 'housing',
            date: '2025-05-02T00:00:00.000Z',
            sum: 21,
        },
        {
            _id: '67e52418be69db1bb99a1b79',
            userId: '6421860c32e0301869fb3301',
            description: 'test',
            category: 'housing',
            date: '2025-05-02T00:00:00.000Z',
            sum: 212,
        },
        {
            _id: '67e5241abe69db1bb99a1b7a',
            userId: '6421860c32e0301869fb3301',
            description: 'test',
            category: 'housing',
            date: '2025-05-02T00:00:00.000Z',
            sum: 2123,
        },
        {
            _id: '6814152b2fcc8a7eec0d0c47',
            userId: '6421860c32e0301869fb3301',
            description: 'cost',
            category: 'food',
            date: '2025-05-03T00:00:00.000Z',
            sum: 123,
        },
        {
            _id: '681415822fcc8a7eec0d0c48',
            userId: '6421860c32e0301869fb3301',
            description: 'testteset',
            category: 'food',
            date: '2025-05-03T00:00:00.000Z',
            sum: 123123,
        },
        {
            _id: '6814160a2fcc8a7eec0d0c49',
            userId: '6421860c32e0301869fb3301',
            description: 'tsettset',
            category: 'education',
            date: '2025-05-03T00:00:00.000Z',
            sum: 123,
        },
        {
            _id: '681419952fcc8a7eec0d0c4a',
            userId: '6421860c32e0301869fb3301',
            description: 'tes3',
            category: 'joy',
            date: '2025-05-03T00:00:00.000Z',
            sum: 1,
        },
        {
            _id: '68141a292fcc8a7eec0d0c4b',
            userId: '6421860c32e0301869fb3301',
            description: 'тест4',
            category: 'education',
            date: '2025-05-03T00:00:00.000Z',
            sum: 123,
        },
        {
            _id: '68141c8a2fcc8a7eec0d0c4c',
            userId: '6421860c32e0301869fb3301',
            description: 'asd123',
            category: 'education',
            date: '2025-05-03T00:00:00.000Z',
            sum: 1234,
        },
        {
            _id: '6814d600cce37be4ddd518da',
            userId: '6421860c32e0301869fb3301',
            description: '12345',
            category: 'food',
            date: '2025-05-16T00:00:00.000Z',
            sum: 561,
        },
        {
            _id: '6814d6a2cce37be4ddd518dc',
            userId: '6421860c32e0301869fb3301',
            description: '1234566',
            category: 'food',
            date: '2025-05-03T00:00:00.000Z',
            sum: 1050,
        },
        {
            _id: '6814d6b0cce37be4ddd518dd',
            userId: '6421860c32e0301869fb3301',
            description: '12345',
            category: 'food',
            date: '2025-05-03T00:00:00.000Z',
            sum: 10500,
        },
        {
            _id: '681c6b78e8eb068d26124cb4',
            userId: '6421860c32e0301869fb3301',
            description: 'Курс по Web разработке в SkyPro',
            category: 'education',
            date: '2025-01-12T00:00:00.000Z',
            sum: 35000,
        },
        {
            _id: '681c6c89e8eb068d26124cb5',
            userId: '6421860c32e0301869fb3301',
            description: 'Покупка сумки',
            category: 'others',
            date: '2025-03-09T00:00:00.000Z',
            sum: 30000,
        },
        {
            _id: '681c6cc0e8eb068d26124cb6',
            userId: '6421860c32e0301869fb3301',
            description: 'билет на поезд',
            category: 'transport',
            date: '2025-03-21T00:00:00.000Z',
            sum: 15000,
        },
        // {
        //     _id: '6824b182f3bc14320fe98a89',
        //     userId: '6421860c32e0301869fb3301',
        //     description: 'Покупка машины',
        //     category: 'joy',
        //     date: '2025-05-14T00:00:00.000Z',
        //     sum: 1500000,
        // },
        {
            _id: '682552eef3bc14320fe98aa6',
            userId: '6421860c32e0301869fb3301',
            description: 'Покупка меча',
            category: 'joy',
            date: '2025-05-16T00:00:00.000Z',
            sum: 750,
        },
        {
            _id: '68257db8f3bc14320fe98aaa',
            userId: '6421860c32e0301869fb3301',
            description: '12345',
            category: 'food',
            date: '2025-05-15T00:00:00.000Z',
            sum: 1050,
        },
        {
            _id: '6825a025f3bc14320fe98ab1',
            userId: '6421860c32e0301869fb3301',
            description: 'Покупка дыни',
            category: 'food',
            date: '2025-05-16T00:00:00.000Z',
            sum: 950,
        },
        {
            _id: '68264ca0e059747e12141227',
            userId: '6421860c32e0301869fb3301',
            description: 'upd1',
            category: 'housing',
            date: '2025-05-15T00:00:00.000Z',
            sum: 123,
        },
        {
            _id: '68264cc2e059747e12141228',
            userId: '6421860c32e0301869fb3301',
            description: 'upd2',
            category: 'education',
            date: '2025-05-15T00:00:00.000Z',
            sum: 123,
        },
        {
            _id: '6826a465e059747e1214122d',
            userId: '6421860c32e0301869fb3301',
            description: 'Покупка здоровой еды',
            category: 'food',
            date: '2025-05-16T00:00:00.000Z',
            sum: 2950,
        },
    ]

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

    return (
        <S.TrackerCard>
            <AnaliticsHeader
                totalAmount={
                    sumFormat(
                        columnsHeightDefiner(
                            dataTransactions
                        ).totalSum.toString()
                    ) + ' ₽'
                }
                date="10 июля 2024"
            />
            <S.AnaliticsCategoriesContainer>
                {columnsDataDefiner(dataTransactions).map((category) => (
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
