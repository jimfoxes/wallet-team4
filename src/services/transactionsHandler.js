import axios from 'axios'

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
    console.log(filterAndSortParams)

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

    console.log(filteredUrl)

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
