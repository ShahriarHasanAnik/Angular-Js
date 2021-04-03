var app = angular.module('MyApp', ["ngStorage","ui.grid",'ui.grid.edit', 'ui.grid.cellNav'])
        app.controller('MyController', function ($scope, $localStorage, $sessionStorage, $window, $http) {

$scope.count=0;
          $scope.gridOptions = {


           paginationPageSizes: [5, 10, 20],
           paginationPageSize: 5,
           enableFiltering: true,
           showGridFooter: true,
           enableGridMenu: true,


          columnDefs: [

          { field: 'Name',enableCellEdit: true },
          { field: 'Email',enableCellEdit: true },
          { field: 'Age',enableSorting: true,enableCellEdit: true },
          { field: 'University',enableCellEdit: true },
          { field: 'Department',enableCellEdit: true },
          { field: 'Password',enableCellEdit: true },
          { field: 'Hobby',enableCellEdit: true},

          ],

          onRegisterApi: function (gridApi) {

          $scope.grid1Api = gridApi;
           }

          };

            var StudentList=[];
            if($localStorage.LocalMessage.length>0)
            {
            $scope.gridOptions.data =$localStorage.LocalMessage;
            console.log(  $scope.gridOptions.data );
            }


            $scope.Save = function () {

            var StudentObj= {};

                StudentObj["Name"]=$scope.name;
                StudentObj["Email"]=$scope.email;
                StudentObj["Age"]=$scope.age;
                StudentObj["University"]=$scope.university;
                StudentObj["Department"]=$scope.department;
                StudentObj["Password"]=$scope.password;
                StudentObj["Hobby"]=$scope.hobby;
                //console.log(StudentObj);
                StudentList.push (StudentObj);
                console.log(StudentList);
                $localStorage.LocalMessage=StudentList;
                //console.log("message")
               $scope.gridOptions.data =$localStorage.LocalMessage;
              }


               $scope.gridOptions1 = {


                         paginationPageSizes: [5, 10, 20],
                         paginationPageSize: 5,
                         enableFiltering: true,
                         showGridFooter: true,
                         enableGridMenu: true,


                        columnDefs: [

                        { field: 'Price',enableCellEdit: true },
                        { field: 'Action',enableCellEdit: true },


                        ],

                        onRegisterApi: function (gridApi) {

                        $scope.grid1Api = gridApi;
                         }

                        };


             $http({

             method: 'GET',

             url: 'https://www.ag-grid.com/example-assets/row-data.json'

             }).then(function success(response) {

             $scope.gridOptions1.data = response.data;


             }, function error(response) {

             });



               $scope.Get = function () {

                          }

        });
