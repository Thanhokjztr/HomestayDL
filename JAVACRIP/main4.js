document.getElementById('icontmenu').onclick = function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
    var menu = document.querySelector('.submenu');
    var icon = document.getElementById('icontmenu');

            if (menu.classList.contains('visible')) {
                menu.classList.remove('visible'); // Ẩn menu
                icon.classList.remove('fa-xmark'); // Thay đổi biểu tượng
                icon.classList.add('fa-bars'); // Biểu tượng 'hamburger' để hiện menu
            } else {
                menu.classList.add('visible'); // Hiển thị menu
                icon.classList.remove('fa-bars'); // Thay đổi biểu tượng
                icon.classList.add('fa-xmark'); // Biểu tượng 'X' để ẩn menu
            }
};