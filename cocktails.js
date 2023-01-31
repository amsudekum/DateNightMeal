const apiKey = "1";
let  userInput= document.getElementById('drinkInput');
let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';


const createDrinkInfoDiv = (drink, drinkInput) => {
    const drinkPhoto = drink.strDrinkThumb;
    const drinkName = drink.strDrink;
    const drinkInfo =   
        `<a href="#drinkTitle" style="text-decoration: none; color: black;">
            <div onclick="showDrinkTitleDiv(${drink.idDrink})" class="card border-0 shadow cursor" style="width: 18rem; border-radius: 10px">
                <img src="${drinkPhoto}" class="card-img-top" style="width: 18rem; border-radius: 10px 10px 0 0" alt="...">
                <div class="card-body">
                    <h5 class="card-title text-center">${drinkName}</h5>
                </div>
            </div>
        </a>`
    
    const drinkInfoSection = document.getElementById('drinkTitle');
    const drinkInfoDiv = document.createElement('div');
    drinkInfoDiv.className = 'col-xm-1 col-sm-1 col-md-3 p-3 d-flex justify-content-center';
    drinkInfoDiv.innerHTML = drinkInfo;
    drinkInfoSection.appendChild(drinkInfoDiv);
}

const showDrinkTitleDiv = (data, drinkInput) => {
    const drink = data.drinks;
    if(drink){
        drink.forEach(element => {
        createDrinkInfoDiv(element, drinkInput);
        });
    }
    else{
        const noDrinkFound = document.getElementById('invalidDrink');
        noDrinkFound.innerText = `Sorry! We don't have ${drinkInput} yet!`;
    }
}

const searchDrinks = () =>{
    const drinkInput = document.getElementById('drinkInput').value;
    const noDrinkFound = document.getElementById('invalidDrink');
    const drinkInfoSection = document.getElementById('drinkTitle')
    const drinkInstructions = document.getElementById('drinkInstructions')
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkInput}`;

    if(drinkInput){
        noDrinkFound.innerText = ``;
        drinkInfoSection.innerHTML = ``;
        drinkInstructions.innerHTML = ``;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            showDrinkTitleDiv(data, drinkInput);
        })       
    }else{
        noDrinkFound.innerText = `You didn't enter anything!`;
    }
}

document.getElementById('searchButton').addEventListener('click', searchDrinks);

const showDrinkInfoDiv = data => {
    const drink = data.drinks[0];
    const drinkPhoto = drink.strDrinkThumb;
    const drinkName = drink.strDrink;
    const drinkInstructions = document.getElementById('drinkInstructions');
    drinkInstructions.innerHTML = 
        `<div id="drinkDetails" class="card px-0 pb-1 border-0 shadow col-xm-12 col-sm-12 col-md-6" style="border-radius: 10px;">
        <img src="${drinkPhoto}" class="card-img-top" style="border-radius: 10px 10px 0 0;" alt=" ...">
        <div class="card-body">
            <h2 class="card-title text-center my-3">${drinkName}</h2>
            <hr>
            <h5 class="card-title mt-4">Drink Ingredients</h5>
            <div id="drink-ingredients"></div>
        </div>
    </div> ` 

    const drinkIngredients = document.getElementById('drink-ingredients');
    
    for(let i = 1; drink[`strIngredient${i}`]; i++){
        const ingredients = `✔ ${drink[`strMeasure${i}`]} ${drink[`strIngredient${i}`]}`

        const drinkDetailsP = document.createElement('p');
        drinkDetailsP.className = 'cardText';
        drinkDetailsP.innerText = ingredients;
        drinkIngredients.appendChild(drinkDetailsP);
    }
}

const getDrinkInstructions = drinkID => {
    const drinkInstructions = document.getElementById('drinkInstructions');
    drinkInstructions.innerHTML = ``;

    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkID}`
    fetch(url)
    .then(res => res.json())
    .then(data => showDrinkInfoDiv(data));
}
