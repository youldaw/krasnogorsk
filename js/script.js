const user_icon_btn = document.querySelectorAll('.user-icon-btn.pc');
const close_header_login = document.querySelector('.close-header-login');
const header_blur = document.querySelector('.header-blur');
const header_login = document.querySelector('.header-login');
const drop_span = document.querySelectorAll('.drop-span');
const drop_span_btns = document.querySelectorAll('.drop-span-btns');
drop_span_btns[0].addEventListener('click', () => {
    drop_span_btns[1].classList.remove('active');
    drop_span_btns[0].classList.add('active');
});
close_header_login.addEventListener('click', () => {
    drop_span_btns[1].classList.remove('active');
    drop_span_btns[0].classList.remove('active');
    header_login.style.top = '-100%';
    header_blur.style.top = '-100%';
});
drop_span_btns[1].addEventListener('click', () => {
    drop_span_btns[0].classList.remove('active');
    drop_span_btns[1].classList.add('active');
    header_blur.style.top = 0;
    header_login.style.top = 0;
});
user_icon_btn[0].addEventListener('click', () => {
    if (drop_span[1].style.display === "block") {
        drop_span[1].style.display = "none";
    } else {
        drop_span[1].style.display = "block";
    }
});
drop_span_btns[3].addEventListener('click', () => {
    drop_span_btns[0].classList.remove('active');
    drop_span_btns[2].classList.add('active');
    header_blur.style.top = 0;
    header_login.style.top = 0;
});
user_icon_btn[2].addEventListener('click', () => {
    if (drop_span[1].style.display === "block") {
        drop_span[1].style.display = "none";
    } else {
        drop_span[1].style.display = "block";
    }
});