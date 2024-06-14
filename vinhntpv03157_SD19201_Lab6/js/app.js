const app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.ages = [
        {
            age: "Dưới 25 tuổi",
            rate: 0.07
        },
        {
            age: "Từ 25 đến 40 tuổi",
            rate: 0.1
        },
        {
            age: "Trên 40 tuổi",
            rate: 0.15
        }
    ];

    $scope.calculateBonus = function() {
        if ($scope.salary && $scope.selectedAge) {
            const selectedAgeObj = $scope.ages.find(ageGroup => ageGroup.age === $scope.selectedAge.age);
            if (selectedAgeObj) {
                let bonus = selectedAgeObj.rate * $scope.salary;
                if ($scope.gender === "NU") {
                    bonus += 200000;
                }
                $scope.bonus = bonus;
            } else {
                $scope.bonus = 0;
            }
        } else {
            $scope.bonus = 0;
        }
    };
});

app.controller("Bai2",function($scope){
$scope.items = [
    {
        name:"Nước ngọt",
        price: 10000
    },
    {
        name:"Cà phê đen",
        price: 12000
    },
    {
        name:"Thuốc lá",
        price: 18000
    }
];
$scope.getAmount = function (){
    var amount = 0;
    for(var i = 0; i < $scope.items.length; i++){
        if($scope.items[i].buy){
            amount += $scope.items[i].price * $scope.items[i].quantity;
        }
    }
    return amount;
}
})
app.controller('Bai4', function($scope) {
    $scope.student = {};

    $scope.saveStudent = function(form) {
        if (form.$valid) {
            console.log('Thông tin sinh viên:', $scope.student);
            alert('Thông tin đã được lưu thành công');
        } else {
            alert('Vui lòng nhập đúng thông tin.');
        }
    };
});