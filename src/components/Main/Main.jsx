import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import FilterSortingPopUp from '../PopUps/FilterSortingPopUp/FilterSortingPopUp'
import TransactionElement from '../TransactionElement/TransactionElement'
import Costsform from '../Costsform/Costsform'
import Loading from '../Loading/Loading'

import {
    getTransactions,
    getFilteredTransactions,
    deleteTransaction,
} from '../../services/transactionsHandler'

import { LS_USER, categorySetter } from '../../services/utilities'

import { TransactionsContext } from '../../сontext/TransactionsContext'

import * as S from './Main.styled'

function Main() {
    const token = JSON.parse(localStorage.getItem(LS_USER)).token
    const {
        transactionsList,
        setTransactionsList,
        setMobileHeaderNav,
        loading,
        setLoading,
        setTransactionId,
    } = useContext(TransactionsContext)
    const [selectedTransaction, setSelectedTransaction] = useState(null)
    const navigate = useNavigate()

    const handleRowClick = (transaction) => {
        if (window.innerWidth <= 1200) {
            setSelectedTransaction(
                transaction._id === selectedTransaction ? null : transaction._id
            )
        }
    }

    const handleEditClick = () => {
        setMobileHeaderNav('Редактирование')
        setTransactionId(selectedTransaction)
        navigate(`/mobileCostsform/${selectedTransaction}`)
    }

    const handleDeleteClick = async () => {
        try {
            const response = await deleteTransaction(selectedTransaction, token)
            if (response.name === 'AxiosError') {
                console.log('error')
            } else {
                setTransactionsList(response.data.transactions)
                setSelectedTransaction(null) // Сбрасываем выбор после удаления
            }
        } catch (error) {
            console.error('Ошибка при удалении:', error)
        }
    }

    const getTransactionsList = () => {
        setLoading(true)
        getTransactions(token)
            .then((response) => {
                if (response.name === 'AxiosError') {
                    //   setError(response.response.data.error);
                    console.log('error')
                } else {
                    setTransactionsList(response.data)
                }
            })
            .catch((err) => {
                // setError(err.response.data.error);
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        getTransactionsList()
    }, [])

    function getFilteredTransactionsList() {
        setLoading(true)

        console.log(filter)

        getFilteredTransactions({
            token,
            filterAndSortParams,
        })
            .then((response) => {
                if (response.name === 'AxiosError') {
                    //   setError(response.response.data.error);
                    console.log('error')
                } else {
                    setTransactionsList(response.data)
                }
            })
            .catch((err) => {
                // setError(err.response.data.error);
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const [filter, setFilter] = useState([])
    const [filterPopUp, setfilterPopUp] = useState(false)

    const [sorting, setSorting] = useState('')
    const [sortingPopUp, setsortingPopUp] = useState(false)

    const [filterAndSortParams, setFilterAndSortParams] = useState({
        filterBy: '',
        sortBy: '',
    })

    function filtersSetter(event) {
        event.stopPropagation()
        event.preventDefault()

        const selectedFilter = event.currentTarget.children[1].textContent

        if (selectedFilter === filter.toString()) {
            setFilter([])

            setFilterAndSortParams({
                ...filterAndSortParams,
                filterBy: '',
            })

            return
        }

        if (filter.toString().includes(selectedFilter)) {
            setFilter(filter.filter((el) => el !== selectedFilter))

            const urlFilter = filter.reduce((newArray, el) => {
                if (el !== selectedFilter) {
                    newArray.push(categorySetter(el))
                }

                return newArray
            }, [])

            setFilterAndSortParams({
                ...filterAndSortParams,
                filterBy: urlFilter.join(),
            })

            return
        } else {
            filter.push(selectedFilter)

            const urlFilter = filter.map((el) => categorySetter(el)).join()

            setFilterAndSortParams({
                ...filterAndSortParams,
                filterBy: urlFilter,
            })

            return
        }
    }

    function sortingSetter(event) {
        event.stopPropagation()
        event.preventDefault()

        const selectedFilter =
            event.currentTarget.children[0].textContent === 'Дате'
                ? 'date'
                : 'sum'

        if (
            event.currentTarget.children[0].textContent.toLowerCase() ===
            sorting
        ) {
            setSorting('')
            setFilterAndSortParams({
                ...filterAndSortParams,
                sortBy: '',
            })

            return
        }

        setSorting(event.currentTarget.children[0].textContent.toLowerCase())

        setFilterAndSortParams({
            ...filterAndSortParams,
            sortBy: selectedFilter,
        })
    }

    return (
        <>
            {filterPopUp || sortingPopUp ? (
                <S.OverlayWrapper
                    onClick={() => {
                        setfilterPopUp(false)
                        setsortingPopUp(false)

                        getFilteredTransactionsList()
                    }}
                />
            ) : (
                ''
            )}
            <S.Title>Мои расходы</S.Title>

            <S.MobileTitleWrapper>
                <S.MobileTitle>Мои расходы</S.MobileTitle>

                <S.MobileNewTransaction
                    onClick={(event) => {
                        event.stopPropagation()
                        event.preventDefault()
                        setMobileHeaderNav('Новый расход')
                        navigate('/mobileCostsform')
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
                            d="M6.99984 1.16669C3.78567 1.16669 1.1665 3.78585 1.1665 7.00002C1.1665 10.2142 3.78567 12.8334 6.99984 12.8334C10.214 12.8334 12.8332 10.2142 12.8332 7.00002C12.8332 3.78585 10.214 1.16669 6.99984 1.16669ZM9.33317 7.43752H7.43734V9.33335C7.43734 9.57252 7.239 9.77085 6.99984 9.77085C6.76067 9.77085 6.56234 9.57252 6.56234 9.33335V7.43752H4.6665C4.42734 7.43752 4.229 7.23919 4.229 7.00002C4.229 6.76085 4.42734 6.56252 4.6665 6.56252H6.56234V4.66669C6.56234 4.42752 6.76067 4.22919 6.99984 4.22919C7.239 4.22919 7.43734 4.42752 7.43734 4.66669V6.56252H9.33317C9.57234 6.56252 9.77067 6.76085 9.77067 7.00002C9.77067 7.23919 9.57234 7.43752 9.33317 7.43752Z"
                            fill="black"
                        />
                    </svg>

                    <p>Новый расход</p>
                </S.MobileNewTransaction>
            </S.MobileTitleWrapper>

            <S.Container>
                <S.CostsTable $blockScroll={filterPopUp || sortingPopUp}>
                    <S.FixedHeaderContainer>
                        <S.HeaderCostsTable>
                            <S.TitleCostsTable>
                                Таблица расходов
                            </S.TitleCostsTable>
                            <S.FilterSortingContainer>
                                <S.FilterSortingElement
                                    $isCategory={true}
                                    onClick={() => {
                                        setfilterPopUp(!filterPopUp)
                                    }}
                                >
                                    <a>
                                        Фильтровать по категории{' '}
                                        <span>{filter.join(', ')}</span>
                                    </a>
                                    <svg
                                        width="7"
                                        height="6"
                                        viewBox="0 0 7 6"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.5 5.5L0.468911 0.25L6.53109 0.25L3.5 5.5Z"
                                            fill="black"
                                        />
                                    </svg>
                                    {filterPopUp ? (
                                        <FilterSortingPopUp
                                            isCategory={true}
                                            filter={filter}
                                            filtersSetter={filtersSetter}
                                        />
                                    ) : (
                                        ''
                                    )}
                                </S.FilterSortingElement>

                                <S.FilterSortingElement
                                    $isCategory={false}
                                    onClick={() => {
                                        setsortingPopUp(!sortingPopUp)
                                    }}
                                >
                                    <a>
                                        Сортировать по <span>{sorting}</span>
                                    </a>
                                    <svg
                                        width="7"
                                        height="6"
                                        viewBox="0 0 7 6"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.5 5.5L0.468911 0.25L6.53109 0.25L3.5 5.5Z"
                                            fill="black"
                                        />
                                    </svg>
                                    {sortingPopUp ? (
                                        <FilterSortingPopUp
                                            isCategory={false}
                                            sorting={sorting}
                                            sortingSetter={sortingSetter}
                                        />
                                    ) : (
                                        ''
                                    )}
                                </S.FilterSortingElement>
                            </S.FilterSortingContainer>
                        </S.HeaderCostsTable>
                        <S.ColumnsContainer>
                            <S.ColumnsElement>Описание</S.ColumnsElement>
                            <S.ColumnsElement>Категория</S.ColumnsElement>
                            <S.ColumnsElement $mobileRight={true}>
                                Дата
                            </S.ColumnsElement>
                            <S.ColumnsElement $mobileRight={true}>
                                Сумма
                            </S.ColumnsElement>
                            <S.ColumnsShadowElement></S.ColumnsShadowElement>
                        </S.ColumnsContainer>
                    </S.FixedHeaderContainer>
                    {/* <S.DemarcationLine></S.DemarcationLine> */}

                    {filterPopUp || sortingPopUp ? (
                        <S.BlurWrapper></S.BlurWrapper>
                    ) : (
                        ''
                    )}

                    <S.TransactionsContainer>
                        {loading ? (
                            <Loading />
                        ) : (
                            transactionsList.map((el, index) => {
                                return (
                                    <TransactionElement
                                        key={index}
                                        transaction={el}
                                        isSelected={
                                            el._id === selectedTransaction
                                        }
                                        onRowClick={handleRowClick}
                                    />
                                )
                            })
                        )}
                    </S.TransactionsContainer>

                    {selectedTransaction && window.innerWidth <= 1200 && (
                        <S.MobileActionButtons>
                            <S.MobileEditButton onClick={handleEditClick}>
                                Редактировать расход
                            </S.MobileEditButton>
                            <S.MobileDeleteButton onClick={handleDeleteClick}>
                                Удалить расход
                            </S.MobileDeleteButton>
                        </S.MobileActionButtons>
                    )}
                </S.CostsTable>

                <S.Costsform>
                    <Costsform />
                </S.Costsform>
            </S.Container>
        </>
    )
}

export default Main
