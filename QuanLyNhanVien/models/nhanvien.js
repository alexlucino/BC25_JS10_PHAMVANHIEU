function NhanVien(
  _taiKhoan,
  _tenNV,
  _email,
  _matKhau,
  _ngayLam,
  _luongCB,
  _chucVu,
  _gioLam
) {
  this.taiKhoan = _taiKhoan;
  this.tenNV = _tenNV;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngayLam = _ngayLam;
  this.luongCB = _luongCB;
  this.chucVu = _chucVu;
  this.gioLam = _gioLam;
  this.tongLuong = 0;
  this.loaiNV = "";

  this.tinhLuong = function () {
    if (this.chucVu == "Sếp") {
      this.tongLuong = parseInt(this.luongCB) * 3;
    } else if (this.chucVu == "Trưởng phòng") {
      this.tongLuong = parseInt(this.luongCB) * 2;
    } else if (this.chucVu == "Nhân viên") {
      this.tongLuong = parseInt(this.luongCB) * 1;
    }
  };

  this.xepLoai = function () {
    if (this.gioLam >= 192) {
      this.loaiNV = "xuất sắc";
    } else if (this.gioLam >= 176) {
      this.loaiNV = "giỏi";
    } else if (this.gioLam >= 160) {
      this.loaiNV = "khá";
    } else {
      this.loaiNV = "trung bình";
    }
  };
}
