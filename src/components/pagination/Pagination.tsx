import { MouseEventHandler } from 'react'
import GlobalSvgSelector from 'utils/svg/GlobalSvgSelector'
import SvgId from 'utils/svg/svgId.enum'
import PageNumber from './pageNumber/PageNumber'
import s from './Pagination.module.scss'

interface IProps {
    onPageChange: any
    pages: {
        count: number
        limit: number
    }
    currentPage: number
}

// TODO: Не отображать начальный и конечный номер страницы, в случае, если общее количество страниц не превышает 3-х

const Pagination: React.FC<IProps> = ({ onPageChange, pages, currentPage }) => {
    const pageNumbers = []
    for (
        let currentPageNumber = currentPage === 1 || currentPage === 2 ? 1 : currentPage - 2;
        currentPageNumber <=
        (currentPage === pages.count || currentPage === pages.count - 1
            ? pages.count
            : currentPage + 2);
        currentPageNumber++
    ) {
        pageNumbers.push(currentPageNumber)
    }
    const onHandleStartClick = () => {
        onPageChange(1)
    }
    const onHandlePrevClick = () => {
        onPageChange(currentPage - 1)
    }
    const onHandleNextClick = () => {
        onPageChange(currentPage + 1)
    }
    const onHandleEndClick = () => {
        onPageChange(pages.count)
    }
    const onHandlePageClick: MouseEventHandler<HTMLSpanElement> = (e) => {
        const page = Number.parseInt(e.currentTarget.innerText)
        onPageChange(page)
    }

    return (
        <div
            className={s.container}
            style={pages.count <= 1 ? { display: 'none' } : { display: 'flex' }}
        >
            <button disabled={currentPage === 1} className={s.start} onClick={onHandleStartClick}>
                <GlobalSvgSelector id={SvgId.PAGINATION_ALL_PAGE_ARROW} />
            </button>
            <button disabled={currentPage === 1} className={s.prev} onClick={onHandlePrevClick}>
                <GlobalSvgSelector id={SvgId.PAGINATION_ONE_PAGE_ARROW} color='white' />
            </button>
            <div className={s.page_numbers__container}>
                {pages.count / 2 < currentPage && (
                    <>
                        <PageNumber
                            currentPage={currentPage}
                            onHandlePageClick={onHandlePageClick}
                            pageNumber={1}
                        />
                        <span className={s.pages_splitter}>...</span>
                    </>
                )}
                {pageNumbers.map((pageNumber) => (
                    <PageNumber
                        currentPage={currentPage}
                        onHandlePageClick={onHandlePageClick}
                        pageNumber={pageNumber}
                        key={pageNumber}
                    />
                ))}
                {pages.count / 2 >= currentPage && (
                    <>
                        <span className={s.pages_splitter}>...</span>
                        <PageNumber
                            currentPage={currentPage}
                            onHandlePageClick={onHandlePageClick}
                            pageNumber={pages.count}
                        />
                    </>
                )}
            </div>
            <button
                disabled={currentPage === pages.count}
                className={s.next}
                onClick={onHandleNextClick}
            >
                <GlobalSvgSelector id={SvgId.PAGINATION_ONE_PAGE_ARROW} color='white' />
            </button>
            <button
                disabled={currentPage === pages.count}
                className={s.end}
                onClick={onHandleEndClick}
            >
                <GlobalSvgSelector id={SvgId.PAGINATION_ALL_PAGE_ARROW} />
            </button>
        </div>
    )
}

export default Pagination
