import ReactPlayer from 'react-player'

interface IProps {
    url: string
}

const VideoPlayer: React.FC<IProps> = ({ url }) => {
    return (
        <ReactPlayer
            width='100%'
            url={
                'https://widgets.kinopoisk.ru/discovery/trailer/88184?onlyPlayer=1&autoplay=1&cover=1'
            }
            controls={false}
            config={{ youtube: {} }}
        />
    )
}

export default VideoPlayer
