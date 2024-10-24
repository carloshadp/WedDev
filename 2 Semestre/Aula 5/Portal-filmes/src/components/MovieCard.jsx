import { Link } from "react-router-dom"

export default function MovieCard({id, title, backdrop_path,poster_path,  vote_average}) {
    return(
        <>
        <div className="flex flex-col items-center">
            <img src={`https://image.tmdb.org/t/p/w154${poster_path}`} alt={title} />
            <div className="flex gap-3">
                {/* <p>⭐{vote_average}</p> */}
                <Link to={`/movies/${id}`}>Saiba mais</Link>
            </div>
        </div>
        
        </>
    )

}