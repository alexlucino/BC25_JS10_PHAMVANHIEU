var dsnv = new DanhSachNhanVien();
var validation = new Validation();
getLocalStorage();

function getEle(id) {
  return document.getElementById(id);
}

//Hàm lưu data vào LocalStorage
function setLocalStorage() {
  var dataString = JSON.stringify(dsnv.arr);
  localStorage.setItem("DSNV", dataString);
}

//Hàm lấy data từ LocalStorage
function getLocalStorage() {
  var dataString = localStorage.getItem("DSNV");
  if (dataString) {
    var dataJON = JSON.parse(dataString);
    dsnv.arr = dataJON;
    tableNhanVien(dsnv.arr);
  }
}

//Hàm lấy thông tin nhân viên
function layThongTinNV() {
  //Dom tới các thẻ input lấy value
  var _taiKhoan = getEle("tknv").value;
  var _tenNV = getEle("name").value;
  var _email = getEle("email").value;
  var _matKhau = getEle("password").value;
  var _ngayLam = getEle("datepicker").value;
  var _luongCB = getEle("luongCB").value;
  var _chucVu = getEle("chucvu").value;
  var _gioLam = getEle("gioLam").value;

  //Check thẻ input

  var isValid = true;

  //Tài Khoản
  isValid &=
    validation.checkRong(
      _taiKhoan,
      "tbTKNV",
      "(*) Tên tài khoản không thể để trống."
    ) &&
    validation.checkNumber(
      _taiKhoan,
      "tbTKNV",
      "(*) Tên tài khoản chỉ được dùng số"
    ) &&
    validation.checkSoKiTu(
      _taiKhoan,
      "tbTKNV",
      "(*) Tên tài khoản chỉ từ 4 - 6 kí tự",
      4,
      6
    ) &&
    validation.checkTrungTK(
      _taiKhoan,
      "tbTKNV",
      "(*) Tên tài khoản đã tồn tại,",
      dsnv.arr
    );

  //Tên nhân viên
  isValid &=
    validation.checkRong(_tenNV, "tbTen", "(*) Vui lòng nhập tên nhân viên") &&
    validation.checkChuoiKiTu(_tenNV, "tbTen", "(*) Vui lòng nhập đúng kí tự");

  //Email
  isValid &=
    validation.checkRong(_email, "tbEmail", "(*) Vui lòng nhập email") &&
    validation.checkEmail(
      _email,
      "tbEmail",
      "(*) Vui lòng nhập email đúng định dạng"
    );

  //Mật khẩu
  isValid &=
    validation.checkRong(_matKhau, "tbMatKhau", "(*) Vui lòng nhập mật khẩu") &&
    validation.checkPass(
      _matKhau,
      "tbMatKhau",
      "(*) Vui lòng mật khẩu từ 6 - 10 kí tự trong đó có<br/>1 chữ số<br/>1 chữ hoa<br/>1 kí tự"
    ) &&
    validation.checkSoKiTu(
      _matKhau,
      "tbMatKhau",
      "(*) Vui lòng nhập 6 - 10 kí tự",
      6,
      10
    );

  //Ngày làm
  isValid &=
    validation.checkRong(_ngayLam, "tbNgay", "(*) Vui lòng điền ngày làm") &&
    validation.checkDate(
      _ngayLam,
      "tbNgay",
      "(*) Vui lòng nhập đúng định dạng"
    );

  //Lương cơ bản
  isValid &=
    validation.checkRong(
      _luongCB,
      "tbLuongCB",
      "(*) Vui lòng nhập lương cơ bản"
    ) &&
    validation.checkNumber(
      _luongCB,
      "tbLuongCB",
      "(*) Vui lòng nhập số tiền lương"
    ) &&
    validation.checkGiaTri(
      _luongCB,
      "tbLuongCB",
      "(*) Vui lòng nhập từ 1.000.000 - 20.000.000",
      1000000,
      20000000
    );

  //Chức vụ
  isValid &= validation.checkRong(
    _chucVu,
    "tbChucVu",
    "(*) Vui lòng chọn chức vụ"
  );

  //Giờ làm
  isValid &=
    validation.checkRong(_gioLam, "tbGiolam", "(*) Vui lòng nhập giờ làm") &&
    validation.checkNumber(
      _gioLam,
      "tbGiolam",
      "(*) Vui lòng nhập số giờ làm"
    ) &&
    validation.checkGiaTri(
      _gioLam,
      "tbGiolam",
      "(*) Vui lòng nhập từ 80 - 200",
      80,
      200
    );

  if (isValid) {
    var nhanVien = new NhanVien(
      _taiKhoan,
      _tenNV,
      _email,
      _matKhau,
      _ngayLam,
      _luongCB,
      _chucVu,
      _gioLam
    );
    nhanVien.tinhLuong();
    nhanVien.xepLoai();

    return nhanVien;
  }

  return null;
}

//Hàm tạo danh sách nhân viên
function tableNhanVien(arr) {
  //Tạo biến duyệt mảng cho ra bảng danh sách nhân viên
  var content = "";
  for (var i = 0; i < arr.length; i++) {
    var nv = arr[i];
    content += `
      <tr>
        <td>${nv.taiKhoan}</td>
        <td>${nv.tenNV}</td>
        <td>${nv.email}</td>
        <td>${nv.ngayLam}</td>
        <td>${nv.chucVu}</td>
        <td>${nv.tongLuong}</td>
        <td>${nv.loaiNV}</td>
        <td>
          <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="suaNV('${nv.taiKhoan}')">Sửa</button>
          <button class="btn btn-danger" onclick="xoaNV('${nv.taiKhoan}')">Xóa</button>
        </td>
      </tr>
    `;
  }
  getEle("tableDanhSach").innerHTML = content;
}

//Hàm xóa nhân viên
function xoaNV(taiKhoan) {
  dsnv._xoaNV(taiKhoan);
  tableNhanVien(dsnv.arr);
  setLocalStorage();
}

//Hàm sửa nhân viên
function suaNV(taiKhoan) {
  getEle("btnCapNhat").style.display = "inline-block";

  var nhanVien = dsnv.layThongTinNV(taiKhoan);
  getEle("tknv").value = nhanVien.taiKhoan;
  getEle("name").value = nhanVien.tenNV;
  getEle("email").value = nhanVien.email;
  getEle("password").value = nhanVien.matKhau;
  getEle("datepicker").value = nhanVien.ngayLam;
  getEle("luongCB").value = nhanVien.luongCB;
  getEle("chucvu").value = nhanVien.chucVu;
  getEle("gioLam").value = nhanVien.gioLam;
}

//Dom tới nút thêm nhân viên
getEle("btnThemNV").addEventListener("click", function () {
  var nhanVien = layThongTinNV();
  if (nhanVien) {
    dsnv.themNV(nhanVien);
    tableNhanVien(dsnv.arr);
    setLocalStorage();
  }
});

//Cập nhập nhân viên
getEle("btnCapNhat").addEventListener("click", function () {
  var nhanVien = layThongTinNV();
  dsnv.capNhapNV(nhanVien);
  tableNhanVien(dsnv.arr);
  setLocalStorage();
  getEle("btnDong").onclick;
});

//Tìm kiếm nhân viên bằng xếp loại
getEle("btnTimNV").addEventListener("click", function () {
  var keyword = getEle("searchName").value;
  var mangTimKiem = dsnv.timNhanVien(keyword);
  tableNhanVien(mangTimKiem);
});
