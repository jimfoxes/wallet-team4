import { useState, useEffect, useContext } from 'react'

import FilterSortingPopUp from '../PopUps/FilterSortingPopUp/FilterSortingPopUp'
import TransactionElement from '../TransactionElement/TransactionElement'
import Costsform from '../Costsform/Costsform'
import Loading from '../Loading/Loading'

import { getTransactions } from '../../services/transactionsHandler'
import { LS_USER } from '../../services/utilities'

import { TransactionsContext } from '../../сontext/TransactionsContext'

import * as S from './Main.styled'

function Main() {
    const token = JSON.parse(localStorage.getItem(LS_USER)).token
    const { transactionsList, setTransactionsList, loading, setLoading } =
        useContext(TransactionsContext)

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

    const [filter, setFilter] = useState('')
    const [filterPopUp, setfilterPopUp] = useState(false)

    const [sorting, setSorting] = useState('')
    const [sortingPopUp, setsortingPopUp] = useState(false)

    return (
        <>
            <S.Title>Мои расходы</S.Title>
            <S.Container>
                <S.CostsTable>
                    <S.HeaderCostsTable>
                        <S.TitleCostsTable>Таблица расходов</S.TitleCostsTable>
                        <S.FilterSortingContainer>
                            <S.FilterSortingElement
                                $isCategory={true}
                                onClick={() => {
                                    setfilterPopUp(!filterPopUp)
                                }}
                            >
                                <a>
                                    Фильтровать по категории{' '}
                                    <span>{filter}</span>
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
                                        setFilter={setFilter}
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
                                        setSorting={setSorting}
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
                        <S.ColumnsElement>Дата</S.ColumnsElement>
                        <S.ColumnsElement>Сумма</S.ColumnsElement>
                        <S.ColumnsShadowElement></S.ColumnsShadowElement>
                    </S.ColumnsContainer>
                    <S.DemarcationLine></S.DemarcationLine>
                    <S.TransactionsContainer>
                        {loading ? (
                            <Loading />
                        ) : (
                            transactionsList.map((el, index) => {
                                return (
                                    <TransactionElement
                                        key={index}
                                        transaction={el}
                                    ></TransactionElement>
                                )
                            })
                        )}
                    </S.TransactionsContainer>
                </S.CostsTable>

                <S.Costsform>
                    <Costsform />
                </S.Costsform>
            </S.Container>
        </>
    )
}

export default Main
