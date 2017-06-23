angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('remake3R', {
    url: '/home',
    templateUrl: 'templates/remake3R.html',
    controller: 'remake3RCtrl'
  })

  .state('connexion', {
    url: '/login',
    templateUrl: 'templates/connexion.html',
    controller: 'connexionCtrl'
  })

  .state('inscription', {
    url: '/signin',
    templateUrl: 'templates/inscription.html',
    controller: 'inscriptionCtrl'
  })

  .state('pointsDeCollecte', {
    url: '/pc',
    templateUrl: 'templates/pointsDeCollecte.html',
    controller: 'pointsDeCollecteCtrl'
  })

  .state('ajouterPointDeCollecte', {
    url: '/ajoutpc',
    templateUrl: 'templates/ajouterPointDeCollecte.html',
    controller: 'ajouterPointDeCollecteCtrl'
  })

  .state('infosPointsDeCollecte', {
    url: '/infopc',
    templateUrl: 'templates/infosPointsDeCollecte.html',
    controller: 'infosPointsDeCollecteCtrl'
  })

  .state('client', {
    url: '/pageClient',
    templateUrl: 'templates/client.html',
    controller: 'clientCtrl'
  })

$urlRouterProvider.otherwise('/home')


});