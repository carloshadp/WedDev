import { Link } from "react-router-dom"

export default function MovieCard({id, title, backdrop_path,poster_path,  vote_average}) {
    
    const handleFavorito = ({id, title, poster_path}) => 
    {

        let favoritos = JSON.parse(localStorage.getItem("favoritos")) || []

        //Vejo em cada lista de objetos da variavel 'favoritos' se tem o id 
        const isFavorito = favoritos.some(filme => filme.id === id) 

        if(isFavorito)
        {
            favoritos = favoritos.filter( filme => filme.id != id)
        }else{
            favoritos.push({id, title, poster_path})
        }
        localStorage.setItem("favoritos", JSON.stringify(favoritos))
    }
    
    return(
        <>
        <div className="flex flex-col items-center">
            <img src={`https://image.tmdb.org/t/p/w154${poster_path}`} alt={title} />
            <div className="flex flex-col text-center">
                {/* <p>⭐{vote_average}</p> */}
                <Link to={`/movies/${id}`}>Saiba mais</Link>
                <button onClick={()=> handleFavorito({id, title, poster_path})}>Adicionar Favoritos</button>
            </div>
        </div>
        
        </>
    )

}