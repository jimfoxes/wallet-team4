import { useContext, useState } from 'react'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

import SvgComponent from '../SvgComponent'

import { addTransaction } from '../../services/transactionsHandler'

import {
    LS_USER,
    categoriesEng,
    categoriesRu,
    categoryDefiner,
} from '../../services/utilities'

import { TransactionsContext } from '../../сontext/TransactionsContext'

import * as S from './Costsform.styled'

function Costsform() {
    const token = JSON.parse(localStorage.getItem(LS_USER)).token

    const { setTransactionsList, setLoading } = useContext(TransactionsContext)

    const [newTransactionInfo, setNewTransactionInfo] = useState({})

    const [errors, setErrors] = useState({
        description: false,
        sum: false,
        category: false,
        date: false,
    })

    const [error, setError] = useState('')

    function transactionInfoChange(event, number) {
        event.stopPropagation()
        event.preventDefault()

        const { name, value } = event.target
        if (number) {
            setNewTransactionInfo({
                ...newTransactionInfo,
                [name]: Number(value),
            })
        } else {
            setNewTransactionInfo({ ...newTransactionInfo, [name]: value })
        }

        setErrors({
            ...errors,
            [name]: false,
        })

        setError('')
    }

    function newTransactionErrors() {
        let isCorrect = true

        if (newTransactionInfo.description.trim().length < 4) {
            errors.description = true
            setError('Заполните обязательное поле, минимум 4 символа')
            isCorrect = false
            return isCorrect
        }

        if (!newTransactionInfo.sum) {
            errors.sum = true
            setError('Укажите положительное число')
            isCorrect = false
            return isCorrect
        }

        if (!newTransactionInfo.category.trim()) {
            errors.category = true
            setError('Выберите категорию')
            isCorrect = false
            return isCorrect
        }

        if (!newTransactionInfo.date) {
            errors.date = true
            setError('Пожалуйста, выберите дату')
            isCorrect = false
            return isCorrect
        }

        setErrors(errors)
        return isCorrect
    }

    const [activeCategory, setActiveCategory] = useState('')

    function setNewTransactionCategory(event) {
        event.stopPropagation()
        event.preventDefault()

        const selectedCategory = event.currentTarget.getAttribute('name')

        setActiveCategory(selectedCategory)

        setNewTransactionInfo({
            ...newTransactionInfo,
            category: selectedCategory,
        })
    }

    const [showCalendar, setShowCalendar] = useState(false)

    function showCalendarToggle() {
        setShowCalendar(!showCalendar)
    }

    // Закомментировал добавление даты, пока не заработает функционал выбора даты из календаря

    const [transactionDate, setTransactionDate] = useState('')

    const newTransactionDateSelect = (newSelected) => {
        setShowCalendar(!showCalendar)
        if (newSelected) {
            setTransactionDate(newSelected)
            setNewTransactionInfo({
                ...newTransactionInfo,
                date: newSelected.toJSON(),
            })
        }
    }

    function addNewTransaction(event) {
        event.stopPropagation()
        event.preventDefault()

        if (newTransactionErrors()) {
            addTransaction(newTransactionInfo, token).then((response) => {
                setTransactionsList(response.data.transactions)
                setActiveCategory('')
                setTransactionDate('')

                setNewTransactionInfo({
                    description: '',
                    sum: '',
                    category: '',
                    date: '',
                })

                // {
                //     const inputs = document.querySelectorAll('input')
                //     inputs.forEach((el) => {
                //         el.value = ''
                //     })
                // }

                setLoading(false)
            })
        }
    }

    return (
        <>
            <S.TitleCostsform>Новый расход</S.TitleCostsform>
            <S.Costsform>
                <S.CategoryContainer>
                    <S.TitleCategory>Описание</S.TitleCategory>
                    {errors.description ? <p>{error}</p> : ''}
                    <S.DescriptionInput
                        name="description"
                        placeholder="Введите описание"
                        type="text"
                        value={newTransactionInfo.description || ''}
                        onChange={(event) => {
                            transactionInfoChange(event, false)
                        }}
                    />
                </S.CategoryContainer>

                <S.CategoryContainer>
                    <S.TitleCategory>Категория</S.TitleCategory>
                    {errors.category ? <p>{error}</p> : ''}

                    <S.CategoriesWrapper>
                        {categoriesEng.map((el, index) => {
                            return (
                                <S.Category
                                    key={index}
                                    $filter={newTransactionInfo.category === el}
                                    name={el}
                                    onClick={setNewTransactionCategory}
                                >
                                    <SvgComponent
                                        content={el}
                                        isActive={categoryDefiner(
                                            activeCategory
                                        )?.toLowerCase()}
                                    ></SvgComponent>
                                    <span>{categoriesRu[index]}</span>
                                </S.Category>
                            )
                        })}
                    </S.CategoriesWrapper>
                </S.CategoryContainer>

                <S.CategoryContainer>
                    <S.TitleCategory>Дата</S.TitleCategory>
                    {errors.date ? <p>{error}</p> : ''}
                    <S.DescriptionInput
                        name="date"
                        placeholder="Введите дату"
                        type="text"
                        onClick={showCalendarToggle}
                        value={
                            transactionDate
                                ? format(transactionDate, 'dd.MM.yyyy')
                                : ''
                        }
                        readOnly
                    />

                    {showCalendar && (
                        <S.CalendarWrapper>
                            <DayPicker
                                mode="single"
                                selected={transactionDate || undefined}
                                onSelect={newTransactionDateSelect}
                                disabled={{ after: new Date() }}
                                locale={ru}
                            />
                        </S.CalendarWrapper>
                    )}
                </S.CategoryContainer>

                <S.CategoryContainer>
                    <S.TitleCategory>Сумма</S.TitleCategory>
                    {errors.sum ? <p>{error}</p> : ''}
                    <S.DescriptionInput
                        name="sum"
                        placeholder="Введите сумму"
                        type="text"
                        value={newTransactionInfo.sum || ''}
                        onChange={(event) => {
                            transactionInfoChange(event, true)
                        }}
                    />
                </S.CategoryContainer>

                <S.CostsformButton
                    onClick={(event) => {
                        setLoading(true)
                        addNewTransaction(event)
                    }}
                >
                    Добавить новый расход
                </S.CostsformButton>
            </S.Costsform>
        </>
    )
}

export default Costsform
