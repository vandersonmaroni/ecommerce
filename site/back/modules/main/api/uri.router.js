module.exports = function (express) {
  "use strict";
  var router    = express.Router(),
      os        = require('os'),
      request   = require('request'),
      config    = require('./../../../config/config')();

  function _getIPV4() {
    var interfaces = os.networkInterfaces();
    var addresses = [];
    for (var k in interfaces) {
        for (var k2 in interfaces[k]) {
            var address = interfaces[k][k2];
            if (address.family === 'IPv4' && !address.internal) {
                addresses.push(address.address);
            }
        }
    }
    return addresses[0];
  }

  router.get('/system/uri/siteapi', function (req, res) {
    res.json('http://' + _getIPV4() + ':' + config.api.portSiteApi);
  });

  router.get('/system/uri/signupapi', function (req, res) {
    res.json('http://' + _getIPV4() + ':' + config.api.portSignupApi);
  });

  router.get('/system/uri/signinapi', function (req, res) {
    res.json('http://' + _getIPV4() + ':' + config.api.portSigninApi);
  });

  router.get('/system/uri/paymentapi', function (req, res) {
    res.json('http://' + _getIPV4() + ':' + config.api.portPaymentApi);
  });

  router.get('/system/uri/email', function (req, res) {
    res.json('http://' + _getIPV4() + ':' + config.api.portEmailApi);
  });

  router.get('/system/uri/credentialapi', function (req, res) {
    res.json('http://' + _getIPV4() + ':' + config.api.portEmailApi);
  });

  router.get('/address/:zipcode', function (req, res) {
    request('http://apps.widenet.com.br/busca-cep/api/cep.json?code=' + req.params.zipcode, function (error, response, body) {
      res.status(response.statusCode);
      res.json(JSON.parse(body));
    });
  });

  return router;
};