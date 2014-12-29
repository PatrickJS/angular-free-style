(function(global, angular, freeStyle) {

  function $FreeStyle() {
    return freeStyle;
  }

  angular.module('ngFreeStyle', [])
  .factory('$freeStyle', $FreeStyle)
  .factory('FreeStyle', $FreeStyle);

  angular.module('angular-free-style', ['ngFreeStyle']);

}(window, window.angular, window.freeStyle));
