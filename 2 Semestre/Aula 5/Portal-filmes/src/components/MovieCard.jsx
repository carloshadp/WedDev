import { Link } from "react-router-dom"

export default function MovieCard({id, title, backdrop_path,poster_path,  vote_average}) {
    return(
        <>
        <div>
            <h2>{title}</h2>
            <p>⭐{vote_average}</p>
            <img src={`https://image.tmdb.org/t/p/w154${poster_path}`} alt={title} />
            <Link to={`/movies/${id}`}>Saiba mais</Link>
        </div>
        
        </>
    )

}