// const dotenv = require('dotenv').config();
// const API_KEY = process.env.API_KEY;

const apiKey = '2b744349f3d8403ab9076a2080cd086d'

//////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', ()=> {
    fetchInitialData()
    const home = document.querySelector('h1')
    home.addEventListener('click', ()=> { 
        location.href = "https://alieudev.github.io/Voila-Chef-recipe-app/";
    })
}) 

 // this function fetches all of my data! Using troy.json
    function fetchInitialData(){
    const URL = 'https://api.spoonacular.com/recipes/complexSearch?apiKey='
    //let query1 = 'chicken'
    let queryList =['chicken', 'pork', 'beef', 'rice','pasta','pizza','dessert','cake','pie','meal','breakfast','lunch','dinner','brunch','fruit','smoothie','coffee','hotdog','burger','pie','ice cream','salad','tofu','vegan','vegetarian','keto','sausage','soup','bread']
    let queryRandom = queryList[Math.floor(Math.random()*queryList.length)];
    let info = 'true'
    let readyTime = 120

    fetch(`${URL}${apiKey}&query=${queryRandom}&addRecipeInformation=${true}&${readyTime}`)
    .then(response => response.json())
    .then(data => initialRender(data.results))
    .catch(error => console.log('error', error));
    }


function initialRender(data){
    //buttons and divs are created here 
    let body = document.querySelector('body')
    let buttonContainer = document.createElement('div')
    buttonContainer.id = "button-container"
    let buttonsContainer = document.createElement('div')
    buttonsContainer.id= "buttons-go-here"
    let buttonResultsContainer= document.createElement('div')
    buttonResultsContainer.id = "button-results-container"
    let h3RecipeTitle = document.createElement('h3')
    let imgResult = document.createElement('img')
     let h5Summary= document.createElement('h5')
    
    let quickMealButton = document.createElement('button')
    quickMealButton.id = "quick-meals-button"
    quickMealButton.textContent="Quick Meals"
    let clear = document.createElement('button')
    clear.id = "clear"
    clear.textContent = "Clear"
    let vegetarianMeals = document.createElement('button')
    vegetarianMeals.id = "vegetarian-meals"
    vegetarianMeals.textContent="Healthy Meals"
    h3RecipeTitle.id="recipe-title"
    
    body.append(buttonContainer)
    buttonsContainer.append(quickMealButton,vegetarianMeals, clear, buttonResultsContainer)
    buttonContainer.append(buttonsContainer)
    
    
    // ADD EVENTS UPDATE 06/16/21 /////////////////////
    quickMealButton.addEventListener('click', ()=> {
        h3RecipeTitle.innerHTML=""        
            data.forEach((meals)=>{ 
                if(meals.readyInMinutes <= 45 ){
                    let recipeUl = document.createElement('ul')
                    let recipeLi = document.createElement('li')
                    let summaryLi = document.createElement('li')
                    summaryLi.id="summary"
                    let image = document.createElement('img')
                   let title = document.createElement('li')
                   title.id="hey"
                   let h4Time = document.createElement('li')
                   let liGetRecipeContainer = document.createElement('li')
                   let getRecipeDetails = document.createElement('details')
                   let getRecipeSummary = document.createElement('summary')
                   let getRecipeMoreDetails = document.createElement('p')  

                   getRecipeDetails.id="details"
                   getRecipeSummary.textContent= "Get the recipe"
                   getRecipeSummary.id="gtr"
                   getRecipeDetails.append(getRecipeSummary, getRecipeMoreDetails)
                   liGetRecipeContainer.append(getRecipeDetails)
                   h4Time.textContent = `Ready in: ${meals.readyInMinutes} minutes`
                   h4Time.id="h4time"
                    image.src = meals.image
                    title.textContent = meals.title
                   summaryLi.innerHTML = meals.summary
                   recipeUl.appendChild(recipeLi)
                    recipeLi.append(title, image, h4Time, summaryLi,liGetRecipeContainer)
                    h3RecipeTitle.append(recipeUl)
                    buttonResultsContainer.append(h3RecipeTitle)

                    let steps= meals.analyzedInstructions[0].steps
                        steps.forEach((stepList)=>{
                            let step = document.createElement('p')
                            step.id="steps"
                            getRecipeMoreDetails.append(step)
                            let stepNumber = stepList.number
                            let direction = stepList.step
                            step.textContent=`Step${stepNumber}: ${direction}`
                        })
                } }) })
    vegetarianMeals.addEventListener('click', ()=> {
        h3RecipeTitle.innerHTML=""        
            data.forEach((meals)=>{ 
                 if(meals.healthScore > 30 ){          
                    let recipeUl = document.createElement('ul')
                    let recipeLi = document.createElement('li')
                    let summaryLi = document.createElement('li')
                    summaryLi.id="summary"
                    let image = document.createElement('img')
                   let title = document.createElement('li')
                   title.id="hey"
                   let h4Time = document.createElement('li')
                   let liGetRecipeContainer = document.createElement('li')
                   let getRecipeDetails = document.createElement('details')
                   let getRecipeSummary = document.createElement('summary')
                   let getRecipeMoreDetails = document.createElement('p')  

                   getRecipeDetails.id="details"
                   getRecipeSummary.textContent= "Get the recipe"
                   getRecipeSummary.id="gtr"
                   getRecipeDetails.append(getRecipeSummary, getRecipeMoreDetails)
                   liGetRecipeContainer.append(getRecipeDetails)
                   h4Time.textContent = `Ready in: ${meals.readyInMinutes} minutes`
                   h4Time.id="h4time"
                    image.src = meals.image
                    title.textContent = meals.title
                   summaryLi.innerHTML = meals.summary
                   recipeUl.appendChild(recipeLi)
                    recipeLi.append(title, image, h4Time, summaryLi,liGetRecipeContainer)
                    h3RecipeTitle.append(recipeUl)
                    buttonResultsContainer.append(h3RecipeTitle)

                    let steps= meals.analyzedInstructions[0].steps
                        steps.forEach((stepList)=>{
                            let step = document.createElement('p')
                            step.id="steps"
                            getRecipeMoreDetails.append(step)
                            let stepNumber = stepList.number
                            let direction = stepList.step
                            step.textContent=`Step${stepNumber}: ${direction}`
                        })
                        } }) })    
                    
        clear.addEventListener('click',()=>{
            let clearContainer = document.createElement('h4')
            buttonResultsContainer.innerHTML=''
            clearContainer.textContent=""
            buttonResultsContainer.append(clearContainer)             
                         })                      

                }


// Search funtionality 
const form = document.querySelector('#search-form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let query = e.target.search.value
    fetchData(query)
})

function fetchData(query){
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}`, requestOptions)
        .then(response => response.json())
        .then(result => result.results.forEach(renderMealsCard) )//result.forEach(renderMealsCard))
        .catch(error => console.log('error', error));
    
}
function renderRecipe(recipe){
    let id = recipe.id 

    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
    fetch(`https://api.spoonacular.com/recipes/${id}/card?apiKey=${apiKey}`, requestOptions)
    .then(response => response.json())
    .then(result => { console.log(result)
        let url = result.url
        
    let img = document.createElement('img')
    if(result){img.src = url}
    let body = document.querySelector('body')
    body.innerHTML = ""
    body.appendChild(img)
    
    })
    .catch(error => console.log('error', error));
    
}


function rating(){
    return (
        `<div class="rate">
            <input type="radio" id="star5" name="rate" value="5" />
            <label for="star5" title="text">5 stars</label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label for="star4" title="text">4 stars</label>
            <input type="radio" id="star3" name="rate" value="3" />
            <label for="star3" title="text">3 stars</label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label for="star2" title="text">2 stars</label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label for="star1" title="text">1 star</label>
         </div>`
    )
}

function createModal(){
    return (`<!-- Trigger/Open The Modal -->
        <button id="myBtn">Recipe Card</button>
        
        <!-- The Modal -->
        <div id="myModal" class="modal">
        
          <!-- Modal content -->
          <div class="modal-content">
            <span class="close">&times;</span>
            <p></p>
          </div>
        
        </div>`)
}

function renderMealsCard(mealInfo){
    let divFrame = document.createElement('div')
    let title = document.createElement('h2')
    let img = document.createElement('img')
    title.textContent = mealInfo.title
    img.src = mealInfo.image

    // // review stars
    // let ratingStars = document.createElement('p')
    // ratingStars.innerHTML = rating()

    // modal
    let myModal = document.createElement('div')
    myModal.innerHTML = createModal()

    //user ratings
    let totalRating = 10
    let numberRatings = 2
    let avgRating = totalRating/numberRatings
    let pRating = document.createElement('p')
    pRating.textContent = `User Rating: ${avgRating}`
    //ratings stars
    let ratingStars = document.createElement('p')
    ratingStars.innerHTML = rating()
    //make star rating button change the user ratings average when clicked
    ratingStars.addEventListener("click", (e) => {
        if (e.target.value === "5") {
            totalRating +=5 
            numberRatings++
        } else if (e.target.value === "4") {
            totalRating +=4
            numberRatings++
        } else if (e.target.value === "3") {
            totalRating +=3
            numberRatings++
        } else if (e.target.value === "2") {
            totalRating +=2 
            numberRatings++
        } else if (e.target.value === "1") {
            totalRating ++ 
            numberRatings++
        }
        avgRating = (totalRating/numberRatings).toFixed(2)
        pRating.textContent = `User Rating: ${avgRating}`
    })

    //review form
    let reviewForm = document.createElement("form");
    reviewForm.setAttribute("class", "review_form")
    let review = document.createElement("input");
    review.setAttribute("type", "text");
    review.setAttribute("name", "review");
    review.setAttribute("placeholder", "Leave a review...");
    let reviewButton = document.createElement("button");
    reviewButton.setAttribute("type", "submit");
    reviewButton.textContent = "Submit"
    reviewForm.append(review, reviewButton)
    //new review event listener
    let ul = document.createElement("ul")
    reviewForm.addEventListener("submit", (e) => {
        e.preventDefault()
        let newReview = document.createElement("li")
        newReview.textContent = e.target.review.value
        ul.append(newReview)
        e.target.review.value = ""
    })
    reviewForm.append(ul)

    let container = document.querySelector('#search-results')
    divFrame.append(title, img, myModal, pRating, ratingStars, reviewForm)
    container.append(divFrame)

    //Modal Functionality 
    let modal = document.querySelector('#myModal');
    let btn = document.querySelector('#myBtn');
    let span = document.querySelector('.close');


    btn.onclick = function() {
        renderRecipe(mealInfo)
    }
    span.onclick = function() {modal.style.display = "none";}
    window.onclick = function(event) {
        if (event.target == modal) {modal.style.display = "none";} }

}

