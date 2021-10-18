 angular.module('app').controller("AssesmentController", function ($scope,$http) {

    
     $scope.chat={};
     $scope.btnupdateTxt='';
     $scope.chat.msg='test';

     $scope.split = function (){

        $scope.btnupdateTxt='Saving...';
        $http.post("/api/chat/split", JSON.stringify($scope.chat)).then(function (response) {
            console.log(response);       
        });
   
    }
    
    


 });