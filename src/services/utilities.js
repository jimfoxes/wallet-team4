export const LS_USER = 'localUser'

export const categories = [
    { food: 'Еда' },
    { transport: 'Транспорт' },
    { housing: 'Жилье' },
    { joy: 'Развлечения' },
    { education: 'Образование' },
    { others: 'Другое' },
]

export function categoryDefiner(category) {
    switch (category) {
        case 'food':
            return 'Еда'
        case 'transport':
            return 'Транспорт'
        case 'housing':
            return 'Жилье'
        case 'joy':
            return 'Развлечения'
        case 'education':
            return 'Образование'
        case 'others':
            return 'Другое'
        default:
            break
    }
}

export function categorySetter(category) {
    switch (category) {
        case 'Еда':
            return 'food'
        case 'Транспорт':
            return 'transport'
        case 'Жилье':
            return 'housing'
        case 'Развлечения':
            return 'joy'
        case 'Образование':
            return 'education'
        case 'Другое':
            return 'others'
        default:
            break
    }
}

export function correctDate(dataString = new Date()) {
    const newDateObject = new Date(dataString)

    const dateOptions = {
        // hour: "numeric",
        // minute: "numeric",
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
    }

    const correctedDate = newDateObject.toLocaleDateString('ru-RU', dateOptions)

    return correctedDate
}

export function formErrors(
    dataObject,
    errorsObject,
    errorsFunction,
    errorFunction,
    isSignUp
) {
    let isCorrect = true

    if (isSignUp && !dataObject.name.trim()) {
        errorsObject.name = true
        errorsObject.button = true
        errorFunction('Заполните обязательные поля')
        isCorrect = false
    }

    if (!dataObject.login.trim()) {
        errorsObject.login = true
        errorsObject.button = true
        errorFunction('Заполните обязательные поля')
        isCorrect = false
    }

    if (!dataObject.password.trim()) {
        errorsObject.password = true
        errorsObject.button = true
        errorFunction('Заполните обязательные поля')
        isCorrect = false
    }

    errorsFunction(errorsObject)
    return isCorrect
}

export function columnsHeightDefiner(dataTransactions) {
    const categoriesAmount = { totalSum: 0, maxHeight: 329 }

    const amountByCategories = dataTransactions.map((transaction) => {
        categoriesAmount.totalSum += transaction.sum

        if (transaction.category in categoriesAmount) {
            categoriesAmount[transaction.category] += transaction.sum
        } else {
            categoriesAmount[transaction.category] = transaction.sum
        }
    })

    return categoriesAmount
}

export function sumFormat(str) {
    const length = str.length
    const chars = str.split('')

    const strWithSpaces = chars.reduceRight((acc, char, index) => {
        const spaceOrNothing = (length - index) % 3 === 0 ? ' ' : ''
        return spaceOrNothing + char + acc
    }, '')

    return strWithSpaces[0] === ' ' ? strWithSpaces.slice(1) : strWithSpaces
}
