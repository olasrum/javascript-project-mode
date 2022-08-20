//Margarita

function getMargarita() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12322')
    .then(
        function(response) {
            if (response.status !==200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
                return;
            }
            response.json().then(function(data) {
                //console.log(data)
                displayMargarita(data);
            });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
}
    
function displayMargarita(cocktail) {
    const margarita = document.getElementById('margarita');

    const name = document.createElement('h2');
    name.innerHTML = cocktail.drinks[0].strDrink;

    margarita.appendChild(name);

    const img = document.createElement('img');
    img.src = cocktail.drinks[0].strDrinkThumb;

    margarita.appendChild(img) 

    for (let i=1; i < 4; i++) {
        const ingredient = document.createElement('li');
        ingredient.innerHTML = cocktail.drinks[0][`strMeasure${i}`] + ': ' + cocktail.drinks[0][`strIngredient${i}`];

        margarita.appendChild(ingredient);
    }

    const salt = document.createElement('li');
    salt.innerHTML = cocktail.drinks[0]['strIngredient4'];
    margarita.appendChild(salt);

    let instructions = document.createElement('p');
    instructions.innerHTML = cocktail.drinks[0].strInstructions;

    margarita.appendChild(instructions);
}

getMargarita();

// Banana Daiquiri

function getDaiquiri() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11064')
    .then(
        function(response) {
            if (response.status !==200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
                return;
            }
            response.json().then(function(data) {
                //console.log(data)
                displayDaiquiri(data);
            });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
}
    
function displayDaiquiri(cocktail) {
    const daiquiri = document.getElementById('daiquiri');

    const name = document.createElement('h2');
    name.innerHTML = cocktail.drinks[0].strDrink;

    daiquiri.appendChild(name);

    const img = document.createElement('img');
    img.src = cocktail.drinks[0].strDrinkThumb;

    daiquiri.appendChild(img) 

    for (let i=1; i < 6; i++) {
        const ingredient = document.createElement('li');
        ingredient.innerHTML = cocktail.drinks[0][`strMeasure${i}`] + ': ' + cocktail.drinks[0][`strIngredient${i}`];

        daiquiri.appendChild(ingredient);
    }
    let instructions = document.createElement('p');
    instructions.innerHTML = cocktail.drinks[0].strInstructions;

    daiquiri.appendChild(instructions);
}

getDaiquiri();

// Pina Colada

function getPinaColada() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17207')
    .then(
        function(response) {
            if (response.status !==200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
                return;
            }
            response.json().then(function(data) {
                //console.log(data)
                displayPinaColada(data);
            });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
}
    
function displayPinaColada(cocktail) {
    const pinaColada = document.getElementById('pina-colada');

    const name = document.createElement('h2');
    name.innerHTML = cocktail.drinks[0].strDrink;

    pinaColada.appendChild(name);

    const img = document.createElement('img');
    img.src = cocktail.drinks[0].strDrinkThumb;

    pinaColada.appendChild(img) 

    for (let i=1; i < 4; i++) {
        const ingredient = document.createElement('li');
        ingredient.innerHTML = cocktail.drinks[0][`strMeasure${i}`] + ': ' + cocktail.drinks[0][`strIngredient${i}`];

        pinaColada.appendChild(ingredient);
    }
    let instructions = document.createElement('p');
    instructions.innerHTML = cocktail.drinks[0].strInstructions;

    pinaColada.appendChild(instructions);
}

getPinaColada();

// Mojito

function getMojito() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11000')
    .then(
        function(response) {
            if (response.status !==200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
                return;
            }
            response.json().then(function(data) {
                //console.log(data)
                displayMojito(data);
            });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
}
    
function displayMojito(cocktail) {
    const mojito = document.getElementById('mojito');

    const name = document.createElement('h2');
    name.innerHTML = cocktail.drinks[0].strDrink;

    mojito.appendChild(name);

    const img = document.createElement('img');
    img.src = cocktail.drinks[0].strDrinkThumb;

    mojito.appendChild(img) 

    for (let i=1; i < 5; i++) {
        const ingredient = document.createElement('li');
        ingredient.innerHTML = cocktail.drinks[0][`strMeasure${i}`] + ': ' + cocktail.drinks[0][`strIngredient${i}`];

        mojito.appendChild(ingredient);
    }

    const soda = document.createElement('li');
    soda.innerHTML = cocktail.drinks[0]['strIngredient5'];
    mojito.appendChild(soda);

    let instructions = document.createElement('p');
    instructions.innerHTML = cocktail.drinks[0].strInstructions;

    mojito.appendChild(instructions);
}

getMojito();

// Cuba Libra

function getCubaLibra() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=13751')
    .then(
        function(response) {
            if (response.status !==200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
                return;
            }
            response.json().then(function(data) {
                //console.log(data)
                displayCubaLibra(data);
            });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
}
    
function displayCubaLibra(cocktail) {
    const cubaLibra = document.getElementById('cuba-libra');

    const name = document.createElement('h2');
    name.innerHTML = cocktail.drinks[0].strDrink;

    cubaLibra.appendChild(name);

    const img = document.createElement('img');
    img.src = cocktail.drinks[0].strDrinkThumb;

    cubaLibra.appendChild(img) 

    for (let i=1; i < 4; i++) {
        const ingredient = document.createElement('li');
        ingredient.innerHTML = cocktail.drinks[0][`strMeasure${i}`] + ': ' + cocktail.drinks[0][`strIngredient${i}`];

        cubaLibra.appendChild(ingredient);
    }

    const ice = document.createElement('li');
    ice.innerHTML = cocktail.drinks[0]['strIngredient4'];
    cubaLibra.appendChild(ice);

    let instructions = document.createElement('p');
    instructions.innerHTML = cocktail.drinks[0].strInstructions;

    cubaLibra.appendChild(instructions);
}

getCubaLibra();

// Cosmopolitan

function getCosmopolitan() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17196')
    .then(
        function(response) {
            if (response.status !==200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
                return;
            }
            response.json().then(function(data) {
                //console.log(data)
                displayCosmopolitan(data);
            });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
}
    
function displayCosmopolitan(cocktail) {
    const cosmopolitan = document.getElementById('cosmopolitan');

    const name = document.createElement('h2');
    name.innerHTML = cocktail.drinks[0].strDrink;

    cosmopolitan.appendChild(name);

    const img = document.createElement('img');
    img.src = cocktail.drinks[0].strDrinkThumb;

    cosmopolitan.appendChild(img) 

    for (let i=1; i < 5; i++) {
        const ingredient = document.createElement('li');
        ingredient.innerHTML = cocktail.drinks[0][`strMeasure${i}`] + ': ' + cocktail.drinks[0][`strIngredient${i}`];

        cosmopolitan.appendChild(ingredient);
    }

    let instructions = document.createElement('p');
    instructions.innerHTML = cocktail.drinks[0].strInstructions;

    cosmopolitan.appendChild(instructions);
}

getCosmopolitan();



//like buttons
const button1 = document.getElementById('like-margarita')

button1.addEventListener('click', () => {
    button1.classList.toggle('liked')
})

const button2 = document.getElementById('like-daiquiri')

button2.addEventListener('click', () => {
    button2.classList.toggle('liked')
})

const button3 = document.getElementById('like-pinacolada')

button3.addEventListener('click', () => {
    button3.classList.toggle('liked')
})

const button4 = document.getElementById('like-mojito')

button4.addEventListener('click', () => {
    button4.classList.toggle('liked')
})

const button5 = document.getElementById('like-cubalibra')

button5.addEventListener('click', () => {
    button5.classList.toggle('liked')
})

const button6 = document.getElementById('like-cosmopolitan')

button6.addEventListener('click', () => {
    button6.classList.toggle('liked')
})
   


//https://www.youtube.com/watch?v=TzM7Fh_y0l0