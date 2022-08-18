
const daquiri = document.getElementById('daquiri')
const icedTea = document.getElementById('iced-tea')

function getMargarita() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
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
    
getMargarita();

function displayMargarita(cocktail) {
    console.log(cocktail.drinks[0]);

    const margarita = document.getElementById('margarita');

    const name = document.createElement('h2');
    name.innerHTML = cocktail.drinks[0].strDrink;

    margarita.appendChild(name);

    const img = document.createElement('img');
    img.src = cocktail.drinks[0].strDrinkThumb;

    margarita.appendChild(img) 

    for (let i=1; i < 4; i++) {
        console.log(i);

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



//like button
const button = document.querySelector('.btn')

button.addEventListener('click', () => {
    button.classList.toggle('liked')
})
   


//https://www.youtube.com/watch?v=TzM7Fh_y0l0