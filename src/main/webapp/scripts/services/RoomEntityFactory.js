angular.module('reserveYourRoomBackend').factory('RoomEntityResource', function($resource){
    var resource = $resource('rest/roomentities/:RoomEntityId',{RoomEntityId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});