angular.module('app.controllers', [])
  
.controller('remake3RCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('connexionCtrl', ['$scope', '$stateParams', '$http', '$location', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, $location, $ionicPopup) {


    var myAlert = function (titre, msg, action){
       var alertPopup = $ionicPopup.alert({
     title: titre,
     template: msg
   })

   alertPopup.then(function(res) {
     console.log('ok')
     if(action == "collecteur"){
         $location.path('/pc')
     }
   })
 }

    $scope.connect = function (){

        var login = this.pseudo, pass = this.pass, tb = [login, pass], user, donne, trouve = 0
    
        var verif = function (log, pa){
           if(log && pa){
               return true
           }
            else{
                return false
            }
           
        }
        
        if(verif(login, pass)){
            var cpt = 0
            $http.get('http://localhost:8000/acheteurs/')
            .success(function (data, status, headers, config) {
                for(var i = 0; i < data.length; i++){
                    if(data[i].mail == login && data[i].mdp == pass){
                        user = "acheteur" 
                        myAlert('Infos', 'Bienvenue !', user)
                        donne = data[i]
                        break
                    }
                    else{
                        cpt++
                    }
                }
                if(cpt == data.length){
                    trouve++
                }
            })
            .error(function (data, status, headers, config) {
                myAlert('Infos', 'Une erreur est survenue lors de l\'authentification !')
            })

        $http.get('http://localhost:8000/collectionneurs/')
            .success(function (data, status, headers, config) {
                var cp = 0
                for(var i = 0; i < data.length; i++){
                    if(data[i].mail == login && data[i].mdp == pass){
                        user = "collecteur" 
                        myAlert('Infos', 'Bienvenue !', user)
                        donne = data[i]
                        console.log(donne)
                        break
                    }
                    else{
                        cp++
                    }
                }
                if(cp == data.length){
                    trouve++
                }
                if(trouve == 2){
                    myAlert('Infos','Login ou mot de passe incorrecte !')
                }
            })
            .error(function (data, status, headers, config) {
                myAlert('Infos', 'Une erreur est survenue lors de l\'authentification !')
            })  
                   
        }
        else{
            myAlert('Infos', 'Login ou mot de passe incorrecte !')
        }     

    }


}])
   
.controller('inscriptionCtrl', ['$scope', '$stateParams', '$http', '$ionicPopup', '$location',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, $ionicPopup, $location) {

    var myAlert = function (titre, msg, action){
       var alertPopup = $ionicPopup.alert({
     title: titre,
     template: msg
   })

   alertPopup.then(function(res) {
     console.log('ok')
     if(action){
         $location.path('/login')
     }
   })
 }    

    $scope.sign = function(){
        var nom = this.nom, prenom = this.prenom, mail = this.mail,
            mdp = this.mdp, cmdp = this.cmdp, tel = parseInt(this.tel), categ = this.categ,
            sexe = this.sexe, pseudo = this.pseudo,
            tb = [nom, prenom, mail, mdp, cmdp, tel, categ, sexe, pseudo]

        var chaineVide = function (tab){
            var a = 0
            for(var i = 0; i < tab.length; i++){
                if(tab[i] != ""){
                    a++
                }
            }
            if(a == tab.length){
                return true
            }
            else{
                return false
            }
        }

        var verif = function(email, tele){
            var regexTel = /^(76|77|78|70|33)[0-9]{7}$/,
            regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/
            if(regexMail.test(email) && regexTel.test(tele)){
                return true
            }
            else{
                return false
            }
        }

        var verifMdp = function (m1, m2){
            if(m1 == m2){
                return true
            }
            else{
                return false
            }
        }
            
            if(chaineVide(tb)){
               if(categ == "acheteur"){
                if(verif(mail, tel)){
                    if(verifMdp(mdp, cmdp)){
                        $http.post('http://localhost:8000/acheteurs/', {nom: nom, prenom: prenom, pseudo: pseudo, mdp: mdp,
                            tel: tel, sexe: sexe, mail: mail})
                            .success(function () {
                                var a = true
                                myAlert('Infos','Enregistrement effectué ! A présent, Veuillez vous authentifier svp.',a)
                            })
                            .error(function () {
                                myAlert('Infos','Une erreur est survenue lors de l\'enregistrement !')
                            })
                    }
                        else{
                            myAlert('Infos','Erreur au niveau des mots de passe !')
                        }
                }
                    else{
                        myAlert('Infos','Mail ou Téléphone invalide !')
                    }
               }
                else{ 
                    myAlert('Infos','Veuillez remplir tous les champs svp !')
                }
            }        
    }


}])
   
.controller('pointsDeCollecteCtrl', ['$scope', '$stateParams','$ionicPopover', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicPopover) {
    $ionicPopover.fromTemplateUrl('templates/popover.html', {
      scope: $scope
   }).then(function(popover) {
      $scope.popover = popover;
   });

   $scope.openPopover = function($event) {
      $scope.popover.show($event);
   };

   $scope.closePopover = function() {
      $scope.popover.hide();
   };

   //Cleanup the popover when we're done with it!
   $scope.$on('$destroy', function() {
      $scope.popover.remove();
   });

   // Execute action on hide popover
   $scope.$on('popover.hidden', function() {
      // Execute action
   });

   // Execute action on remove popover
   $scope.$on('popover.removed', function() {
      // Execute action
   });


}])
   
.controller('ajouterPointDeCollecteCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('infosPointsDeCollecteCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
/**
 * Fonctions ajout et diminu ajouter par moi !
 */

$scope.ajout = function (){
    var val = parseInt(document.getElementById('val').textContent)
   document.getElementById('val').innerHTML = val + 1
}

$scope.diminu = function (){
    var val = parseInt(document.getElementById('val').textContent)
   document.getElementById('val').innerHTML = val - 1
   if(val == 0){
       document.getElementById('val').innerHTML = 0
   }
}


}])
   
.controller('clientCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])