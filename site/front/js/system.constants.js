'use strict';

var SystemUrlConfig = {
  home:             '/',
  courses:          '/:core/categoria-de-cursos/:path',
  coursesCategory:  '/:core/categoria-de-cursos',
  courseDetailing:  '/:core/curso/:path',
  aboutUs:          '/quem-somos',
  cores:            '/nucleos',
  partners:         '/parceiros',
  teachers:         '/professores',
  contact:          '/contato',
  register:         '/cadastro',
  sigin:            '/entrar',
  forgetPassword:   '/esqueci-minha-senha',
  resetPassword:    '/nova-senha/:token',
  myCourses:        '/area-do-aluno/meus-cursos',
  myAccount:        '/area-do-aluno/minha-conta',
  checkout:         '/area-do-aluno/checkout',
  payment:          '/area-do-aluno/pedido/:idordem',
  notFound:         '/404'
};

module.exports = SystemUrlConfig;