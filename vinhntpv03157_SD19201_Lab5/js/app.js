const app = angular.module("lab5", []);

app.service('StudentService', function() {
    var students = [
        {
            fullname: "Nguyễn Văn Tèo",
            birthday: "20-01-1995",
            mark: "8.5"
        },
        {
            fullname: "Phạm Thị Nở",
            birthday: "15-11-1985",
            mark: "5.5"
        }
    ];

    this.getStudents = function() {
        return students;
    };

    this.addStudent = function(student) {
        students.push(student);
    };

    this.updateStudent = function(index, student) {
        students[index] = student;
    };

    this.deleteStudent = function(index) {
        students.splice(index, 1);
    };
});

app.controller('myctrl1', function ($scope, $location, StudentService) {
    $scope.student = {};
    $scope.isEditing = false; // Biến để kiểm tra xem có đang ở chế độ sửa không

    $scope.save = function () {
        if ($scope.isEditing) {
            // Nếu đang ở chế độ sửa, cập nhật sinh viên
            StudentService.updateStudent($scope.editingIndex, angular.copy($scope.student));
            $scope.isEditing = false; // Chuyển về chế độ thêm mới
        } else {
            // Nếu không, thêm sinh viên mới
            StudentService.addStudent(angular.copy($scope.student));
        }
        $scope.student = {}; // Đặt lại student để làm sạch form
        $scope.students = StudentService.getStudents(); // Cập nhật lại danh sách sinh viên
    };

    $scope.cancel = function () {
        $scope.student = {}; // Đặt lại student để làm sạch form
        $scope.isEditing = false; // Đặt lại biến isEditing
    };

    // Hàm để chuyển sang chế độ sửa thông tin sinh viên
    $scope.editStudent = function(index) {
        $scope.student = angular.copy($scope.students[index]);
        $scope.editingIndex = index; // Lưu lại index của sinh viên đang sửa
        $scope.isEditing = true; // Chuyển sang chế độ sửa
    };
});

app.controller("myctrl2", function ($scope, StudentService) {
    $scope.students = StudentService.getStudents();

    $scope.delete = function (index) {
        StudentService.deleteStudent(index);
        $scope.students = StudentService.getStudents();
    };
});
app.controller("ProductController", function ($scope) {
    // Sample product data
    $scope.products = [
        {
            name: "Áo thun nam",
            price: 250000,
            description: "Áo thun cotton 100%, thấm hút mồ hôi tốt.",
            image: "https://tse4.mm.bing.net/th?id=OIP.OFEH1_fhu1lO2diaKJ0BhAHaHa&pid=Api&P=0&h=180"
        },
        {
            name: "Quần jeans nữ",
            price: 450000,
            description: "Quần jeans dáng skinny, chất liệu co giãn, thích hợp mặc đi làm.",
            image: "https://tse2.mm.bing.net/th?id=OIP.Yxi5PReVGX1MStuXA4FFLAAAAA&pid=Api&P=0&h=180"
        },
        {
            name: "Giày thể thao",
            price: 850000,
            description: "Giày thể thao nam nữ, phong cách trẻ trung, nhẹ nhàng.",
            image: "https://tse3.mm.bing.net/th?id=OIP.4C22HLmbKbLUcl2uM70fLgHaGY&pid=Api&P=0&h=180"
        },
        {
            name: "Balo laptop",
            price: 650000,
            description: "Balo chống nước, chứa laptop 15 inch, nhiều ngăn đựng tiện lợi.",
            image: "https://tse1.mm.bing.net/th?id=OIP.lcD-DgsxgCv6_WLuyA6yCQHaHa&pid=Api&P=0&h=180"
        },
        {
            name: "Áo sơ mi nam",
            price: 300000,
            description: "Áo sơ mi nam cao cấp, phong cách lịch lãm.",
            image: "https://tse3.mm.bing.net/th?id=OIP.Z6LBqeEhXuk2IDVX-_d5hAHaE8&pid=Api&P=0&h=180"
        },
        {
            name: "Váy đầm nữ",
            price: 550000,
            description: "Váy đầm dài công sở, chất liệu thoáng mát, phù hợp đi làm.",
            image: "https://tse1.mm.bing.net/th?id=OIP.pPkFNujES9FRdL3OP14FgwHaHa&pid=Api&P=0&h=180"
        },
        {
            name: "Đồng hồ nam",
            price: 1200000,
            description: "Đồng hồ nam đeo tay, thiết kế đơn giản, sang trọng.",
            image: "https://tse4.mm.bing.net/th?id=OIP.8pKMUcnHvxwtTtajRntCQwHaHa&pid=Api&P=0&h=180"
        },
        {
            name: "Bình nước thể thao",
            price: 150000,
            description: "Bình nước thể thao, chất liệu nhựa cao cấp, có vòi uống.",
            image: "https://tse2.mm.bing.net/th?id=OIP.aiW_I9JFm5gvHbfgjSIGCQHaHa&pid=Api&P=0&h=180"
        }
    ];


    // Function to add product to cart (sample function)
    $scope.addToCart = function (product) {
        alert('Đã thêm ' + product.name + ' vào giỏ hàng!');
        // Here you can implement cart functionality if needed
    };
});