console.log("type");

// var - let - const

// --scope--//
// - var: function scope
// - let: block scope {}

// --hoisting--//
// - var: bị hoisting (hoisting: tự động đưa lên đầu block)
// - let, const: cũng bị hoisting nhưng sẽ bị đưa vào vùng nhớ chết và không dùng được

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log("Đếm", i);
  }, 1000);
}

// -------------------//
// IIFE function: là một function được khởi tạo và thực thi ngay tại thời điểm khởi tạo

for (let i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(function () {
      console.log("Đếm dùng IIFE", i);
    }, 1000);
  })(i);
}

// ------------------- //
// Type

// kiểu String
let userName: String = "Tèo";
// userName = 10 => Lỗi
// userName = false => Lỗi
userName = "Tí"; // cho phép gán lại đồng kiểu (string)

// kiểu Number
let score: Number = 8;
// score = 'ABC' => Lỗi
score = 9; //cho phép gán lại đồng kiểu (number)

// kiểu Boolean
let isActive: Boolean = true;
isActive = false;

// Kiểu Array
let numbers: Number[] = [1, 2, 3];

let apphabets: Array<string> = ["a", "b", "c"];

// Tuple: kiểu array nhưng cố định phần tử trong đó (chiều dài array) nhưng sẽ là nhiều kiểu dữ liệu khác nhau
let tuple1: [String, Number] = ["diemToan", 8];

// kiểu Enum - kiểu chỉ read only và không thể thay đổi (dùng để định nghĩa: color, tiền tệ,...)
enum Colors {
  white = "#fff",
  black = "#000",
  red = "#f00",
}

console.log(Colors.white);
// Colors.white = 'abc' ==> lỗi, vì Enum chỉ readOnly - can't edit

// Kiểu null
let n: null = null; // khởi tạo ban đầu với kiểu dữ liệu là null
let u: undefined = undefined; // Khởi tạo nhưng chưa gắn
// console.log(typeof n);
// console.log(typeof {});

//  Kết hợp nhiều kiểu dữ liệu với nhau trên cùng 1 biến
let result1: Number | String = 5;
result1 = "abc";

// Kiểu any
let result2: any = 5;
result2 = "abc";
result2 = false;

// Kiểu void: Sử dụng cho function, không cần return khi dùng void
function foo(): void {
  console.log("Hello foo");
}

//--
// Object
interface SinhVien {
  // Tự định kiểu dữ liệu
  hoTen: string;
  tuoi?: number; // thêm '?' vào để kiểu đó trở thành optional
  lop: string;
}

const sinhVien: SinhVien = {
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
let diemToan: number = 0;

let ketQua1 = diemToan || "N/A";
let ketQua2 = diemToan ?? "N/A"; // sử dụng nullish coalescing: khắc phục lỗi undefine trả ra "N/A khi giá trị bằng 0"

console.log("ketqua", ketQua1);
console.log("ketqua", ketQua2);

//--
// Genaric
function getResult<Type>(value: Type): Type {
  // Đổi thành kiểu Type 'tự định nghĩa'
  return value;
}

let res1 = getResult<string>("Hello world");
let res2 = getResult<number>(5);

console.log(res1);
console.log(res2);

//------
class NhanVien {
  // private: Encapsulation (tính đóng gói)
  protected hoTen: string;
  protected gioiTinh: string;
  protected tuoi: number;

  constructor(hoTen: string, tuoi: number, gioiTinh: string) {
    this.hoTen = hoTen;
    this.tuoi = tuoi;
    this.gioiTinh = gioiTinh;
  }

  tinhLuong(): number {
    return 1000;
  }
}

const nhanVien = new NhanVien("Long", 18, "Nam");

class GiamDoc extends NhanVien {
  private heSoLuong: number;

  constructor(
    hoTen: string,
    tuoi: number,
    gioiTinh: string,
    heSoLuong: number
  ) {
    super(hoTen, tuoi, gioiTinh);
    this.heSoLuong = heSoLuong;
  }

  tinhLuong(): number {
    return super.tinhLuong() * this.heSoLuong;
  }
}

const giamDoc = new GiamDoc("ba Long", 25, "Nam", 5);
console.log(giamDoc.tinhLuong);

// ------
// Interface
interface INhanVien {
  hoTen: string;
  tuoi: number;
  tinhLuong(): number;
}

interface IThietKe {
  chucDanh: string;
  thucHienCongVien(): void;
}

// imp
class NhanVienThietKe implements INhanVien, IThietKe {
  //tất cả trong implement interface sẽ publish (không set private được)
  readonly hoTen: string; //dùng readonly để khắc phục ko set được private
  tuoi: number;
  chucDanh: string;

  constructor(hoTen: string, tuoi: number, chucDanh: string) {
    this.hoTen = hoTen;
    this.tuoi = tuoi;
    this.chucDanh = chucDanh;
  }

  tinhLuong(): number {
    return 3000;
  }

  thucHienCongVien(): void {
    console.log("Công việc thiết kế");
  }
}

// DOM
const txtName = <HTMLInputElement>document.getElementById("txtName"); //<-- sử dụng HTMLInputElement để DOM tới thẻ input
txtName.value;

const btnSubmit = <HTMLButtonElement>document.getElementById("btnButton");
btnSubmit.click;
