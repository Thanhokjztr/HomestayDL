document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const phoneError = document.getElementById('phoneError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    form.addEventListener('submit', function (event) {
        let valid = true;

        // Xóa thông báo lỗi cũ
        nameError.textContent = '';
        phoneError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';

        // Kiểm tra tên
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Tên không được để trống.';
            valid = false;
        }

        // Kiểm tra số điện thoại
        if (phoneInput.value.trim() === '') {
            phoneError.textContent = 'Số điện thoại không được để trống.';
            valid = false;
        } else if (!/^\d+$/.test(phoneInput.value.trim())) {
            phoneError.textContent = 'Số điện thoại không hợp lệ.';
            valid = false;
        }

        // Kiểm tra email
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email không được để trống.';
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
            emailError.textContent = 'Email không hợp lệ.';
            valid = false;
        }

        // Kiểm tra ý kiến
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Ý kiến không được để trống.';
            valid = false;
        }

        // Nếu không hợp lệ, ngăn chặn gửi biểu mẫu
        if (!valid) {
            event.preventDefault();
        }
    });
});