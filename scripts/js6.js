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

let text6 = document.getElementById('myText6').innerHTML;

const copyContent6 = async () => {
    await navigator.clipboard.writeText(text6);
    
    var copyText6 = document.getElementById("copyText6");
    copyText6.innerText = "Copied to clipboard!";
}

function page5() {
    window.location.href = "page5.html";
}

function page7() {
    window.location.href = "page7.html";
}

function paste() {
    navigator.clipboard.readText().then(function(text) {
    document.querySelector('textarea').value = text;
      });
  }