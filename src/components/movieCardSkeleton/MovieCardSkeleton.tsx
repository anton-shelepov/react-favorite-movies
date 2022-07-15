import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import s from './MovieCardSkeleton.module.scss'

interface IProps {
    cardsCount: number
}

const MovieCardSkeleton: React.FC<IProps> = ({ cardsCount }) => {
    return (
        <SkeletonTheme baseColor='#161616' highlightColor='#202020' borderRadius={0}>
            {Array(cardsCount)
                .fill(0)
                .map((_, index) => (
                    <div key={index} className={s.container}>
                        <div className={s.poster}>
                            <Skeleton height={275} style={{ marginBottom: 15 }} />
                        </div>
                        <div className={s.info}>
                            <Skeleton count={1} style={{ marginBottom: 10 }} height={30} />
                            <Skeleton
                                count={1}
                                style={{ marginBottom: 10, width: 70, alignSelf: 'center' }}
                                height={25}
                            />
                        </div>
                        <div className={s.ratings}>
                            <Skeleton
                                count={2}
                                inline={true}
                                width={50}
                                height={25}
                                className={s.ratings_item}
                            />
                        </div>
                    </div>
                ))}
        </SkeletonTheme>
    )
}

export default MovieCardSkeleton
