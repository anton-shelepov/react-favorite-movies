import classNames from 'classnames'
import SearchForm from 'components/_common/forms/searchForm/SearchForm'
import React, { LegacyRef, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../logo/Logo'
import s from './Header.module.scss'

const Header: React.FC = () => {
    const [isHeaderHidden, setIsHeaderHidden] = useState(false)
    const prevScrollYPos = useRef(scrollY)
    const headerElement: LegacyRef<HTMLElement> | undefined = useRef(null)

    const onScroll: EventListenerOrEventListenerObject = () => {
        const headerHeight = headerElement.current?.offsetHeight
        if (prevScrollYPos.current < scrollY && headerHeight && headerHeight < scrollY) {
            setIsHeaderHidden(true)
        } else if (prevScrollYPos.current > scrollY) {
            setIsHeaderHidden(false)
        }
        prevScrollYPos.current = scrollY
    }

    window.addEventListener('scroll', onScroll)

    const headerContainerClasses = classNames(s.container, isHeaderHidden && s.hide)

    return (
        <header className={headerContainerClasses} ref={headerElement}>
            <div className={s.content_wrapper}>
                <div className={s.block_left}>
                    <Link to='/'>
                        <Logo />
                    </Link>
                </div>
                <div className={s.block_middle}>
                    <SearchForm isHeaderHidden={isHeaderHidden} />
                </div>
                <div className={s.block_right}></div>
            </div>
        </header>
    )
}

export default Header
