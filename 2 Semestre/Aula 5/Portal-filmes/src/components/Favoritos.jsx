import { useEffect, useState } from 'react'
import MovieCard from './MovieCard'

export default function Favoritos() {
  
    const [favoritos, setFavoritos] = useState([])

    useEffect(() => {
        const favoritados = JSON.parse(localStorage.getItem("favoritos"))
        setFavoritos(favoritados)
    }, [])

    return (
        <>
        {
            favoritos.map( filme => (
                <MovieCard key={filme.id} {...filme}/>
            ))
        }
        </>
    )
}
