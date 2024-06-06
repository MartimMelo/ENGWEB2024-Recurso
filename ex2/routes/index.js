var express = require('express');
var router = express.Router();
var axios = require('axios');

const api_url = 'http://localhost:17000';
/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get(api_url + '/books')
    .then(response => {
      res.render('index', { books: response.data });
    })
    .catch(error => {
      res.render('error', { error: error });
    });
});

router.get('/:id', function(req, res, next) {
  axios.get(api_url + '/books/' + req.params.id)
    .then(response => {
      res.render('book', { book: response.data });
    })
    .catch(error => {
      res.render('error', { error: error });
    });
});

router.get('/authors/:idAutor', function (req, res) {
  axios.get(apiDados + "/books").then((response) => {
    let author = req.params.idAutor;
    let livros = response.data;
    let livrosAutor = livros.filter(livro => livro.author && livro.author.includes(author));
    res.render('author', { author: author, livros: livrosAutor });
  }).catch((error) => {
    res.render('error', { error: error });
  });
});

module.exports = router;
