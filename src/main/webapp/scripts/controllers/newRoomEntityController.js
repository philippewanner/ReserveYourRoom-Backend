
angular.module('reserveyourroombackend').controller('NewRoomEntityController', function ($scope, $location, locationParser, flash, RoomEntityResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.roomEntity = $scope.roomEntity || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            flash.setMessage({'type':'success','text':'The roomEntity was created successfully.'});
            $location.path('/RoomEntities');
        };
        var errorCallback = function(response) {
            if(response && response.data && response.data.message) {
                flash.setMessage({'type': 'error', 'text': response.data.message}, true);
            } else {
                flash.setMessage({'type': 'error', 'text': 'Something broke. Retry, or cancel and start afresh.'}, true);
            }
        };
        RoomEntityResource.save($scope.roomEntity, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/RoomEntities");
    };
});