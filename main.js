// Bài 1
// Input:lương 1 ngày
// Process:
//     1:lương 1 ngày=100000; số ngày làm=28 ngày
//     2:công thức: lương 1 ngày* số ngày làm
//     3:in kết quả
// Output:Tiền lương
function Salary() {
  var WorkingDay = document.getElementById("WorkingDay").value*1;
  var SalaryPerDay = document.getElementById("SalaryPerDay").value*1;
  // xu ly
  var TotalSalary = SalaryPerDay * WorkingDay;
  // dau ra
  document.getElementById("Ketqua").innerHTML = "Kết quả là " + TotalSalary;
}

// Bài 2
// Input: cho 5 số thực
// Process:
//     1:cho 5 số thực a b c d e
//     2 công thức: (a+b+c+d+e)/5
//     3:in kết quả:
// Output:giá trị trung bình 5 số thực
function Average(){
var a = document.getElementById("number1").value*1;
var b = document.getElementById("number2").value*1;
var c = document.getElementById("number3").value*1;
var d = document.getElementById("number4").value*1;
var e = document.getElementById("number5").value*1;
var Average = (a + b + c + d + e) / 5;
document.getElementById("Ketqua2").innerHTML ="Kết quả "+ Average;
}
// Bài 3:
// Input:giá 1 usd =23.500vnd
// Process:
//     1: 1 USD=23500 vnd, số USD cần qui đổi = 5 USD
//     2: công thức: Quality * 23500
//     3:in kết quả
// output: USD sau qui đổi
function VndMoney(){
var QuantityUsd = document.getElementById("QuantityUsd").value;
var Usd = 23500
var VndMoney = Usd * QuantityUsd;
document.getElementById("Ketqua3").innerHTML ="Giá USD sau qui đổi thành tiền Việt:" + VndMoney;
}
// Bài 4:
// Input:Cho chiều dài;  chiều rộng;
// Process:
//     1:cho chiều dài = 10cm; chiều rông = 15cm;
//     2:công thuc tinh dien tich = cdai * crong ; cong thuc tinh chu vi HCN = (cdai+crong)*2
//     3:in kết quả diện tích , chu vi
// Output: Diện tích, chu vi
function CVDT(){
var width = document.getElementById("width").value;
var height = document.getElementById("height").value;
var AreOfARectangle = width * height;
var PreimeterOfARectangle = (width + height) * 2;
document.getElementById("Ketqua4").innerHTML="Diện tích:"+ AreOfARectangle + " Chu vi:" + PreimeterOfARectangle;
}
// Bài 5
// Input: cho 1 số có 2 chữ số;
// Process:
//     1: cho số n = 29
//     2: num1 = n %10;
//         num2 = Math.floor(n/10);
//     Công thức: num1 + num 2;
//     3 in kết quả
// Output: tổng 2 chữ số của 1 số;
function sum2number(){
var n = document.getElementById("n").value;
var num1 = n % 10;
var num2 = Math.floor(n / 10);
var sum2number = num1 + num2;
document.getElementById("Ketqua5").innerHTML= "Tổng 2 kí số của số vừa nhập: "+ sum2number;
}