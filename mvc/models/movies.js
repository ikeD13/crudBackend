const knex = require('../../knex.js')

const getAllMovies = () =>{
    return knex('movies')
    .then(movies=>movies)
    .catch(err=>{return{error}})
}

const getSingleMovie = (id) =>{
    return knex('movies')
    .where('movies.id',id).first()
    .then(movie=>movie)
    .catch(err=>{return{error}})
}

const createMovie = ({title,director,year,rating,url}) =>{
    if(!title||!director||!year||!rating||!url) return {error:"ERROR ERROR DOES NOT COMPUTE"}
    return knex('movies').insert({title,director,year,my_rating:rating,poster_url:url})
    .returning('*')
    .then(movie=>movie).catch(err=>{return{error}})
}

const updateMovie = (id,{title,director,year,rating,url}) =>{
    if(!id||!title||!director||!year||!rating||!url) return {error:"ERROR ERROR DOES NOT COMPUTE"}
    return knex('movies').where('movies.id',id)
    .first().update({title,director,year,my_rating:rating,poster_url:url})
    .returning('*').then(movie=>movie).catch(err=>{return{error}})
}

const removeMovie = (id) =>{
    if (!id) return{error:"ERROR ERROR DOES NOT COMPUTE"}
    return knex ("movies").where('movies.id',id).first().del().returning("*")
    .then(movie=>movie).catch(err=>{return{error}})
}




module.exports = {
    getAllMovies,
    getSingleMovie,
    createMovie,
    updateMovie,
    removeMovie
   }