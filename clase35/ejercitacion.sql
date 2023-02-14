/*Microdesafio 1*/
insert into genres (name, ranking, active) values ('Investigación', 13, true);
insert into genres values (null, NOW(), null, 'Investigación 2', 14, true);

update genres set name = 'Investigación Científica' where id = 13;

delete from genres where id = 13;

select * from genres;

select * from movies;

select first_name, last_name, rating from actors;

select title as Titulo from series;

/* Micro desafio 2 */
select first_name, last_name, rating from actors where rating > 7.5;

select title, rating, awards from movies where rating > 7.5 and awards > 2;

select title, rating from movies order by rating asc;

/* Micro desafio 3 */
select title from movies limit 3;

select * from movies order by rating desc limit 5;

select * from movies order by rating desc limit 5 offset 5;

select * from actors limit 10 offset 0;
select * from actors limit 10 offset 20;

/* Micro desafio 4 */
select title, rating from movies where title like '%harry potter%';

select * from actors where first_name like 'sam%';

select title, release_date from movies where year(release_date) between '2004' and '2008';

