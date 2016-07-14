angular.module('starter.services', [])

.factory('Holidays', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var holidays = [{
    name: 'July 9th Holiday',
    day: 'Jul 09'
  },
  {
    name: 'Other July 9th Holiday',
    day: 'Jul 09'
  }, {
    name: 'July 10th Holiday',
    day: 'Jul 10'
  },
  {
    name: 'Christmas',
    day: 'Dec 25'
  }];

  return {
    all: function() {
      return holidays;
    },
    get: function(date) {
      var holidaysArray = [];
      for (var i = 0; i < holidays.length; i++) {
        if (holidays[i].day == date) {
          holidaysArray.push(holidays[i]);
          
        }
      }
      return holidaysArray;
    }
  };
});
