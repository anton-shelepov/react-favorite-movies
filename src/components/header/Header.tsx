import classNames from 'classnames'
import SearchForm from 'components/_common/forms/searchForm/SearchForm'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../logo/Logo'
import s from './Header.module.scss'

const Header: React.FC = () => {
    const [isHide, setIsHide] = useState(false)
    const prevScrollYPos = useRef(window.scrollY)
    const headerElement = useRef(null)
    const onScroll: EventListenerOrEventListenerObject = (e) => {
        if (prevScrollYPos.current < window.scrollY) {
            setIsHide(true)
        } else if (prevScrollYPos.current > window.scrollY) {
            setIsHide(false)
        }
        prevScrollYPos.current = window.scrollY
    }

    window.addEventListener('scroll', onScroll)

    const headerContainerClasses = classNames(s.container, isHide && s.hide)

    return (
        <header className={headerContainerClasses}>
            <div className={s.content_wrapper}>
                <div className={s.block_left}>
                    <Link to='/'>
                        <Logo />
                    </Link>
                </div>
                <div className={s.block_middle}>
                    <SearchForm isHide={isHide} />
                </div>
                <div className={s.block_right}></div>
            </div>
        </header>
    )
}

export default Header
