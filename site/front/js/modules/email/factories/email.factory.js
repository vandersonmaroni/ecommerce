'use strict';

var factoriesModule = require('./_index');

/**
 * @ngInject
 */
function emailBuilder() {

  function buildRegisterConfirmation(user) {
    return {
      "config":         "default",
      "templateName":   "register",
      "to":             user.email,
      "subject":        "Confirmação de cadastro",
      "templateParams": {
        "name":     user.name,
        "email":    user.email
      }
    };
  }

  function buildUserChange(user) {
    return {
      "config":         "default",
      "templateName":   "change-account",
      "to":             user.email,
      "subject":        "Alteração de informações",
      "templateParams": {
        "name":     user.name,
        "email":    user.email
      }
    };
  }

  function buildContact(body) {
    return {
      "config":         "naoresponder",
      "templateName":   "contact",
      "to":             'nicolas.ibanheiz@gmail.com',
      "subject":        "Contato pelo site",
      "templateParams": {
        "name":     body.name,
        "email":    body.email,
        "message":  body.message
      }
    };
  }

  return {
    buildRegisterConfirmation: buildRegisterConfirmation,
    buildUserChange: buildUserChange,
    buildContact: buildContact
  };
}

factoriesModule.factory('emailBuilder', emailBuilder);