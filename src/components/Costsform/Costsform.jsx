import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
    const { setMobileHeaderNav } = useContext(TransactionsContext)

    const token = JSON.parse(localStorage.getItem(LS_USER)).token

    const {
        transactionsList,
        setTransactionsList,
        transactionId,
        setTransactionId,
        setLoading,
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

    const navigate = useNavigate()

    return (
        <>
            <S.MobileBackToMain
                onClick={(event) => {
                    event.stopPropagation()
                    event.preventDefault()
                    setMobileHeaderNav('Мои расходы')
                    navigate('/')
                }}
            >
                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9.44425 1.16669H4.55591C2.43258 1.16669 1.16675 2.43252 1.16675 4.55585V9.43835C1.16675 11.5675 2.43258 12.8334 4.55591 12.8334H9.43841C11.5617 12.8334 12.8276 11.5675 12.8276 9.44419V4.55585C12.8334 2.43252 11.5676 1.16669 9.44425 1.16669ZM10.5001 7.43752H4.55591L6.31175 9.19335C6.48091 9.36252 6.48091 9.64252 6.31175 9.81169C6.22425 9.89919 6.11341 9.94002 6.00258 9.94002C5.89175 9.94002 5.78091 9.89919 5.69341 9.81169L3.19091 7.30919C3.10925 7.22752 3.06258 7.11669 3.06258 7.00002C3.06258 6.88335 3.10925 6.77252 3.19091 6.69085L5.69341 4.18835C5.86258 4.01919 6.14258 4.01919 6.31175 4.18835C6.48091 4.35752 6.48091 4.63752 6.31175 4.80669L4.55591 6.56252H10.5001C10.7392 6.56252 10.9376 6.76085 10.9376 7.00002C10.9376 7.23919 10.7392 7.43752 10.5001 7.43752Z"
                        fill="#999999"
                    />
                </svg>
                <p>Мои расходы</p>
            </S.MobileBackToMain>

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
