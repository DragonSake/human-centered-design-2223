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

let text = document.getElementById('myText').innerHTML;

const copyContent = async () => {
    await navigator.clipboard.writeText(text);
    
    var copyText = document.getElementById("copyText");
    copyText.innerText = "Copied to clipboard!";
}

function page2() {
    window.location.href = "page2.html";
}

function paste() {
    navigator.clipboard.readText().then(function(text) {
    document.querySelector('textarea').value = text;
      });
  }