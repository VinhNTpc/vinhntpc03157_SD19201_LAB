const app = angular.module('myApp', []);
app.filter('percentage', ['$filter', function ($filter) {
    return function (input, decimals) {
        return $filter('number')(input * 100, decimals) + '%';
    };
}]);

app.controller('ProductController', function($scope, $http) {
    $scope.products = [];

    var url = 'http://localhost:3000/products';
    $http({
        method: 'GET',
        url: url
    }).then(function successCallback(response) {
        $scope.products = response.data;
    }, function errorCallback(response) {
        console.error('Lỗi khi lấy danh sách sản phẩm:', response.statusText);
    });
});