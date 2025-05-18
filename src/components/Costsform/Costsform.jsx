import { useContext, useEffect, useState } from 'react'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

import SvgComponent from '../SvgComponent'

import {
    addTransaction,
    updateTransaction,
} from '../../services/transactionsHandler'

import { LS_USER, categories } from '../../services/utilities'

import { TransactionsContext } from '../../сontext/TransactionsContext'

import * as S from './Costsform.styled'

function Costsform() {
    const token = JSON.parse(localStorage.getItem(LS_USER)).token

    const {
        setTransactionsList,
        setLoading,
        transactionId,
        setTransactionId,
        transactionsList,
    } = useContext(TransactionsContext)

    const [isEditing, setIsEditing] = useState(false)

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
            const dateStr = format(newSelected, 'yyyy-MM-dd')
            setNewTransactionInfo({
                ...newTransactionInfo,
                date: dateStr,
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
        } else {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (transactionId) {
            const transactionToEdit = transactionsList.find(
                (t) => t._id === transactionId
            )
            if (transactionToEdit) {
                setIsEditing(true)
                setNewTransactionInfo({
                    description: transactionToEdit.description,
                    sum: transactionToEdit.sum,
                    category: transactionToEdit.category,
                    date: transactionToEdit.date,
                })
                setTransactionDate(new Date(transactionToEdit.date))
                setActiveCategory(transactionToEdit.category)
            }
        } else {
            setIsEditing(false)
            setNewTransactionInfo({
                description: '',
                sum: '',
                category: '',
                date: '',
            })
            setTransactionDate('')
            setActiveCategory('')
        }
    }, [transactionId, transactionsList])

    function saveEditedTransaction(event) {
        event.stopPropagation()
        event.preventDefault()
        console.log(newTransactionInfo.date)
        if (newTransactionErrors()) {
            updateTransaction(transactionId, newTransactionInfo, token).then(
                (response) => {
                    setTransactionsList(response.data.transactions)
                    setTransactionId('')
                    setIsEditing(false)
                    setLoading(false)
                }
            )
        }
    }

    return (
        <>
            <S.TitleCostsform>
                {isEditing ? 'Редактирование' : 'Новый расход'}
            </S.TitleCostsform>
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
                        {categories.map((el, index) => {
                            return (
                                <S.Category
                                    key={index}

                                    $filter={
                                        newTransactionInfo.category ===
                                        Object.keys(el).toString()
                                    }
                                    name={Object.keys(el)}
                                    onClick={(event) => {
                                        setNewTransactionCategory(event)
                                    }}

                                >
                                    <SvgComponent
                                        content={Object.keys(el)}
                                        isActive={
                                            activeCategory ===
                                            Object.keys(el).toString()
                                        }
                                    ></SvgComponent>
                                    <span>{Object.values(el)}</span>
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
                                modifiers={{ utc: true }}
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
                        if (isEditing) {
                            saveEditedTransaction(event)
                        } else {
                            addNewTransaction(event)
                        }
                    }}
                >
                    {isEditing
                        ? 'Сохранить редактирование'
                        : 'Добавить новый расход'}
                </S.CostsformButton>
            </S.Costsform>
        </>
    )
}

export default Costsform
