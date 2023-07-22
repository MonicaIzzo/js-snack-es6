/* SNACK 4
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà punti fatti e falli subiti.
Infine, usando il destructuring, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

// #0 Creo l' arrey.

// FUNZIONI

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max + 1 - min) + min);

// OPERAZIONI PRELIMINARI

// #0 creo l'arrey e setto le variabili [points] e [fouls] a [0] mentre setto la variabile [nome].
const squadre = [
  {
    name: "Squadra1",
    points: 0,
    fouls: 0,
  },
  {
    name: "Squadra2",
    points: 0,
    fouls: 0,
  },
  {
    name: "Squadra3",
    points: 0,
    fouls: 0,
  },
];

// #1 Recupero gli elementi in pagina

const tableBody = document.querySelector("tbody");

// #2 Genero dei numeri Random entro un range definito.
squadre.forEach((squadra) => {
  squadra.fouls = getRandomNumber(0, 40);
  squadra.points = getRandomNumber(0, 100);
});

console.log(squadre);

// #3 Stampo in pagina
let tableContent = "";

squadre.forEach((squadra) => {
  const { name, fouls } = squadra;

  tableContent += `
        <tr>
            <td> <strong>${name}</strong> - </td>
            <td>falli subiti: <strong>${fouls}</strong></td>
        </tr>
    `;
});

tableBody.innerHTML = tableContent;
