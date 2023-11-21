
// MILESTONE 0: CREARE L'ARRAY DI OGGETTI CON LE INFORMAZIONI FORNITE NELLA TABELLA QUI SOTTO:

let teamMembers = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        photoUrl: "wayne-barnett-founder-ceo.jpg",
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photoUrl: "angela-caroll-chief-editor.jpg",
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        photoUrl: "walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photoUrl: "angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        photoUrl: "scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photoUrl: "barbara-ramos-graphic-designer.jpg",
    },
];

// MILESTONE 1: STAMPARE SU CONSOLE LE INFORMAZIONI DI NOME, RUOLO E LA STRINGA DELLA FOTO

printArrayTeam(teamMembers);

// MILESTONE 2: STAMPARE LE STESSE INFORMAZIONI SU DOM SOTTOFORMA DI STRINGHE

let teamList = document.getElementById('teamList');

for(let i = 0; i < teamMembers.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${teamMembers[i].name} - Ruolo: ${teamMembers[i].role}`;
    teamList.appendChild(li);
}

// SEZIONE FUNZIONI

function printObject(object) {
    let string = "";

    string += "{\n";

    for (let key in object) {
        string += "\t " + key + ": " + object[key] + "\n";
    }

    string += "}";

    console.log(string);

}

function printArrayTeam(arrayTeam) {
    for (let i = 0; i < arrayTeam.length; i++) {

        let team = arrayTeam[i];

        console.log("Il membro del Team n° " + (i + 1) + " è:");
        printObject(team);
    }
}