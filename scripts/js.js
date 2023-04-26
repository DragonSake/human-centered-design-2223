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

// function copyText() {
//     var textToCopy = document.getElementById("tekstveld").value;
//     navigator.clipboard.writeText(textToCopy);
//   }

let text = document.getElementById('myText').innerHTML;

const copyContent = async () => {
    await navigator.clipboard.writeText(text);
    
    var copyText = document.getElementById("copyText");
    copyText.innerText = "Copied to clipboard!";
}

let text2 = document.getElementById('myText2').innerHTML;

const copyContent2 = async () => {
    await navigator.clipboard.writeText(text2);
    
    var copyText2 = document.getElementById("copyText2");
    copyText2.innerText = "Copied to clipboard!";
}

let text3 = document.getElementById('myText3').innerHTML;

const copyContent3 = async () => {
    await navigator.clipboard.writeText(text3);
    
    var copyText3 = document.getElementById("copyText3");
    copyText3.innerText = "Copied to clipboard!";
}

let text4 = document.getElementById('myText4').innerHTML;

const copyContent4 = async () => {
    await navigator.clipboard.writeText(text4);
    
    var copyText4 = document.getElementById("copyText4");
    copyText4.innerText = "Copied to clipboard!";
}