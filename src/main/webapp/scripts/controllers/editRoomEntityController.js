

angular.module('reserveyourroombackend').controller('EditRoomEntityController', function($scope, $routeParams, $location, flash, RoomEntityResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.roomEntity = new RoomEntityResource(self.original);
        };
        var errorCallback = function() {
            flash.setMessage({'type': 'error', 'text': 'The roomEntity could not be found.'});
            $location.path("/RoomEntities");
        };
        RoomEntityResource.get({RoomEntityId:$routeParams.RoomEntityId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.roomEntity);
    };

    $scope.save = function() {
        var successCallback = function(){
            flash.setMessage({'type':'success','text':'The roomEntity was updated successfully.'}, true);
            $scope.get();
        };
        var errorCallback = function(response) {
            if(response && response.data && response.data.message) {
                flash.setMessage({'type': 'error', 'text': response.data.message}, true);
            } else {
                flash.setMessage({'type': 'error', 'text': 'Something broke. Retry, or cancel and start afresh.'}, true);
            }
        };
        $scope.roomEntity.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/RoomEntities");
    };

    $scope.remove = function() {
        var successCallback = function() {
            flash.setMessage({'type': 'error', 'text': 'The roomEntity was deleted.'});
            $location.path("/RoomEntities");
        };
        var errorCallback = function(response) {
            if(response && response.data && response.data.message) {
                flash.setMessage({'type': 'error', 'text': response.data.message}, true);
            } else {
                flash.setMessage({'type': 'error', 'text': 'Something broke. Retry, or cancel and start afresh.'}, true);
            }
        }; 
        $scope.roomEntity.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});