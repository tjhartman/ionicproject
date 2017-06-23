angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function($http){
    this.getdata = function(){
        return $http.get('http://localhost:3000/api/getQuestionData')
    }
}]);