var app = angular.module('timeLeft', ['ui.router']);

app.controller('MainController',
    [
        '$scope',
        '$interval',
        function($scope, $interval) {
          var lifeExpectancy;

          lifeExpectancy = 83;

          $interval(
              function() {
                var currentDate,
                    timeLeft,
                    yearsLeft,
                    monthsLeft,
                    daysLeft,
                    hoursLeft,
                    minutesLeft,
                    secondsLeft;

                if (moment($scope.birthDate, 'YYYY-MM-DD', true).isValid()) {
                  console.log($scope.birthDate);
                  currentDate = moment();

                  timeLeft = moment($scope.birthDate);
                  timeLeft.add(lifeExpectancy, 'years');

                  yearsLeft = timeLeft.diff(currentDate, 'years');

                  timeLeft.subtract(yearsLeft, 'years');
                  monthsLeft = timeLeft.diff(currentDate, 'months');

                  timeLeft.subtract(monthsLeft, 'months');
                  daysLeft = timeLeft.diff(currentDate, 'days');

                  timeLeft.subtract(daysLeft, 'days');
                  hoursLeft = timeLeft.diff(currentDate, 'hours');

                  timeLeft.subtract(hoursLeft, 'hours');
                  minutesLeft = timeLeft.diff(currentDate, 'minutes');

                  timeLeft.subtract(minutesLeft, 'minutes');
                  secondsLeft = timeLeft.diff(currentDate, 'seconds');

                  $scope.msg = 'You have ' + yearsLeft + 'y ' + monthsLeft + 'm ' + daysLeft + 'd ' + hoursLeft + 'h ' + minutesLeft + 'm ' + secondsLeft + 's left';
                }
                else {
                  $scope.msg = '';
                }
              },
              1000,
              0
          );
        }
    ]
);

app.config(
  [
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('index', {
        url: '/',
        templateUrl: 'index.html',
        controller: 'MainController'
      });
      $urlRouterProvider.otherwise('/');
    }
  ]
);
