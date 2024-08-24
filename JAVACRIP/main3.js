document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('button1');
    var videoContainer = document.getElementById('video1');

    button.addEventListener('click', function() {
        videoContainer.classList.remove('hidden');
        button.style.display = 'none'; // Ẩn nút sau khi bấm
    });
});

// Nút bấm video