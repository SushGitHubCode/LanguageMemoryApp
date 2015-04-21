memoryAlphabetApp.controller('VarnamalaCtrl', function VarnamalaCtrl($scope, varnamala1, varnamala2, varnamala3, vyanjan1) {
  
  $scope.varnamala1 = varnamala1;
  $scope.varnamala2 = varnamala2;
  $scope.varnamala3 = varnamala3;

  $scope.vyanjan1 = vyanjan1;


  $scope.varnamala_tab = true;

      // we will store all of our form data in this object
    $scope.formData = {};
    
    // function to process the form
    $scope.processForm = function() {
        alert('उत्कृष्ट!');  
    };
    
});

