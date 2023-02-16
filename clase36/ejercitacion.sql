/* Ejemplo*/
select movies.id, movies.title, genres.name  
from movies
inner join genres on genres.id = movies.genre_id;

select movies.id, movies.title, genres.name
from movies, genres 
where genres.id = movies.genre_id;


/* Microdesafio 1a */
select series.title, genres.name
from series
inner join genres on genres.id = series.genre_id;
/* Microdesafio 1b */
select episodes.title, actors.first_name, actors.last_name
from episodes
inner join actor_episode on episodes.id = actor_episode.episode_id
inner join actors on actor_episode.actor_id = actors.id;
/* Microdesafio 2 */
select distinct actors.first_name, actors.last_name
from actors
inner join actor_movie on actor_movie.actor_id  = actors.id
inner join movies on movies.id = actor_movie.movie_id 
where movies.title like 'La guerra de%';
/* Microdesafio 3 */
select movies.title, coalesce(genres.name, 'no tiene género') as genre_name
from movies
left join genres on genres.id = movies.genre_id;
/* Microdesafio 4 */
/* Traer la cantidad de años hay que usar TIMESTAMPDIFF */
select title, TIMESTAMPDIFF(year, release_date, end_date)  as duracion, release_date, end_date
from series;
select title, DATEDIFF(end_date, release_date)  as duracion, release_date, end_date
from series;
/* Microdesafio 5a */
select first_name from actors where length(first_name) > 6 order by first_name;
/* Microdesafio 5b */
select count(id) from episodes;
/* Microdesafio 5c */
select series.title, count(seasons.id) as temporadas
from series
inner join seasons on series.id = seasons.serie_id
group by series.title;
/* Microdesafio 5d */
select genres.name, count(movies.id)
from genres
inner join movies on movies.genre_id = genres.id
group by genres.id
having count(movies.id) >= 3;






