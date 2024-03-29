import SvgId from './svgId.enum'

interface IProps {
    id: SvgId
    color?: string
    height?: number
    width?: number
}

const GlobalSvgSelector = ({ id, color = 'white', height, width }: IProps) => {
    switch (id) {
        case SvgId.FIND:
            return (
                <svg
                    version='1.0'
                    xmlns='http://www.w3.org/2000/svg'
                    width='64.000000pt'
                    height='64.000000pt'
                    viewBox='0 0 64.000000 64.000000'
                    preserveAspectRatio='xMidYMid meet'
                >
                    <g
                        transform='translate(0.000000,64.000000) scale(0.100000,-0.100000)'
                        fill='#000000'
                        stroke='none'
                    >
                        <path
                            d='M165 627 c-80 -31 -127 -79 -153 -156 -38 -108 25 -241 135 -288 53
                            -22 142 -17 199 12 58 30 54 29 54 8 0 -10 41 -59 92 -110 l92 -93 28 27 28
                            27 -92 93 c-51 51 -101 93 -110 93 -22 0 -23 -4 7 54 29 57 34 146 12 199 -47
                            111 -186 175 -292 134z m163 -89 c47 -29 75 -90 69 -151 -7 -81 -63 -137 -144
                            -144 -113 -11 -202 90 -173 198 30 109 151 157 248 97z'
                        />
                    </g>
                </svg>
            )

        case SvgId.KINOPOISK:
            return (
                <svg
                    version='1.0'
                    xmlns='http://www.w3.org/2000/svg'
                    width='45.000000pt'
                    height='48.000000pt'
                    viewBox='0 0 45.000000 48.000000'
                    preserveAspectRatio='xMidYMid meet'
                >
                    <g
                        transform='translate(0.000000,48.000000) scale(0.100000,-0.100000)'
                        fill='#000000'
                        stroke='none'
                    >
                        <path
                            d='M2 253 c1 -138 4 -204 8 -168 4 33 7 54 8 46 1 -9 11 -12 26 -9 29 6
                            36 -7 36 -63 0 -39 0 -39 -40 -39 -22 0 -40 -4 -40 -10 0 -6 82 -10 225 -10
                            124 0 225 4 225 8 0 4 -60 40 -132 80 -140 75 -178 99 -144 88 11 -4 22 -2 26
                            4 6 10 98 -20 233 -75 15 -6 17 -1 17 43 l0 50 -77 6 c-92 8 -174 23 -131 25
                            27 1 50 20 26 22 -29 1 30 18 67 18 22 1 57 4 78 7 37 7 37 7 37 56 0 44 -2
                            49 -17 43 -53 -21 -127 -45 -130 -41 -3 2 4 7 15 10 11 4 22 15 25 26 3 13 1
                            17 -9 13 -35 -13 -8 9 51 42 36 20 65 40 65 45 0 6 -89 10 -225 10 l-225 0 2
                            -227z m208 203 c0 -2 -8 -10 -17 -17 -16 -13 -17 -12 -4 4 13 16 21 21 21 13z
                            m70 1 c0 -1 -35 -36 -77 -77 l-78 -75 70 76 c60 66 85 88 85 76z m-70 -362
                            l74 -75 -44 0 c-45 0 -45 1 -94 73 -27 39 -43 66 -36 60 19 -18 33 -16 26 2
                            -3 8 -4 15 -3 15 1 0 36 -34 77 -75z'
                        />
                    </g>
                </svg>
            )

        case SvgId.FILM_REEL:
            return (
                <svg
                    version='1.0'
                    xmlns='http://www.w3.org/2000/svg'
                    width={`${width}pt`}
                    height={`${height}pt`}
                    viewBox='0 0 128 128'
                    preserveAspectRatio='xMidYMid meet'
                >
                    <g
                        transform='translate(0.000000,128.000000) scale(0.100000,-0.100000)'
                        fill={color}
                        stroke='none'
                    >
                        <path
                            d='M501 1265 c-178 -39 -348 -172 -429 -336 -127 -256 -81 -540 118
                            -739 251 -252 649 -252 900 0 252 251 252 649 0 900 -155 156 -375 221 -589
                            175z m227 -146 c61 -37 83 -136 46 -200 -80 -137 -284 -85 -284 71 0 121 133
                            193 238 129z m-363 -348 c134 -75 78 -281 -76 -281 -178 0 -207 260 -34 300
                            37 9 70 3 110 -19z m705 -4 c127 -85 76 -277 -74 -279 -155 -3 -215 202 -84
                            282 46 28 115 26 158 -3z m-405 -67 c52 -20 52 -100 0 -120 -55 -21 -106 30
                            -85 85 8 21 24 33 57 44 1 1 13 -3 28 -9z m53 -280 c131 -80 72 -282 -82 -282
                            -152 0 -204 193 -76 279 43 29 112 31 158 3z'
                        />
                    </g>
                </svg>
            )

        case SvgId.PAGINATION_ONE_PAGE_ARROW:
            return (
                <svg
                    version='1.0'
                    xmlns='http://www.w3.org/2000/svg'
                    width='64.000000pt'
                    height='64.000000pt'
                    viewBox='0 0 64.000000 64.000000'
                    preserveAspectRatio='xMidYMid meet'
                >
                    <g
                        transform='translate(0.000000,64.000000) scale(0.100000,-0.100000)'
                        fill={color}
                        stroke='none'
                    >
                        <path
                            d='M42 477 l-42 -42 160 -160 160 -160 160 160 160 160 -45 45 -45 45
                            -115 -115 -115 -115 -113 113 c-62 61 -115 112 -118 112 -2 0 -24 -19 -47 -43z'
                        />
                    </g>
                </svg>
            )

        case SvgId.PAGINATION_ALL_PAGE_ARROW:
            return (
                <svg
                    version='1.0'
                    xmlns='http://www.w3.org/2000/svg'
                    width='64.000000pt'
                    height='64.000000pt'
                    viewBox='0 0 64.000000 64.000000'
                    preserveAspectRatio='xMidYMid meet'
                >
                    <g
                        transform='translate(0.000000,64.000000) scale(0.100000,-0.100000)'
                        fill={color}
                        stroke='none'
                    >
                        <path
                            d='M37 602 c-20 -21 -37 -42 -37 -48 0 -5 72 -81 160 -169 l160 -160
                            160 160 c88 88 160 165 160 170 0 13 -72 85 -85 85 -5 0 -60 -51 -122 -112
                            l-113 -113 -113 113 c-62 61 -117 112 -123 112 -5 0 -27 -17 -47 -38z'
                        />
                        <path
                            d='M40 365 l-45 -45 163 -163 162 -162 162 162 163 163 -48 47 -47 48
                            -115 -115 -115 -115 -113 113 c-62 61 -115 112 -118 112 -2 0 -25 -20 -49 -45z'
                        />
                    </g>
                </svg>
            )

        default:
            return null
    }
}

export default GlobalSvgSelector
