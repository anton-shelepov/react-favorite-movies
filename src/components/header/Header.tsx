import classNames from 'classnames'
import SearchForm from 'components/_common/forms/searchForm/SearchForm'
import React, { LegacyRef, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../logo/Logo'
import s from './Header.module.scss'

const Header: React.FC = () => {
    const [isHide, setIsHide] = useState(false)
    const prevScrollYPos = useRef(scrollY)
    const headerElement: LegacyRef<HTMLElement> | undefined = useRef(null)
    const headerHeight = headerElement.current?.offsetHeight

    const onScroll: EventListenerOrEventListenerObject = () => {
        if (prevScrollYPos.current < scrollY && headerHeight && headerHeight < scrollY) {
            setIsHide(true)
        } else if (prevScrollYPos.current > scrollY) {
            setIsHide(false)
        }
        prevScrollYPos.current = scrollY
    }

    window.addEventListener('scroll', onScroll)

    const headerContainerClasses = classNames(s.container, isHide && s.hide)

    return (
        <header className={headerContainerClasses} ref={headerElement}>
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
