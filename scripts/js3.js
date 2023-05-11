// scroll using click
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

// scroll using hover
// document.getElementById('up-button').addEventListener('mouseover', function () {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// });

// document.getElementById('down-button').addEventListener('mouseover', function () {
//     window.scrollTo({
//         top: document.body.scrollHeight,
//         behavior: 'smooth'
//     });
// });

let text3 = document.getElementById('myText3').innerHTML;

const copyContent3 = async () => {
    await navigator.clipboard.writeText(text3);
    
    var copyText3 = document.getElementById("copyText3");
    copyText3.innerText = "Copied to clipboard!";
}

function page2() {
    window.location.href = "page2.html";
}

function page4() {
    window.location.href = "page4.html";
}

function paste() {
    navigator.clipboard.readText().then(function(text) {
    document.querySelector('textarea').value = text;
      });
  }