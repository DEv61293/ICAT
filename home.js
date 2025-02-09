window.addEventListener("scroll", function () {
    let scrollIndicator = document.getElementById("scrollIndicator");
    if (window.scrollY > 60) {
        scrollIndicator.classList.add("hidden");
    } else {
        scrollIndicator.classList.remove("hidden");
    }
});
document.getElementById("scrollIndicator").addEventListener("click", function () {
    window.scrollTo({ top: 1050, behavior: "smooth" });
});


window.addEventListener('load', function () {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.add('hidden');
});

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
hamburger.addEventListener('click', () => {
nav.classList.toggle('active');
document.getElementById('b1').classList.add('active');
document.getElementById('b2').classList.add('active');
document.getElementById('b3').classList.add('active');
if (nav.classList.contains('active')) {
    nav.style.display = 'block';
} else {
    document.getElementById('b1').classList.remove('active');
    document.getElementById('b2').classList.remove('active');
    document.getElementById('b3').classList.remove('active');
    nav.style.display = 'none';
}
});

document.addEventListener('click', (e) => {
if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
    nav.classList.toggle('active');
    document.getElementById('b1').classList.remove('active');
    document.getElementById('b2').classList.remove('active');
    document.getElementById('b3').classList.remove('active');
    nav.style.display = 'none';
}
});