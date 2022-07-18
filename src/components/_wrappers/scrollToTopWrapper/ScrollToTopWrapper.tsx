import { ReactElement, useLayoutEffect } from 'react'
import { useLocation } from 'react-router'

interface IProps {
    children: ReactElement<any, any>
}

const ScrollToTopWrapper = ({ children }: IProps) => {
    const location = useLocation()
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0)
    }, [location.pathname])
    return children
}

export default ScrollToTopWrapper
