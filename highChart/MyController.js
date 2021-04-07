app.controller('MyController', function($scope,$rootScope, $localStorage, $sessionStorage, $window, $http, uiGridConstants) {

$scope.choose=function(para)
{
var highArray=[];
var param="";
$scope.param = para
if($scope.param=="bar")
{
highArray.push(1,2,3,4,5,6);
console.log(highArray);
}
else if($scope.param=="pie")
{
highArray.push(5,7,3,34,5,6);
console.log(highArray);
}
else if($scope.param=="scatter")
{
highArray.push(5,7,5,34,4,6);
console.log(highArray);
}
else if($scope.param=="areaspline")
{
highArray.push(5,7,5,34.4,100,6);
console.log(highArray);
}
else if($scope.param=="line")
{
highArray.push(102,1,5,34.4,100,6);
console.log(highArray);
}
console.log($scope.param);

Highcharts.chart('container', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: true,
    type: $scope.param
  },
  title: {
    text: 'My Score As a Batsman'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
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