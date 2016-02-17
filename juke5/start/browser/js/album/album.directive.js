juke.directive('allAlbums', function(PlayerCtrl) {
  return {
    restrict: 'E',
    templateUrl: '/js/album/templates/albums.directive.html',
    scope: {
      albums: '='
    }
  }
})