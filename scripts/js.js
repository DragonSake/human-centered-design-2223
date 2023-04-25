document.getElementById('up-button').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.getElementById('down-button').addEventListener('click', function () {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});

document.getElementById('up-button').addEventListener('mouseover', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.getElementById('down-button').addEventListener('mouseover', function () {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});