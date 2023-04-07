import style from './AddMovieForm.module.css';

function AddMovieForm() {
    return (
        <div className={style.container}>
            <div className={style.image__container}>
                <img className={style.movie__image} src="https://picsum.photos/280/280" alt="" />
            </div>
            <div className={style.form__container}>
                <h2 className={style.add__movie__tittle}>Add Movies</h2>
                <div className={style.input}>
                    <h3 className={style.input__label}>tittle</h3>
                    <input type="text" className={style.input__box} />
                </div>
                <div className={style.input}>
                    <h3 className={style.input__label}>Year</h3>

                    <input type="text" className={style.input__box} />
                </div>

                <div className={style.input}>
                    <button type="submit" className={style.submit__button}>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default AddMovieForm;