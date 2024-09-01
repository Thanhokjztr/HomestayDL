const images1 = [
    '../IMAGES/Amthuc.webp',
    '..//IMAGES/Amthuc2.webp',
    '..//IMAGES/Amthuc3.webp'
];

let tmp = 0;
const Hinhnen = document.getElementById('background');

function Thaydoinen() {
    Hinhnen.style.backgroundImage = `url(${images1[tmp]})`;
    tmp = tmp + 1;
    if(tmp===3)
        tmp=0;
}

// Thay đổi hình nền mỗi 5 giây (5000 milliseconds)
setInterval(Thaydoinen, 3000);

// Đặt hình nền ban đầu
Thaydoinen();

// Hình nền

