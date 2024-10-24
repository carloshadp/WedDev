import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"
import movies from "../data/movies.json"
import { infinity } from 'ldrs'

export default function MovieListPage(){
    infinity.register()
    
    const [search, setSearch] = useState("");
    const [filmes, setFilmes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);


        setTimeout(() => {

            fetch("https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br")
            .then( data => data.json())
            .then( data_json => setFilmes(data_json.results))
            .catch( erro => console.log(erro) )
            .finally(() => setIsLoading(false))

        }, 2000);  

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
            <section className="flex flex-wrap justify-evenly gap-4">
                {
                    isLoading ? <l-infinity
                    size="55"
                    stroke="4"
                    stroke-length="0.15"
                    bg-opacity="0.1"
                    speed="1.3" 
                    color="black" 
                  ></l-infinity> : 
                    

                    filmesFiltrados
                        .map(filme => (
                            <MovieCard key={filme.id} {...filme} />
                        ))
                }
            </section>
        
        </>
    )
}