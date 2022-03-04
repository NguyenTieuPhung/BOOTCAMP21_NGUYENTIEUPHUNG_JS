/* 
Bài 5: Tính tổng 2 ký số
* B1: nhập vào 1 số có 2 chữ số
var nhap = 75;

* B2: lấy số hàng đơn vị
var donVi = nhap % 10;

* B3: lấy số hàng chục
var hangChuc = Math.floor(nhap / 10);

* B4: tổng số hàng đơn vị và hàng chục
var tong = donVi + hangChuc;

 * B5: print tổng 2 ký số
Tổng 2 ký số là: 12
*/
var nhap = 75;
var donVi = nhap % 10;
var hangChuc = Math.floor(nhap / 10);
var tong = donVi + hangChuc;

console.log("Tổng 2 ký số là: " + tong);
