import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { formErrors, LS_USER } from '../../services/utilities'
import { signIn, signUp } from '../../services/authorisation'

import { AuthContext } from '../../сontext/AuthContext'

import * as S from './AuthorisationForm.styled'

const AuthorisationForm = ({ isSignUp }) => {
    const { setIsAuth } = useContext(AuthContext)

    const [inputData, setInputData] = useState({
        name: '',
        login: '',
        password: '',
    })

    const [errors, setErrors] = useState({
        name: false,
        login: false,
        password: false,
        button: false,
    })

    const [error, setError] = useState('')

    const inputChange = (event) => {
        const { name, value } = event.target
        setInputData({ ...inputData, [name]: value })

        setErrors({
            ...errors,
            [name]: false,
        })

        setError('')
    }

    const navigate = useNavigate()

    const submitButton = (event) => {
        event.preventDefault()

        if (!formErrors(inputData, errors, setErrors, setError, isSignUp)) {
            return
        }

        const data = isSignUp
            ? signUp(inputData)
            : signIn({ login: inputData.login, password: inputData.password })

        data.then((response) => {
            if (response.name === 'AxiosError') {
                setError(response.response.data.error)
            } else {
                localStorage.setItem(LS_USER, JSON.stringify(response))
                setIsAuth(true)
                navigate('/')
            }
        })
    }

    return (
        <S.Wrapper>
            <S.Modal>
                <S.ModalBlock>
                    <S.ModalTitle>
                        <h2>{isSignUp ? 'Регистрация' : 'Вход'}</h2>
                    </S.ModalTitle>
                    <S.ModalForm id="formLogUp" action="#">
                        {isSignUp && (
                            <S.ModalInput
                                $error={errors.name}
                                type="text"
                                name="name"
                                id="form-name"
                                placeholder="Имя"
                                onChange={inputChange}
                            />
                        )}
                        <S.ModalInput
                            $error={errors.login}
                            type="text"
                            name="login"
                            id="form-login"
                            placeholder="Эл. почта"
                            onChange={inputChange}
                        />
                        <S.ModalInput
                            $error={errors.password}
                            type="password"
                            name="password"
                            id="form-password"
                            placeholder="Пароль"
                            onChange={inputChange}
                        />

                        {error ? (
                            <S.ErrorContainer>
                                <p>
                                    Упс! Введенные вами данные некорректны.
                                    Введите данные корректно и повторите
                                    попытку. {error}
                                </p>
                            </S.ErrorContainer>
                        ) : (
                            ''
                        )}

                        <S.ModalButton
                            $error={errors.button}
                            onClick={submitButton}
                        >
                            <a href="../main.html">
                                {isSignUp ? 'Зарегистрироваться' : 'Войти'}
                            </a>
                        </S.ModalButton>
                        <S.ModalFormFooter className="modal__form-group">
                            <p>
                                {isSignUp
                                    ? 'Уже есть аккаунт?'
                                    : 'Нужно зарегистрироваться?'}
                            </p>
                            <Link to={isSignUp ? '/sign-in' : '/sign-up'}>
                                {isSignUp
                                    ? 'Войдите здесь'
                                    : 'Регистрируйтесь здесь'}
                            </Link>
                        </S.ModalFormFooter>
                    </S.ModalForm>
                </S.ModalBlock>
            </S.Modal>
        </S.Wrapper>
    )
}

export default AuthorisationForm
