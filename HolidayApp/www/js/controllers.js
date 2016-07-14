angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, Holidays) {
   $scope.today = 'Jul 10';
   $scope.year = ', 2016'
   $scope.holidays = Holidays.get($scope.today);
   console.log($scope.holidays);
})

.controller('CalendarCtrl', function($scope, Holidays) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  

 setTimeout(function(){ 
  var eventsLabel = document.getElementsByClassName('no-event-label')[0];
    // console.log(eventsLabel);  
       eventsLabel.remove();
  }, 0)

  var calendarList = document.getElementsByClassName('calendar-list')[0];
  var date = 'Jul 10';
   $scope.holidays = Holidays.get(date);
   // console.log($scope.holidays);
    var innerHTML = '';
    for (var i =0; i < $scope.holidays.length; i++) {
      innerHTML += '<div class="item holiday-title">' + $scope.holidays[i].name + '</div>'
    }
    calendarList.innerHTML = innerHTML;

  $scope.onTimeSelected = function (selectedTime) {
    // console.log(selectedTime.toString().slice(4, 10));
    var date = selectedTime.toString().slice(4, 10);
    $scope.holidays = Holidays.get(date);
    var innerHTML = '';
    for (var i =0; i < $scope.holidays.length; i++) {
      innerHTML += '<div class="item holiday-title">' + $scope.holidays[i].name + '</div>'
    }
    calendarList.innerHTML = innerHTML;
   };

})

.controller('SpecialsCtrl', function($scope) {
});
