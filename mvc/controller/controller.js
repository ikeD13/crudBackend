const moviesModel = require("../models/movies.js")
const knex = require('../../knex.js')


const getMovies = (req,res,next) => {
    return moviesModel.getAllMovies().then((movies)=>{
        return movies.error ? next ({status:404,message:'film not found', error: movies.error}) : res.status(200).send(movies)
    })
}

const getOneMovie = (req,res,next) => {
    return moviesModel.getSingleMovie(req.params.id).then((movies)=>{
        return movies.error ? next ({status:404,message:'film not found', error: movies.error}) : res.status(200).send(movies)
    })
    }

const postMovie = (req,res,next) => {
    return moviesModel.createMovie(req.body).then((movies)=>{
        return movies.error ? next ({status:400,message:'film not found', error: movies.error}) : res.status(201).send(movies[0])
    })
    }

const putMovie = (req,res,next) => {
    return moviesModel.updateMovie(req.params.id,req.body).then((movies)=>{
        return movies.error ? next ({status:400,message:'film not added', error: movies.error}) : res.status(202).send(movies[0])
    })
    }
const deleteMovie = (req,res,next) => {
    return moviesModel.removeMovie(req.params.id).then((movies)=>{
        return movies.error ? next ({status:400,message:'film not deleted', error: movies.error}) : res.status(204).send(movies[0])
    })
    }



module.exports = {
    getMovies,
    getOneMovie,
    postMovie,
    putMovie,
    deleteMovie
}