# Human Centered Design @cmda-minor-web 2022 - 2023

# Copy, paste and scroll!

![image](https://github.com/DragonSake/human-centered-design-2223/assets/40611000/f6b397e2-6952-48f0-9564-ef51851c3b7f)

***

## Website

Live demo: https://dragonsake.github.io/human-centered-design-2223/

***

# Inhoudsopgave

* Onderzoeksvraag
* Probleem
* Oplossing
* Test 1
* Test 2
* Features
* Checklist
* License

***

## Onderzoeksvraag

"Hoe maak ik het eenvoudiger om voor Nicolette te knippen, plakken en te scrollen?"

***

## Probleem

Nicolette kan beperkt gebruik maken van haar ledematen.

Ze gebruikt een rolstoel om zich te verplaatsen.

Op haar computer maakt ze gebruik van spraaksoftware en een tekentablet in plaats van een muis.

Dit maakt navigeren lastig omdat ze geen snelkoppelingen kan gebruiken.

***

## Oplossing

Een website waarmee Nicolette eenvoudig kan knippen, plakken en scrollen.

***

## Test 1

### Aantekeningen gesprek en testen

Niet meer kunnen voelen bij de armen en benen (warm/koud)

Kan niet meer goed typen

Tekentablet als muis (Wacom)

Centraal zenuwstelsel doet het nog maar het andere niet

Heeft eerder moeite met het vinden van de juiste map

Scrollen werkt anders, vindt ze moeilijk (meeste gedoe, grootste probleem en lastig) ze wil niet lang scrollen

Het bericht zelf doet ze met spraak.

Buttons zoals versturen, doet ze gewoon met de vingers.

Knippen en plakken in browsers kan ze niet zelf.

Met de muis bewegen naar en knop is lastig.

Als het gelijk kan worden gebruikt met spraak is handig.

Geen dubbelklik

Slepen is lastig

### Opmerkingen gesprek en testen
In openbare ruimtes is de spraak slecht detecteerbaar

Om iets te plakken uit clipboard, moet je permission geven

***

## Test 2

### Website

Voor het prototype heb ik 2 buttons voor het omhoog en omlaag scrollen op pagina.

Voor het testen wil ik kijken wat zij fijner vind om te scrollen, klikken of hoveren.

Daarnaast heb ik nog een button gemaakt waardoor zij de tekst kan kopiëren en een textarea om te kunnen testen of het kopiëren is gelukt

***

### Screenshot

![screencapture-dragonsake-github-io-human-centered-design-2223-2023-05-11-17_29_09](https://github.com/DragonSake/human-centered-design-2223/assets/40611000/39daafdf-f102-4a86-989d-eab403df235f)

***

### Code

```HTML
<body>
  <main>
    <section>
      <div class="container">
        <button id="up-button">&#8593;</button>
        <button id="down-button">&#8595;</button>
      </div>

      <h1>Lorem ipsum</h1>

      <article class="content">
        <h2>What is Lorem Ipsum?</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.</p>
      </article>

      <article>
        <h2>Where does it come from?</h2>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
          College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
          and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem
          Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
          Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
          1.10.32.

          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
          1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original
          form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
      </article>

      <article>
        <h2>Why do we use it?</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking
          at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
          packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
          will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).</p>
      </article>

      <article>
        <h2>Where can I get some?</h2>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injected humour, or randomised words which don't look even slightly believable. If you are going
          to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of
          text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making
          this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a
          handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem
          Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
      </article>
    </section>
  </main>
</body>
```

```JS
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

let text = document.getElementById('myText').innerHTML;

const copyContent = async () => {
    await navigator.clipboard.writeText(text);
    
    var copyText = document.getElementById("copyText");
    copyText.innerText = "Copied to clipboard!";
}
```

***

### Testplan vragen

Wat wil ik te weten komen?

* Zijn die knoppen zichtbaar genoeg?

* Zijn de knoppen duidelijk waarvoor ze dienen?

* Is het scrollen prettig?

* Is het beter om te klikken of hoveren?

* Is het kopiëren handig op deze manier?

* Wilt u op deze manier ook kunnen plakken?

* Zou u liever per regel kunnen kopiëren of gelijk een heel stuk tekst?

***

### Testen
![image](https://github.com/DragonSake/human-centered-design-2223/assets/40611000/9a7f4d13-aedf-4f03-a880-a882b82be5b8)

Video: https://youtu.be/Zbw-aqEA5As

***

### Aantekeningen

Nicolette wil helemaal niet hoeven scrollen, ze heeft letterlijk gezegd "ik wil helemaal niet scrollen."

Ze heeft gezegd dat ze niet lang scrollen en ze kan niet vertrouwen op haar vingers.

Als ze zou moeten scrollen op deze website, zou ze het liefste per stukje tekst scrollen.

Nicolette vindt met een klik scrollen veel beter dan alleen erover te hoveren, want

dan kan ze zelf beter bepalen wanneer ze de scroll wil stoppen. 

Ze wil op dezelfde manier kunnen plakken als kopiëren en dat is door middel van een klik.

Tekst is Lorem Ipsum

***

## Eindresultaat

### Inzichten die ik meeneem:

* Niet lang hoeven scrollen

* Met een klik scrollen

* Plakken met een klik

* Lorem Ipsum tekst

***

### Vernieuwde website

Lorem Ipsum is veranderd naar een verhaal die ik op internet heb gevonden.

Ze wilde niet lang scrollen dus, heb ik het verhaal in stukjes geknipt.

De scroll buttons zitten er nog steeds, maar dan op een iets hogere plek waardoor ze sneller bediend kunnen worden en 

sneller gezien kunnen worden.

De paste button is op dezelfde manier te bedienen als de copy button, door middel van een klik.

Alleen je moet nog steeds permission geven om te kunnen plakken, dat komt doordat de browser user privacy prioriteren.

***

### Screenshots

![screencapture-dragonsake-github-io-human-centered-design-2223-index-html-2023-05-11-18_55_20](https://github.com/DragonSake/human-centered-design-2223/assets/40611000/b39a7287-1bf3-47b1-861b-a21935b857e4)

![screencapture-dragonsake-github-io-human-centered-design-2223-page2-html-2023-05-11-18_55_34](https://github.com/DragonSake/human-centered-design-2223/assets/40611000/0b71b1f9-4521-4117-b984-c2daf79c48dc)

![screencapture-dragonsake-github-io-human-centered-design-2223-page9-html-2023-05-11-18_55_55](https://github.com/DragonSake/human-centered-design-2223/assets/40611000/4d112072-e564-49ab-ba19-58c7dd36ca36)

***

### Code

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nicolette</title>
  <link rel="stylesheet" href="./style/style.css">
  <script src="./scripts/js.js" defer></script>
</head>

<body>
  <main>
    <section>
      <div class="container">
        <button id="up-button">&#8593;</button>
        <button id="down-button">&#8595;</button>
      </div>

      <h1>The Girl and the Puma</h1>

      <article>
        <p id="myText">Five hundred years ago when the Spanish entered South America, Native American tribes often fought back against the invaders. One way tribes could put pressure on the Spanish was to surround their settlements. This is what happened in the early 1500's when Maldonado, a Spanish girl, was 15 years old.</p>
      </article>

      <div>
        <button class="invisible">Back
        </button>
  
        <button onclick="page2()">Next
        </button>

      <button class="copy" onclick="copyContent()">
        <span id="copyText">Click here to copy the text!</span>
      </button>

      <button onclick="paste()">Click here to paste the text!
      </button>
    </div>

      <p class="tester">Test if it's copied:</p>
      <textarea></textarea>
  </section>
  </main>
</body>

</html>
```

```JS
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
```

***

## Features

Knip button - met deze button kan je de tekst knippen
![image](https://github.com/DragonSake/human-centered-design-2223/assets/40611000/92c8280d-fc72-4bb2-8497-556a241314e3)

Plak button - met deze button kan je de plakken knippen
![image](https://github.com/DragonSake/human-centered-design-2223/assets/40611000/45c2dc20-1e22-42e5-8df0-a30872781627)

Scroll up button - met deze button kan je
![image](https://github.com/DragonSake/human-centered-design-2223/assets/40611000/f33d29fd-d205-4ddd-b1f7-4e45782a3ae9)

Scroll down button - met deze button kan je
![image](https://github.com/DragonSake/human-centered-design-2223/assets/40611000/53523cfa-caa4-453a-b070-128896489142)

***

## License

MIT License
