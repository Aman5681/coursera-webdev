(function () {
  "use strict";

  angular.module("LunchCheck", []).controller("LunchChecker", LunchChecker);

  LunchChecker.$inject = ["$scope"];

  function LunchChecker($scope) {
    $scope.name = "momo,manchurian,friedrice";
    $scope.msg = "";

    $scope.display = function () {
      var MSGs = checkMeals($scope.name);
      $scope.msg = MSGs;
    };

    function checkMeals(string) {
      var rMsg = "";
      var strinC = string.length; // store store length of text fileds
      if (strinC > 0) {
        var countC = string.split(",").length;
        $scope.msgS = {
          color: "green",
          padding: "5px",
          border: "1px solid green",
        };
        if (countC <= 3) {
          rMsg = "Enjoy!";
        } else {
          rMsg = "Too Much!";
        }
        return rMsg;
      } else {
        $scope.msgS = {
          color: "red",
          padding: "5px",
          border: "1px solid red",
        };
        rMsg = "Please enter data first!";
        return rMsg;
      }
    }
  }
})();
