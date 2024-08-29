function send() {
    var arr = document.getElementsByTagName('input');
    var email = arr[0].value;
    var ten = arr[1].value;
    var sdt = arr[2].value;
    var phong = arr[3].value;
    var den = arr[4].value;
    var di = arr[5].value;
    
    // Reset lại các khung input trước khi kiểm tra
    for (var i = 0; i < arr.length; i++) {
        arr[i].classList.remove('input-error');
    }

    // Kiểm tra các trường không được bỏ trống
    if (email == "" || ten == "" || sdt == "" || phong == "" || den == "" || di == "") {
        alert("Không được bỏ trống");
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].value == "") {
                arr[i].classList.add('input-error');
            }
        }
        return;
    }

    // Kiểm tra số điện thoại phải là số
    if (isNaN(sdt)) {
        alert("Nhập lại số điện thoại");
        arr[2].classList.add('input-error');
        return;
    }

    // Kiểm tra tên không được là số
    if (!isNaN(ten)) {
        alert("Nhập lại tên");
        arr[1].classList.add('input-error');
        return;
    }
    else{
        alert("đặt thành công");
    }
}