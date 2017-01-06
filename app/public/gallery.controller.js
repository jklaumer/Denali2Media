(function() {
    'use strict';

    angular
        .module('app')
        .controller('galleryController', galleryController);

    galleryController.$inject = ['http','galleryService'];

    /* @ngInject */
    function Controller($http, galleryService) {
        var vm = this;
        vm.title = 'galleryController';
        vm.photos = [];
        vm.SOMETHING = false;
        vm.searchResults = '';


        activate();

        ////////////////

        function activate() {
        }


        vm.showPhotos = function(photoTitle) {
            console.log(photoTitle);
            vm.SOMETHING = true;
            galleryService.getPhoto(photoTitle).then(function(response) {

                console.log(response);

                vm.movies = response;
                vm.searchResults = response.length;

                console.log(response.length);
            })

        }
    }
})();

