import { FieldValues, useForm } from 'react-hook-form'
import s from './styles.module.scss'

interface IProps {}

const SearchForm: React.FC<IProps> = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    function onFormSubmit(data: FieldValues) {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className={s.container}>
            <input {...register('searchText', { required: true })} className={s.search_input} />

            <button className={s.submit_btn} type='submit'></button>
        </form>
    )
}

export default SearchForm
