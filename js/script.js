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
        ${surName}${lastName}${yourColor}23
    `   
;
