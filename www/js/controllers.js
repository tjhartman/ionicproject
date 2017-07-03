angular.module('app.controllers', [])
  
.controller('homeCtrl', ['$scope', '$stateParams', 'BlankService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, BlankService) {


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('testCtrl', ['$scope', '$stateParams', 'BlankService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, BlankService) {

$scope.userResults;
$scope.questionId = 1;


       wrap = function(){
           $scope.questionId += 1;
           console.log($scope.questionId)
           BlankService.getdata().then(function (response){
            var questions = response.data
            var group = []
            for (var i = 0; i < questions.length; i++){
                if (questions[i].question_id == $scope.questionId) {
                    group.push(questions[i])
                }
                
            }
        
                $scope.questions = group
                $scope.quest = group[0].question
               
        })}

        wrap()
        
    


    $scope.forward = function(index){
        console.log($scope.questionId)

    }

    // $scope.backward = function(index){
    //     console.log($scope.quetionId)

    // }

    $scope.getResults = function(Results) { 
        var totalResults = {
            "value": Results
        }
        BlankService.postResults(totalResults)
    }

    $scope.runBoth = function(Results) {
        $scope.getResults(Results);
        wrap();
    }

}])
   
.controller('preTestCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('aboutCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('resultsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 