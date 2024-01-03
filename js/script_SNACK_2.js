/* traccia 
SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
Per preparare l'aula di un nuovo corso, dobbiamo svolgere una serie di operazioni
1. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
2.Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
3.  dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo ES (Marco della Rovere => MARCO DELLA ROVERE);
Questo è l'elenco degli studenti:
Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna 	    48
145 Gaia Borromini          74
196 Luigi Grimaldello 	    68
102 Piero della Francesca   50
120 Francesca da Polenta    84 
*/

console.log('JS OK')

// #0 creo l'arrey dei studenti
const students = [
    {
        id: 213,
        name: "Marco della Rovere",
        grades: 78,
    },
    {
        id: 110,
        name: "Paola Cortellessa",
        grades: 96,
    },
    {
        id: 250,
        name: "Andrea Mantegna ",
        grades: 48,
    },
    {
        id: 145,
        name: "Gaia Borromini ",
        grades: 74,
    },
    {
        id: 196,
        name: "Luigi Grimaldello ",
        grades: 68,
    },
    {
        id: 102,
        name: "Piero della Francesca",
        grades: 50,
    },
    {
        id: 120,
        name: "Francesca da Polenta",
        grades: 84,
    },
];

// #1 Creo l'array dei studenti più bravi con .filter();
    const bestStudents = students.filter(students => {
        return students.grades > 70;
    });
console.log(bestStudents);

// # Creo l'array dei studenti più bravi e con l'id superiore a 120 con .filter();
    const bestNewsStudents = bestStudents.filter(students => {
        return students.id > 120;
    });
console.log(bestNewsStudents);    

// # Creo le targhe con .map(); e porto a MAISCOLO tutti i nomi degli studenti.
const targhe = students.map((students) => {
        return students.name.toLocaleUpperCase();
});

console.log(targhe);