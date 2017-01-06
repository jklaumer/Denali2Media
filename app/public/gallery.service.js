(function() {
    'use strict';

    angular
        .module('app')
        .factory('galleryService', galleryService);

    galleryService.$inject = ['$http'];

    /* @ngInject */
    function galleryService(d$http) {

        var service = {
            getPhoto: getPhoto
        };
        return service;

        ////////////////

        function getPhoto(photoTitle) {

            return $http({
                    method: 'GET',
                    url: 'http://www.JEFFPHOTOSCRAPEAPI.com/'
                    params: {
                        type: 'photo',
                        x: 'something',
                    }
                })
                .then(function(response) {
                    console.log(response.data.Search);
                    return response.data.Search;
                });
        }


    }
})();
