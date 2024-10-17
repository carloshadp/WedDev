import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"
import movies from "../data/movies.json"


export default function MovieListPage(){

    const [search, setSearch] = useState("")
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br")
        .then( data => data.json())
        .then( data_json => setFilmes(data_json.results))
        .catch( erro => console.log(erro) )
        .finally(() => console.log("Cabo =("))

    }, [])


    
    
    const handleSearch = (event) => {
        setSearch(event.target.value)
        console.log(search)
    }

    const filmesFiltrados = filmes.filter( filme => filme.title.toLowerCase().includes(search.toLowerCase()))
    return(
        <>
        <h2>Veja o catálogo completo de filmes</h2>
            <input
                className="text-black"
                type="text"
                id="search"
                value={search}
                onChange={handleSearch}
            />
            <section className="">
                {
                    

                    filmesFiltrados
                        .map(filme => (
                            <MovieCard key={filme.id} {...filme} />
                        ))
                }
            </section>
        
        </>
    )
}