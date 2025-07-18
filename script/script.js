document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.dropdown');
    const buttonIcon = dropdown.querySelector('button i');
    const items = dropdown.querySelectorAll('.dropdown-item');
    const themeContainer = document.getElementById('themecontainer');

    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        themeContainer.classList.add('dark-theme');
        buttonIcon.className = 'bi bi-moon-stars-fill';
    } else {
        themeContainer.classList.remove('dark-theme');
        buttonIcon.className = 'bi bi-brightness-high-fill';
    }

    items.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const icon = item.querySelector('i');
            if (icon) {
                buttonIcon.className = icon.className;
                if (icon.classList.contains('bi-brightness-high-fill')) {
                    themeContainer.classList.remove('dark-theme');
                    localStorage.setItem('theme', 'light');
                } else if (icon.classList.contains('bi-moon-stars-fill')) {
                    themeContainer.classList.add('dark-theme');
                    localStorage.setItem('theme', 'dark');
                }
            }
        });
    });
});

const text = "Amarta Sarkar";
let i = 0;
const typewriter = document.getElementById('typewriter');

function type() {
    if (i < text.length) {
        typewriter.textContent += text.charAt(i);
        i++;
        setTimeout(type, 10);
    }
}

window.onload = type;