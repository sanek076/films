import { Movie } from './Movie';

function Movies(props) {
    const { movies = [] } = props;

    return (
        <div className="movies">
            {movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
            ) : (
                <div id="error-page">
         <div class="oops">
            <h2 class="header" data-text="404">
               Oops!
            </h2>
            <h4 data-text="Opps! Page not found">
               Nothing found
            </h4>
            <p>
               Nothing was found for your query
            </p>
         </div>
        </div>
            )}
        </div>
    );
}

export { Movies };