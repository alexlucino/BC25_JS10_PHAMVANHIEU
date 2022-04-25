function DanhSachNhanVien() {
  this.arr = [];

  this.themNV = function (nhanVien) {
    this.arr.push(nhanVien);
  };

  this.timViTriNV = function (taiKhoan) {
    var index = -1;

    for (var i = 0; i < this.arr.length; i++) {
      var nhanVien = this.arr[i];
      if (nhanVien.taiKhoan === taiKhoan) {
        index = i;
        break;
      }
    }

    return index;
  };

  this._xoaNV = function (taiKhoan) {
    var index = this.timViTriNV(taiKhoan);

    if (index !== -1) {
      this.arr.splice(index, 1);
    }
  };

  this.layThongTinNV = function (taiKhoan) {
    var index = this.timViTriNV(taiKhoan);

    if (index !== -1) {
      var nhanVien = this.arr[index];
      return nhanVien;
    }

    return null;
  };

  this.capNhapNV = function (nhanVien) {
    var index = this.timViTriNV(nhanVien.taiKhoan);

    if (index !== -1) {
      this.arr[index] = nhanVien;
    }
  };

  this.timNhanVien = function (keyword) {
    var mangTimKiem = [];

    for (var i = 0; i < this.arr.length; i++) {
      var nv = this.arr[i];
      if (nv.loaiNV.toLowerCase().indexOf(keyword.toLowerCase()) !== -1) {
        mangTimKiem.push(nv);
      }
    }

    return mangTimKiem;
  };
}
