import mainLogo from '../../assets/images/main-logo.png';
import s from './styles.module.scss';

interface IProps { }

const Logo: React.FC<IProps> = () => {
    return (
        <img className={s.logo} src={mainLogo} />
    )
}

export default Logo