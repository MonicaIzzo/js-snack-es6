/*
# SNACK 3
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: name e weight.
Stampare in console la bici con peso minore utilizzando il destructuring.
*/

// FUNZIONI
const getLightBikes = (bikes) => {
    let lighestBikes = bikes[0];

    for (let i = 1; i < bikes.lenght; i++) {
        const currentBike = bikes[i];

        if (currentBike.weight < lighestBikes.weight); {
            lighestBikes = currentBike;
        }
    }
    return lighestBikes;
};

// # 0 Creo l'array delle bici.
const bikes = [
    {
        name: 'bike1',
        weight: 7,
    },
        {
        name: 'bike2',
        weight: 13,
    },
        {
        name: 'bike2',
        weight: 11,
    },
];

// # 1 Genero una variaible che contiene solo il nome della bicicletta con il peso minore.

// Indinviduo la bici più leggera
let lighestBikes = getLightBikes(bikes);

// Estrapolo none e peso
const {name, weight} = lighestBikes;


// Stampo la bici più leggera in pagina
const lighestBikesElements = document.getElementById('lighestBikes');


lighestBikesElements.innerHTML = `
<div>
    <div><strong> Nome: </strong> ${name}</div>
    <div><strong>Peso: </strong>  ${weight}</div>
</div>
`;