import style from "./Movie.module.css";

// tangkap props
function Movie(props) {
    //destructing  object props
    const { movie } = props;
    return (

        <div className={style.movie}>
            <img className={style.movie__image} src={movie.poster} alt="" />
            <h3 className={style.movie__tittle}>{movie.title}</h3>
            <p className={style.movie__date}>{movie.year}</p>
        </div>
    );
}
export default Movie;