import React from 'react'

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__block">
                    <div class="header__logo">
                        <a href="/">
                            <img src="/images/logo.svg" alt="logo" />
                        </a>
                    </div>
                    <nav className="header__nav">
                        <a href="#" class="header__btn">
                            Мои расходы
                        </a>
                        <a href="#" class="header__btn">
                            Анализ расходов
                        </a>
                    </nav>
                    <div className="header__exit-btn">
                        <a href="#" class="header__btn">
                            Выход
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}
