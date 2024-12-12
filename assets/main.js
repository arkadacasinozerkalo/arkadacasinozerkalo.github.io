document.querySelectorAll('.btn-header-template.btn-reg').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.background = '';
    });

    button.addEventListener('mouseleave', () => {
        button.style.background = '';
    });
});

document.querySelectorAll('.btn-header-template.btn-reg').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.background = '';
    });

    button.addEventListener('mouseleave', () => {
        button.style.background = '';
    });
});


function isMenu() {
    var x = document.getElementById("menu");

    // Скрытие или отображение меню
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}

document.addEventListener('DOMContentLoaded', (event) => {

            var modal = document.getElementById("myModal");
            var loginBtn = document.getElementById("loginBtn");
            var regBtn = document.getElementById("regBtn");
            var span = document.getElementsByClassName("close")[0];

            loginBtn.onclick = function() {
                modal.style.display = "inline-flex";
            }
            regBtn.onclick = function() {
                modal.style.display = "inline-flex";
            }
            span.onclick = function() {
                modal.style.display = "none";
            }
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
            });

var oside = document.getElementsByClassName("d-link");
let host = window.location.hostname;

if (oside.length) {
  for (var i = 0; i < oside.length; i++) {
    oside[i].addEventListener("click", async function () {
      window.location.href = `/x5n9bwtn3kvbt`;
    });
  }
}

document.addEventListener("DOMContentLoaded", function() {
    const modalBox = document.querySelector('.modal-box');
    const modal = document.querySelector('.modal-warn');
    const btns = document.querySelector('.js-start-site');
    
    // Проверяем, было ли уже открыто модальное окно
    if (!localStorage.getItem('modalShow')) {
        modal.style.display = 'block';
        modalBox.classList.add('active');
        
        btns.addEventListener('click', function() {
            modal.style.display = 'none';
            modalBox.classList.remove('active');
            // Сохраняем информацию о том, что модальное окно было показано
            localStorage.setItem('modalShow', 'true');
        });
    }
});



// JavaScript для постепенного раскрытия слотов по 18
    document.addEventListener('DOMContentLoaded', function () {
        const showMoreButton = document.getElementById('showMoreSlots');
        const slots = document.querySelectorAll('.hidden-slot');
        const batchSize = 18; // Количество слотов, которые будут раскрываться за раз
        let currentIndex = 0;

        if (showMoreButton) {
            showMoreButton.addEventListener('click', function () {
                // Показать следующую партию скрытых слотов
                for (let i = currentIndex; i < currentIndex + batchSize && i < slots.length; i++) {
                    slots[i].classList.remove('hidden-slot');
                }
                currentIndex += batchSize;

                // Если больше скрытых слотов нет, скрыть кнопку
                if (currentIndex >= slots.length) {
                    showMoreButton.style.display = 'none';
                }
            });
        }
    });

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('picture img');

    // Temporary storage of original `src` attributes
    images.forEach(img => {
        img.dataset.src = img.src; // Save original src
        img.src = ""; // Temporarily remove src to avoid immediate loading
    });

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src; // Restore original src
                    img.onload = () => {
                        img.classList.add('loaded'); // Add loaded class
                    };
                    observer.unobserve(img); // Stop observing after loading
                }
            });
        });

        images.forEach(img => {
            observer.observe(img);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        images.forEach(img => {
            img.src = img.dataset.src; // Restore src immediately
            img.onload = () => {
                img.classList.add('loaded');
            };
        });
    }
});