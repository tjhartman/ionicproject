angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', ["$http", function($http){

    let devUrl = 'http://localhost:3000'
    let herokuUrl = 'https://peoplecode.herokuapp.com'

    this.getdata = function(){
        return $http.get(devUrl + '/api/getQuestionData')
    }

    this.getUser = function() {
    return $http({
      method: 'GET',
      url: devUrl + '/auth/me'
    })
    .then(function(res) {
    console.log(res)
      return res.data;
    })
    .catch(function(err) {
      console.log(err);
    })
  }

  this.postResults = function(Results) {
  return $http.post(devUrl + '/postResults', Results)
  }

}]);