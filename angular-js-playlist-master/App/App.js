var app = angular.module('MyApp', ["ngStorage","ui.grid",'ui.grid.edit', 'ui.grid.cellNav'])
        app.controller('MyController', function ($scope, $localStorage, $sessionStorage, $window) {

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
            var StudentList1=[];

            $scope.Save = function () {

            var StudentObj= {};







                StudentObj["Name"]=$scope.name;
                StudentObj["Email"]=$scope.email;
                StudentObj["Age"]=$scope.age;
                StudentObj["University"]=$scope.university;
                StudentObj["Department"]=$scope.department;
                StudentObj["Password"]=$scope.password;
                StudentObj["Hobby"]=$scope.hobby;
                console.log(StudentObj);
                StudentList.push (StudentObj);
                console.log(StudentList);
                $localStorage.LocalMessage=StudentList;
                console.log("message")
                console.log($localStorage.LocalMessage);
                $scope.gridOptions.data =$localStorage.LocalMessage;


              }



               $scope.Get = function () {

                          }

        });
