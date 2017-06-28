angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', ["$http", function($http){

    let devUrl = 'http://localhost:3000'
    let herokuUrl = 'https://peoplecode.herokuapp.com'

    this.getdata = function(){
        return $http.get(devUrl + '/api/getQuestionData')
    }
    console.log('asdof')
}]);