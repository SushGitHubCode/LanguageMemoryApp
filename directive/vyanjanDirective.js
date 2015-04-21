memoryAlphabetApp.directive("vyanjanDirective", function(){
  return {
    restrict:"E",
    replace: true,
    scope: {
            //vyanjan : '@',
            tile: '='
        },
    templateUrl:"vyanjanDirective.html"
  }
}) ;