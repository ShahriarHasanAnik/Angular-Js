app.controller('MyController', function($scope,$rootScope, $localStorage, $sessionStorage, $window, $http, uiGridConstants) {

var highArray=[1,22,3,4,5,6,6];

$scope.hchart=function()
{
Highcharts.chart('container', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'My Score As a Batsman'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}</b>'
  },
  accessibility: {
    point: {
      valueSuffix: 'Runs'
    }
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: false
      },
      showInLegend: true
    }
  },
  series: [{
    name: 'Runs',
    colorByPoint: true,
    data: [{
      name: '1st match',
      y: highArray[0],
      sliced: true,
      selected: true
    }, {
      name: '2nd match',
      y:  highArray[1]
    }, {
      name: '3rd match',
      y:  highArray[2]
    }, {
      name: '4th match',
      y:  highArray[3]
    }, {
      name: '5th match',
      y:  highArray[4]
    }, {
      name: '6th match',
      y:  highArray[5]
    }]
  }]
});

}

});