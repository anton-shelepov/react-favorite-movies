import GlobalSvgSelector from 'utils/svg/GlobalSvgSelector'
import SvgId from 'utils/svg/svgId.enum'
import s from './Loader.module.scss'

interface IProps {
    color?: string
    size?: 'large' | 'small'
    containerMaxHeight?: number
    containerMaxWidth?: number
}

const Loader: React.FC<IProps> = ({
    color = '#000000',
    size = 'large',
    containerMaxHeight,
    containerMaxWidth,
}) => {
    const isLarge = size === 'large'
    return (
        <div
            className={s.container}
            style={{
                maxHeight: containerMaxHeight || '100%',
                maxWidth: containerMaxWidth || '100%',
            }}
        >
            <GlobalSvgSelector
                id={SvgId.FILM_REEL}
                color={color}
                height={isLarge ? 50 : 40}
                width={isLarge ? 50 : 40}
            />
        </div>
    )
}

export default Loader
