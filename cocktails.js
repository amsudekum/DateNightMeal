const apiKey = "1";
let  userInput= document.getElementById('drinkInput');
let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';


const createDrinkInfoDiv = (drink, drinkInput) => {
    const drinkPhoto = drink.strDrinkThumb;
    const drinkName = drink.strDrink;
    const drinkInfo = 
    `<a href="#drinkDetailsSection" style="text-decoration: none; color: black;">
        <div onclick='getDrinkDetails(${drink.idDrink})' class='card border-0 shadow cursor' style='width: 18rem; border-raduis: 10px'>
            <img src='${drinkPhoto}' class='card-img-top' style='width: 18rem; border-radius: 10px 10px 0 0' alt='...'>
            <div class='card-body'>
                <h5 class='card-title text-center'>${drinkName}</h5>
            </div>
        </div>
    </a>` 

    const drinkInfoSection = document.getElementById('drinkInfoSection');
    const drinkInfoDiv = document.createElement('div');
    drinkInfoDiv.className = 'col-xm-1 col-sm-1 col-md-3 p-3 d-flex justify-content-center';
    drinkInfoDiv.innerHTML = drinkInfo;
    drinkInfoSection.appendChild(drinkInfoDiv);
}

const showDrinkInfoDiv = (data, drinkInput) => {
    const drink = data.drinks;
    if(drink){
        drink.forEach(element => {
        createDrinkInfoDiv(element, drinkInput);
        })
    }else{
        const noDrinkFound = document.getElementById('invalidDrink')
        noDrinkFound = `No drink found for ${drinkInput}!`;
    }
} 

const searchDrink = () =>{
    const drinkInput = document.getElementById('drinkInput').value;
    
    if(drinkInput){
        const noDrinkFound = document.getElementById('invalidDrink')
        noDrinkFound.innerText = ``;
        
        const drinkInfoSection = document.getElementById('drinkInfoSection')
        drinkInfoSection.innerHTML = ``;

        const drinkDetailsSection = document.getElementById('drinkDetailsSection')
        drinkDetailsSection.innerHTML = ``;

        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkInput}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            showDrinkInfoDiv(data, drinkInput);
        })
    }else{
        const invalidDrink = document.getElementById('noDrinkFound')
        invalidDrink.innerText = `Please enter a drink.`
    }
}

document.getElementById('searchButton').addEventListener('click', searchDrink)

const showDrinkDetailsDiv = data => {
    const drink = data.drinks[0];
    const drinkPhoto = drink.strDrinkThumb;
    const drinkName = drink.strDrink; 
    const drinkDetailsSection = document.getElementById('drinkDetailsSection')
    drinkDetailsSection.innerHTML = 
    `<div id='drinkDetails' class = 'card px-0 pb-1 border-0 shadow col-xm-12       col-sm-12 col-md-6' style='border-radius: 10px;'
        <img src='${drinkPhoto}' class = 'card-img-top' style = 'border-radius: 10px 10px 0 0;' alt=' ...'>
        <div class = 'card-body'>
            <h2 class = 'card-title text-center my-3'>${drinkName}</h2>
            <hr>
            <h5 class = 'card-title mt-4'> Ingredients</h5>
            <div id='drinkIngredients'></div>
        </div>
    </div>`
    
    const drinkIngredients = document.getElementById('drinkIngredients')
    for(let i = 1; drink[`strIngredient${i}`]; i++){
        let ingredients = `${drink[`strMeasure${i}`]} ${drink[`strIngredient${i}`]}`
        let drinkDetailsP = document.createElement('p');
        drinkDetailsP.className = 'cardText';
        drinkDetailsP.innerText = ingredients;
        drinkIngredients.appendChild(drinkDetailsP);
    }
}

const getDrinkDetails = drinkID => {
    let drinkDetailsSection = document.getElementById('drinkDetailsSection')
    drinkDetailsSection.innerHTML = ``;

    let url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkID}`
    fetch(url)
    .then(res => res.json())
    .then(data => showDrinkDetailsDiv(data));
}
