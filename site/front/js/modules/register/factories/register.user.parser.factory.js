'use strict';

var factoriesModule = require('./_index');

/**
 * @ngInject
 */
function userParser() {

  function parseFromFacebook (userFB) {
    return {
      name:         userFB.name,
      email:        userFB.email,
      genre:        (userFB.gender === 'male') ? 'Masculino' : 'Feminino',
      idFacebook:   userFB.id,
      typeInsert:   'facebook'
    };
  }

  function parseFromGoogle (userGoogle) {
    return {
      name:         userGoogle.name,
      email:        userGoogle.email,
      genre:        (userGoogle.gender === 'male') ? 'Masculino' : 'Feminino',
      idGoogle:     userGoogle.id,
      typeInsert:   'google'
    };
  }

  return {
    parseFromFacebook: parseFromFacebook,
    parseFromGoogle: parseFromGoogle
  };
}

factoriesModule.factory('userParser', userParser);