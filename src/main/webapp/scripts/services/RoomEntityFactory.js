angular.module('reserveyourroombackend').factory('RoomEntityResource', function($resource){
    var resource = $resource('api/roomentities/:RoomEntityId',{RoomEntityId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});