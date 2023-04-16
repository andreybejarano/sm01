import React from "react";
import MovieData from "./MovieData";

const movies = [
    {
        title:"Billy Elliot",
        length: 123 ,
        rating: 5 ,
        genres: ["Drama", "Comedia"],
        awards: 2 , 
    },
    {
        title:"Alicia en el país de las maravillas",
        length: 142 ,
        rating: 4.8 ,
        genres: ["Drama", "Acción" ,"Comedia"],
        awards: 3 , 
    }
]

function MoviesTable() {
  return (
    <div className="container-fluid">
        <div className="card shadow mb-4">
        <div className="card-body">
            <div className="table-responsive">
            <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
            >
                <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Duración</th>
                    <th>Rating</th>
                    <th>Género</th>
                    <th>Premios</th>
                </tr>
                </thead>
                <tfoot>
                <tr>
                    <th>Titulo</th>
                    <th>Duración</th>
                    <th>Rating</th>
                    <th>Género</th>
                    <th>Premios</th>
                </tr>
                </tfoot>
                <tbody>
                { movies.map((movie, i)=> 
                    <MovieData 
                        key={i}
                        title={movie.title}
                        length={movie.length}
                        rating={movie.rating}
                        genres={movie.genres}
                        awards={movie.awards}
                    />
                )}
                </tbody>
            </table>
            </div>
        </div>
        </div>
    </div>
  );
}

export default MoviesTable;