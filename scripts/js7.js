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

let text7 = document.getElementById('myText7').innerHTML;

const copyContent7 = async () => {
    await navigator.clipboard.writeText(text7);
    
    var copyText7 = document.getElementById("copyText7");
    copyText7.innerText = "Copied to clipboard!";
}

function page6() {
    window.location.href = "page6.html";
}

function page8() {
    window.location.href = "page8.html";
}

function paste() {
    navigator.clipboard.readText().then(function(text) {
    document.querySelector('textarea').value = text;
      });
  }