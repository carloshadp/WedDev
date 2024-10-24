import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"




// Default values shown


//https://developer.themoviedb.org/reference/movie-details  API
//uiball LOADERS





export default function MovieDetailPage(){
    
    const {id} = useParams()
    const [filme, setFilme] = useState({})
    

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br`)
        .then( data => data.json())
        .then( data => {
            setFilme(data)
            console.log(data)
    })
        .catch( erro => console.log(erro) )
        .finally(() => console.log("Cabo =("))

    }, [])

    return(
        <>
        <div className="h-screen" style={
            {
                backgroundImage: `url("https://image.tmdb.org/t/p/w1280${filme.backdrop_path}")`
            }
        }>
            <h1>{filme.title}</h1>
            <p>⭐{filme.vote_average}</p>

        </div>
        </>
    )
}