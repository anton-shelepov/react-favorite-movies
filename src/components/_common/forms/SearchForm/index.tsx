import GlobalSvgSelector from 'components/_utils/svg/GlobalSvgSelector'
import SvgId from 'components/_utils/svg/svgId'
import { FieldValues, useForm } from 'react-hook-form'
import s from './styles.module.scss'

interface IProps {}

const SearchForm: React.FC<IProps> = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onFormSubmit = (data: FieldValues) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className={s.container} autoComplete='off'>
            <div className={s.search_input__wrapper}>
                <input
                    {...register('searchText', { required: true })}
                    className={s.search_input}
                    placeholder='Название фильма...'
                />
            </div>
            <button className={s.submit_btn} type='submit'>
                <GlobalSvgSelector id={SvgId.FIND} />
            </button>
        </form>
    )
}

export default SearchForm
