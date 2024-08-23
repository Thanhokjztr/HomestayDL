const images = [
    'IMAGES/Nen-1.webp',
    'IMAGES/Nen-2.webp',
    'IMAGES/Nen-3.webp',
    'IMAGES/Nen-4.webp',
    'IMAGES/Nen-5.webp'
];

let tmp = 0;
const Hinhnen = document.getElementById('background');

function Thaydoinen() {
    Hinhnen.style.backgroundImage = `url(${images[tmp]})`;
    tmp = tmp + 1;
    if(tmp===5)
        tmp=0;
}

// Thay đổi hình nền mỗi 5 giây (5000 milliseconds)
setInterval(Thaydoinen, 3000);

// Đặt hình nền ban đầu
Thaydoinen();