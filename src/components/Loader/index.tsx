import GlobalSvgSelector from 'utils/svg/GlobalSvgSelector'
import SvgId from 'utils/svg/svgId'
import s from './styles.module.scss'

interface IProps {
    color?: string
}

const Loader: React.FC<IProps> = ({ color = '#ffffff' }) => {
    return (
        <div className={s.container}>
            <GlobalSvgSelector id={SvgId.FILM_REEL} color={color} />
        </div>
    )
}

export default Loader
