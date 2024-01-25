alert("Prima di accedere al sito devi creare un Password sicura")

let surName;
surName = prompt("Qual è il tuo Nome");

let lastName;
lastName = prompt("Qual è il tuo Cognome");

let yourColor;
yourColor = prompt("Qual è il tuo colore preferito");

let finalPwd;
finalPwd = document.getElementById("title").innerHTML = 
    `
        Ecco la tua password sicura:
        <br>
        ${surName}${lastName}${yourColor}1251
    `   
;

let zoolander;
zoolander = document.getElementById("forfun").innerHTML = 
    `
    <img class="img-fluid p-3" src="https://nofilmschool.com/media-library/zoolander-blue-steel-0.jpg?id=34055631&width=1245&height=700&quality=90&coordinates=0%2C1%2C0%2C0" alt="">
    `   
;



