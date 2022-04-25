function Validation() {
  //Kiểm tra rỗng
  this.checkRong = function (value, divId, mess) {
    if (value === "") {
      getEle(divId).innerHTML = mess;
      getEle(divId).style.display = "block";
      return false;
    } else {
      getEle(divId).innerHTML = "";
      getEle(divId).style.display = "none";
      return true;
    }
  };

  //Kiểm tra độ dài kí tự
  this.checkSoKiTu = function (value, divId, mess, min, max) {
    if (value.trim().length >= min && value.trim().length <= max) {
      getEle(divId).innerHTML = "";
      getEle(divId).style.display = "none";
      return true;
    }
    getEle(divId).innerHTML = mess;
    getEle(divId).style.display = "block";
    return false;
  };

  //Kiểm tra chuỗi kí tự
  this.checkChuoiKiTu = function (value, divId, mess) {
    var letter =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if (value.match(letter)) {
      getEle(divId).innerHTML = "";
      getEle(divId).style.display = "none";
      return true;
    }
    getEle(divId).innerHTML = mess;
    getEle(divId).style.display = "block";
    return false;
  };

  //Kiểm tra định dạng mail
  this.checkEmail = function (value, divId, mess) {
    var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(letter)) {
      getEle(divId).innerHTML = "";
      getEle(divId).style.display = "none";
      return true;
    }
    getEle(divId).innerHTML = mess;
    getEle(divId).style.display = "block";
    return false;
  };

  //Kiểm tra định dạng mật khẩu
  this.checkPass = function (value, divId, mess) {
    var letter =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
    if (value.match(letter)) {
      getEle(divId).innerHTML = "";
      getEle(divId).style.display = "none";
      return true;
    }
    getEle(divId).innerHTML = mess;
    getEle(divId).style.display = "block";
    return false;
  };

  //Kiểm tra định dạng ngày
  this.checkDate = function (value, divId, mess) {
    var letter = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    if (value.match(letter)) {
      getEle(divId).innerHTML = "";
      getEle(divId).style.display = "none";
      return true;
    }
    getEle(divId).innerHTML = mess;
    getEle(divId).style.display = "block";
    return false;
  };

  //Kiểm tra định dạng số
  this.checkNumber = function (value, divId, mess) {
    var letter = /^[0-9]+$/;
    if (value.match(letter)) {
      getEle(divId).innerHTML = "";
      getEle(divId).style.display = "none";
      return true;
    }
    getEle(divId).innerHTML = mess;
    getEle(divId).style.display = "block";
    return false;
  };

  //Kiểm tra trùng tên tài khoản
  this.checkTrungTK = function (value, divId, mess, arr) {
    var status = false;

    for (var i = 0; i < arr.length; i++) {
      var nv = arr[i];
      if (nv.taiKhoan === value) {
        status = true;
        break;
      }
    }

    if (status) {
      getEle(divId).innerHTML = mess;
      getEle(divId).style.display = "block";
      return false;
    }
    getEle(divId).innerHTML = "";
    getEle(divId).style.display = "none";
    return true;
  };

  //Kiểm tra giá trị
  this.checkGiaTri = function (value, divId, mess, min, max) {
    if (value >= min && value <= max) {
      getEle(divId).innerHTML = "";
      getEle(divId).style.display = "none";
      return true;
    }
    getEle(divId).innerHTML = mess;
    getEle(divId).style.display = "block";
    return false;
  };
}
