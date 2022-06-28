import SearchForm from 'components/_common/forms/SearchForm'
import React from 'react'
import Logo from '../Logo'
import s from './styles.module.scss'

const Header: React.FC = () => {
    return (
        <header className={s.container}>
            <div className={s.content_wrapper}>
                <Logo />
                <SearchForm />
            </div>
        </header>
    )
}

export default Header
