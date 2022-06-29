import SearchForm from 'components/_common/forms/SearchForm'
import React from 'react'
import Logo from '../Logo'
import s from './styles.module.scss'

const Header: React.FC = () => {
    return (
        <header className={s.container}>
            <div className={s.content_wrapper}>
                <div className={s.block_left}>
                    <Logo />
                </div>
                <div className={s.block_middle}>
                    <SearchForm />
                </div>
                <div className={s.block_right}></div>
            </div>
        </header>
    )
}

export default Header
