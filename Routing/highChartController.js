app.controller('highChartController', function($scope, $localStorage, $sessionStorage, $window, $http, uiGridConstants) {

$scope.choose=function(_type,_id,_data)
{
var param="";
var id="";
$scope.param = _type;
$scope.id = _id;
console.log(_data);
console.log($scope.param);

Highcharts.chart($scope.id, {
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
      y: _data[0],
      sliced: true,
      selected: true
    }, {
      name: '2nd match',
      y:  _data[1]
    }, {
      name: '3rd match',
      y:  _data[2]
    }, {
      name: '4th match',
      y:  _data[3]
    }, {
      name: '5th match',
      y:  _data[4]
    }, {
      name: '6th match',
      y:  _data[5]
    }]
  }]
});
}

});