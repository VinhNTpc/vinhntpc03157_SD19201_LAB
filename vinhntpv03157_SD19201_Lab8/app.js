const app = angular.module("Lab8", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
        .when("/",{
            templateUrl: "./particals/home.html"
        })
        .when("/product",{
            templateUrl: "./particals/product.html"
        })
        .when("/detail/:name",{
            templateUrl: "./particals/detail.html",
            controller: productDetail
        })
        .when("/sign-in",{
            templateUrl: "./particals/sign-in.html"

        })
        .when("/sign-up",{
            templateUrl: "./particals/sign-up.html"
        })

})
// function    homeController($scope){
//     $scope.isLogin = true;
//     $scope.mark = 5;
//
//     $scope.message = " welcome to the home"
// }

function  productDetail($scope, $routeParams){
    $scope.product_name = $routeParams.name;
}