var lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
    var scrollTop = document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = '-80px';
    } else {
        navbar.style.top = '0';
    }
    if (scrollTop == 0) {
        navbar.style.backgroundColor = 'rgb(227, 241, 245)';
    } else {
        navbar.style.backgroundColor = 'rgb(241, 241, 241)';
    }
    lastScrollTop = scrollTop;
});

function myFunction(x) {
    x.classList.toggle('change');
}
