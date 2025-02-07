import React from "react"
const MovieCard = ({ movie }) => {
    return (
        <div className="movie">
            {/* Vi hämtar information från respektive kategori i APIet med hjälp av props */}
            <div>
                <p>{movie.Year}</p>
            </div>

            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Calango_em_Brejo_da_Madre_de_Deus.jpg/500px-Calango_em_Brejo_da_Madre_de_Deus.jpg'} alt={movie.title} />
            </div>
            <div>
                <span>
                    {movie.Type}
                </span>

                <h3>
                    {movie.Title}
                </h3>
            </div>

        </div>
    )
}


export default MovieCard