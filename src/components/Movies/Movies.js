import Movie from "../Movie/Movie.js";
import style from "./Movies.module.css";
// import data movies ----
import data from "../../utils/constants/data.js";

function Movies() {
    //membuat variable movies
    const movies = data;

    return (
        <div className={style.container}>
            <section className={style.movies}>
                <h2 className={style.movies__tittle}>Latest Movies</h2>
                <div className={style.movie__container}>
                    {
                        /**
                         * looping data movies: map
                         * render component movie
                         * kirim props movie
                         */
                    }{
                        movies.map(function (movie) {
                            return <Movie key={movie.id} movie={movie} />;
                        })
                    }
                </div>

                {/* duplicate only */}

            </section>
        </div>
    );
}

export default Movies;