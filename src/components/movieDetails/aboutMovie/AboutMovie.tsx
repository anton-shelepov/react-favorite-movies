import s from './AboutMovie.module.scss'

interface IProps {
    aboutMovieData: []
}

const AboutMovie: React.FC<IProps> = () => {
    return (
        <div className={s.container}>
            <h2 className={s.title}>Подробности</h2>
        </div>
    )
}

export default AboutMovie
