module.exports = function (express) {
  var router = express.Router();
  var routes = [
    '/',
    '/:page',
    '/:page/:id',
    '/:core/categoria-de-cursos/:path',
    '/:core/curso/:path',
    '/area-do-aluno/:page/:id'
  ];

  router.get(routes, function (req, res) {
    res.render('main/views/index');
  });

  return router;
};
