document.querySelector('.header--menu').addEventListener('click', function() {
    document.querySelector('.header--div__navbar').classList.toggle('bienmat');
    document.querySelector('.header--navbar__ul').classList.toggle('hienthi');
})

document.querySelector('.header--div__navbar').addEventListener('click', function() {
    document.querySelector('.header--navbar__ul').classList.remove('hienthi');
    document.querySelector('.header--div__navbar').classList.remove('bienmat');
})
document.querySelector('.header--close').addEventListener('click', function() {
    document.querySelector('.header--navbar__ul').classList.remove('hienthi');
    document.querySelector('.header--div__navbar').classList.remove('bienmat');
})

document.querySelector('.header--close--man400').addEventListener('click', function() {
    document.querySelector('.header--navbar__ul').classList.remove('hienthi');
    document.querySelector('.header--div__navbar').classList.remove('bienmat');
})
document.querySelector('.header--navbar__ul').addEventListener('click', function(e) {
    e.stopPropagation();
})

document.querySelector('.header--li__link-gioithieu').addEventListener('click', function() {
    document.querySelector('.header--suvnav__mobile-gioithieu').classList.toggle('display-block');
    document.querySelector('.header--suvnav__mobile-dichvu').classList.remove('display-block');
    document.querySelector('.header--suvnav__mobile-banggia').classList.remove('display-block');
    document.querySelector('.header--suvnav__mobile-kienthuc').classList.remove('display-block');
})

document.querySelector('.header--li__link-phu-dichvu').addEventListener('click', function() {
    document.querySelector('.header--suvnav__mobile-dichvu').classList.toggle('display-block');
    document.querySelector('.header--suvnav__mobile-gioithieu').classList.remove('display-block');
    document.querySelector('.header--suvnav__mobile-banggia').classList.remove('display-block');
    document.querySelector('.header--suvnav__mobile-kienthuc').classList.remove('display-block');
})

document.querySelector('.header--li__link-phu-banggia').addEventListener('click', function() {
    document.querySelector('.header--suvnav__mobile-banggia').classList.toggle('display-block');
    document.querySelector('.header--suvnav__mobile-gioithieu').classList.remove('display-block');
    document.querySelector('.header--suvnav__mobile-dichvu').classList.remove('display-block');
    document.querySelector('.header--suvnav__mobile-kienthuc').classList.remove('display-block');
})

document.querySelector('.header--li__link-phu-kienthuc').addEventListener('click', function() {
    document.querySelector('.header--suvnav__mobile-kienthuc').classList.toggle('display-block');
    document.querySelector('.header--suvnav__mobile-gioithieu').classList.remove('display-block');
    document.querySelector('.header--suvnav__mobile-dichvu').classList.remove('display-block');
    document.querySelector('.header--suvnav__mobile-banggia').classList.remove('display-block');
})

window.addEventListener('scroll', function() {
    var heightTop = document.querySelector('.header--div__top').offsetHeight;

    var x = pageYOffset;
    if (x > heightTop) {
        document.querySelector('.header--div').classList.add('position');
    } else {
        document.querySelector('.header--div').classList.remove('position');
    }
});