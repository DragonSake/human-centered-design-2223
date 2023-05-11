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

let text2 = document.getElementById('myText2').innerHTML;

const copyContent2 = async () => {
    await navigator.clipboard.writeText(text2);
    
    var copyText2 = document.getElementById("copyText2");
    copyText2.innerText = "Copied to clipboard!";
    console.log("test");
}

function index() {
    window.location.href = "index.html";
}

function page3() {
    window.location.href = "page3.html";
}

function paste() {
    navigator.clipboard.readText().then(function(text) {
    document.querySelector('textarea').value = text;
      });
  }