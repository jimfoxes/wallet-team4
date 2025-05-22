import axios from 'axios'
import { format } from 'date-fns'

const url = 'https://wedev-api.sky.pro/api/transactions'

export async function getTransactions(token) {
    try {
        const data = await axios.get(url, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        })

        return data
    } catch (error) {
        return error
    }
}

export async function deleteTransaction(deletedTransactionId, token) {
    try {
        const data = await axios.delete(url + '/' + deletedTransactionId, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        })

        return data
    } catch (error) {
        return error
    }
}

export async function addTransaction(newTransactionInfo, token) {
    try {
        const data = await axios.post(url, newTransactionInfo, {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': '',
            },
        })

        return data
    } catch (error) {
        return error
    }
}

export async function getFilteredTransactions({ token, filterAndSortParams }) {
    let filteredUrl = url

    if (
        filterAndSortParams.filterBy !== '' &&
        filterAndSortParams.sortBy !== ''
    ) {
        filteredUrl = `${url}?sortBy=${filterAndSortParams.sortBy}&filterBy=${filterAndSortParams.filterBy}`
    } else if (filterAndSortParams.filterBy !== '') {
        filteredUrl = `${url}?filterBy=${filterAndSortParams.filterBy}`
    } else if (filterAndSortParams.sortBy !== '') {
        filteredUrl = `${url}?sortBy=${filterAndSortParams.sortBy}`
    }

    try {
        const data = await axios.get(filteredUrl, {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        })

        return data
    } catch (error) {
        return error
    }
}

export async function updateTransaction(
    transactionId,
    updatedTransactionInfo,
    token
) {
    try {
        const data = await axios.patch(
            url + '/' + transactionId,
            updatedTransactionInfo,
            {
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': '',
                },
            }
        )

        return data
    } catch (error) {
        return error
    }
}

const formatDateForApi = (date) => format(date, 'MM-dd-yyyy')

export const handlePeriodSelect = async ({ start, end, token }) => {
    console.log('FROM:', formatDateForApi(start))
    console.log('TO:', formatDateForApi(end))
    const testUrl = url + '/' + 'period'
    console.log(testUrl)
    const testObject = JSON.stringify({
        start: formatDateForApi(start),
        end: formatDateForApi(end),
    })
    console.log(testObject)
    try {
        const res = await axios.post(
            url + '/' + 'period',
            JSON.stringify({
                start: formatDateForApi(start),
                end: formatDateForApi(end),
            }),
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': '',
                },
            }
        )
        return res
    } catch (err) {
        return err
    }
}
