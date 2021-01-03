"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("type");
var _loop_1 = function (i) {
    setTimeout(function () {
        console.log("Đếm", i);
    }, 1000);
};
// var - let - const
// --scope--//
// - var: function scope
// - let: block scope {}
// --hoisting--//
// - var: bị hoisting (hoisting: tự động đưa lên đầu block)
// - let, const: cũng bị hoisting nhưng sẽ bị đưa vào vùng nhớ chết và không dùng được
for (var i = 0; i < 5; i++) {
    _loop_1(i);
}
// -------------------//
// IIFE function: là một function được khởi tạo và thực thi ngay tại thời điểm khởi tạo
for (var i = 0; i < 5; i++) {
    (function (i) {
        setTimeout(function () {
            console.log("Đếm dùng IIFE", i);
        }, 1000);
    })(i);
}
// ------------------- //
// Type
// kiểu String
var userName = "Tèo";
// userName = 10 => Lỗi
// userName = false => Lỗi
userName = "Tí"; // cho phép gán lại đồng kiểu (string)
// kiểu Number
var score = 8;
// score = 'ABC' => Lỗi
score = 9; //cho phép gán lại đồng kiểu (number)
// kiểu Boolean
var isActive = true;
isActive = false;
// Kiểu Array
var numbers = [1, 2, 3];
var apphabets = ["a", "b", "c"];
// Tuple: kiểu array nhưng cố định phần tử trong đó (chiều dài array) nhưng sẽ là nhiều kiểu dữ liệu khác nhau
var tuple1 = ["diemToan", 8];
// kiểu Enum - kiểu chỉ read only và không thể thay đổi (dùng để định nghĩa: color, tiền tệ,...)
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
    Colors["red"] = "#f00";
})(Colors || (Colors = {}));
console.log(Colors.white);
// Colors.white = 'abc' ==> lỗi, vì Enum chỉ readOnly - can't edit
// Kiểu null
var n = null; // khởi tạo ban đầu với kiểu dữ liệu là null
var u = undefined; // Khởi tạo nhưng chưa gắn
// console.log(typeof n);
// console.log(typeof {});
//  Kết hợp nhiều kiểu dữ liệu với nhau trên cùng 1 biến
var result1 = 5;
result1 = "abc";
// Kiểu any
var result2 = 5;
result2 = "abc";
result2 = false;
// Kiểu void: Sử dụng cho function, không cần return khi dùng void
function foo() {
    console.log("Hello foo");
}
var sinhVien = {
    // Cần phải khai báo đủ tất cả kiểu dữ liệu đã khai báo, nếu không sẽ lỗi missing
    hoTen: "Nguyễn Văn A",
    tuoi: 15,
    lop: "FE54",
};
// ----- Khắc phục lỗi undefine
// let data = {
// };
// data.lichChieu.map(() => {}); // ==> lỗi undefine vì lichChieu đang rỗng
// // falsy value '&&' : null, undefine, 0, '', false
// data && data.lichChieu && data.lichChieu.map();
// // Optional chaining: TS require version >= 3.7
// data?.lichChieu?.map();
// -------
// nullish coalescing '??': Liên kết vô giá trị -> chỉ kiểm tra 'null' or 'undefine'
var diemToan = 0;
var ketQua1 = diemToan || "N/A";
var ketQua2 = diemToan !== null && diemToan !== void 0 ? diemToan : "N/A"; // sử dụng nullish coalescing: khắc phục lỗi undefine trả ra "N/A khi giá trị bằng 0"
console.log("ketqua", ketQua1);
console.log("ketqua", ketQua2);
//--
// Genaric
function getResult(value) {
    // Đổi thành kiểu Type 'tự định nghĩa'
    return value;
}
var res1 = getResult("Hello world");
var res2 = getResult(5);
console.log(res1);
console.log(res2);
//------
var NhanVien = /** @class */ (function () {
    function NhanVien(hoTen, tuoi, gioiTinh) {
        this.hoTen = hoTen;
        this.tuoi = tuoi;
        this.gioiTinh = gioiTinh;
    }
    NhanVien.prototype.tinhLuong = function () {
        return 1000;
    };
    return NhanVien;
}());
var nhanVien = new NhanVien("Long", 18, "Nam");
var GiamDoc = /** @class */ (function (_super) {
    __extends(GiamDoc, _super);
    function GiamDoc(hoTen, tuoi, gioiTinh, heSoLuong) {
        var _this = _super.call(this, hoTen, tuoi, gioiTinh) || this;
        _this.heSoLuong = heSoLuong;
        return _this;
    }
    GiamDoc.prototype.tinhLuong = function () {
        return _super.prototype.tinhLuong.call(this) * this.heSoLuong;
    };
    return GiamDoc;
}(NhanVien));
var giamDoc = new GiamDoc("ba Long", 25, "Nam", 5);
console.log(giamDoc.tinhLuong);
// imp
var NhanVienThietKe = /** @class */ (function () {
    function NhanVienThietKe(hoTen, tuoi, chucDanh) {
        this.hoTen = hoTen;
        this.tuoi = tuoi;
        this.chucDanh = chucDanh;
    }
    NhanVienThietKe.prototype.tinhLuong = function () {
        return 3000;
    };
    NhanVienThietKe.prototype.thucHienCongVien = function () {
        console.log("Công việc thiết kế");
    };
    return NhanVienThietKe;
}());
// DOM
var txtName = document.getElementById("txtName"); //<-- sử dụng HTMLInputElement để DOM tới thẻ input
txtName.value;
var btnSubmit = document.getElementById("btnButton");
btnSubmit.click;
