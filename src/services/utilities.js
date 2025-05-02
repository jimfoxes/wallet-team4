export const LS_USER = 'localUser'

export const categoriesRu = [
    'Еда',
    'Транспорт',
    'Жилье',
    'Развлечения',
    'Образование',
    'Другое',
]

export const categoriesEng = [
    'food',
    'transport',
    'housing',
    'joy',
    'education',
    'others',
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
