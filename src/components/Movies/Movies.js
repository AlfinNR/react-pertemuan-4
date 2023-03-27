import style from "./Movies.module.css";

function Movies() {
    return (
        <div className={style.container}>
            <section className={style.movies}>
                <h2 className={style.movies__tittle}>Latest Movies</h2>
                <div className={style.movie__container}>
                    <div className={style.movie}>
                        <img className={style.movie__image} src="https://picsum.photos/300/400" alt="" />
                        <h3 className={style.movie__tittle}>Movie tittle</h3>
                        <p className={style.movie__date}>Date tittle</p>
                    </div>
                    <div className={style.movie}>
                        <img className={style.movie__image} src="https://picsum.photos/300/400" alt="" />
                        <h3 className={style.movie__tittle}>Movie tittle</h3>
                        <p className={style.movie__date}>Date tittle</p>
                    </div>
                    <div className={style.movie}>
                        <img className={style.movie__image} src="https://picsum.photos/300/400" alt="" />
                        <h3 className={style.movie__tittle}>Movie tittle</h3>
                        <p className={style.movie__date}>Date tittle</p>
                    </div>
                    <div className={style.movie}>
                        <img className={style.movie__image} src="https://picsum.photos/300/400" alt="" />
                        <h3 className={style.movie__tittle}>Movie tittle</h3>
                        <p className={style.movie__date}>Date tittle</p>
                    </div>
                    <div className={style.movie}>
                        <img className={style.movie__image} src="https://picsum.photos/300/400" alt="" />
                        <h3 className={style.movie__tittle}>Movie tittle</h3>
                        <p className={style.movie__date}>Date tittle</p>
                    </div>
                    <div className={style.movie}>
                        <img className={style.movie__image} src="https://picsum.photos/300/400" alt="" />
                        <h3 className={style.movie__tittle}>Movie tittle</h3>
                        <p className={style.movie__date}>Date tittle</p>
                    </div>
                    <div className={style.movie}>
                        <img className={style.movie__image} src="https://picsum.photos/300/400" alt="" />
                        <h3 className={style.movie__tittle}>Movie tittle</h3>
                        <p className={style.movie__date}>Date tittle</p>
                    </div>
                    <div className={style.movie}>
                        <img className={style.movie__image} src="https://picsum.photos/300/400" alt="" />
                        <h3 className={style.movie__tittle}>Movie tittle</h3>
                        <p className={style.movie__date}>Date tittle</p>
                    </div>
                    <div className={style.movie}>
                        <img className={style.movie__image} src="https://picsum.photos/300/400" alt="" />
                        <h3 className={style.movie__tittle}>Movie tittle</h3>
                        <p className={style.movie__date}>Date tittle</p>
                    </div>
                    <div className={style.movie}>
                        <img className={style.movie__image} src="https://picsum.photos/300/400" alt="" />
                        <h3 className={style.movie__tittle}>Movie tittle</h3>
                        <p className={style.movie__date}>Date tittle</p>
                    </div>
                    <div className={style.movie}>
                        <img className={style.movie__image} src="https://picsum.photos/300/400" alt="" />
                        <h3 className={style.movie__tittle}>Movie tittle</h3>
                        <p className={style.movie__date}>Date tittle</p>
                    </div>
                </div>

                {/* duplicate only */}

            </section>
        </div>
    );
}

export default Movies;