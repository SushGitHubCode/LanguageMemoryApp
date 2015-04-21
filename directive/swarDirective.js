memoryAlphabetApp.directive("swarDirective", function(){
  return {
    restrict:"EA",
    replace: true,
    scope: {
            swar : '@',
            tile: '='
        },
    templateUrl:"swarDirective.html"
  }
}) ;