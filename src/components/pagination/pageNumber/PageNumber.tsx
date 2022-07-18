import { MouseEventHandler } from 'react'
import s from './PageNumber.module.scss'

interface IProps {
    onHandlePageClick: MouseEventHandler<HTMLSpanElement>
    pageNumber: number
    currentPage: number
}

const PageNumber: React.FC<IProps> = ({ currentPage, onHandlePageClick, pageNumber }) => {
    return (
        <span
            onClick={onHandlePageClick}
            key={pageNumber}
            className={`${s.page_number} ${currentPage === pageNumber ? s.active : ''}`}
        >
            {pageNumber}
        </span>
    )
}

export default PageNumber
