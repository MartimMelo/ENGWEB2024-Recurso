const mongoose = require('mongoose');
var Livro = require('../models/livro');

module.exports.list = () => {
    return Livro.find().exec();
}

module.exports.findById = (id) => {
    return Livro.findOne({ _id: id }).exec();
}
module.exports.listByAuthor = (author) => {
    return Livro.find({ author: author }).exec();
}

module.exports.listByCharacter = (character) => {
    return Livro.find({ characters: { $in: [character] } }).exec();
}

module.exports.listByGenre = (genre) => {
    return Livro.find({ genres: { $in: [genre] } }).exec();
}


module.exports.listGenres = () => {
    return Livro.distinct("genres").sort().exec();
}

module.exports.listCharacters = () => {
    return Livro.distinct("characters").sort().exec();
}
module.exports.inserir = (livro) => {
    if (Livro.findOne({ _id: livro._id }).length == 1) {
        return Promise.reject(new Error("Id already exists"))
    }

    var novo = new Livros(livro)
    return novo.save()
}

module.exports.remover = (id) => {
    return Livro.deleteOne({ _id: id })
}

module.exports.atualizar = (id, livro) => {
    return Livro.updateOne({ _id: id}, livro)
}
