const form1 = document.querySelector('#search-form')

form1.addEventListener('submit', (e) => {
    e.preventDefault()
    let query = e.target.search.value
    fetchData(query)
    
})

function fetchData(){
    fetch('http://localhost:3000/results')
    .then(res => res.json())
    .then(data => data.forEach(renderMealsCard))}
  

function renderMealsCard(mealInfo){
    let divFrame = document.createElement('div')
    let title = document.createElement('h2')
    let img = document.createElement('img')
    title.textContent = mealInfo.title
    img.src = mealInfo.image
    let container = document.querySelector('#search-results')
    divFrame.append(title, img)
    container.append(divFrame)
}

//create a form that allows users to leave a review
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

    let ul = document.createElement("ul")

    reviewForm.addEventListener("submit", (e) => {
        e.preventDefault()
        let newReview = document.createElement("li")
        newReview.textContent = e.target.review.value
        ul.append(newReview)
        e.target.review.value = ""
    })

    document.querySelector("body").append(reviewForm, ul)
   
const form = document.querySelector('#search-form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let query = e.target.search.value

    fetchData(query)
})

function fetchData(query){
    fetch('http://localhost:3000/results')
    .then(res => res.json())
    .then(data => data.forEach(renderMealsCard))
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
function renderMealsCard(mealInfo){
    let divFrame = document.createElement('div')
    let title = document.createElement('h2')
    let img = document.createElement('img')
    title.textContent = mealInfo.title
    img.src = mealInfo.image

    let ratingStars = document.createElement('p')
    ratingStars.innerHTML = rating()
    


    let container = document.querySelector('#search-results')
    divFrame.append(title, img, ratingStars)
    container.append(divFrame)
}

//////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', fetchData1()) 

 // this function fetches all of my data! Using troy.json
    function fetchData1(){
        fetch('http://localhost:3000/results')
         .then(res=> res.json())
        .then(data => {initialRender(data)})
    //     const URL = 'https://api.spoonacular.com/recipes/complexSearch?apiKey='
    // //     let query1 = 'chicken'
    //         let queryList =['chicken', 'pork', 'beef', 'rice','pasta','pizza','dessert','cake','pie','meal','breakfast','lunch','dinner','brunch','fruit','smoothie','coffee','hotdog','burger','pie','ice cream','salad','tofu','vegan','vegetarian','keto','sausage','soup','bread']
    //         let queryRandom = queryList[Math.floor(Math.random()*queryList.length)];
    //     const apiKey = '2b744349f3d8403ab9076a2080cd086d'
    //     let info = 'true'
    //     let readyTime = 120
    //      fetch(`${URL}${apiKey}&query=${queryRandom}&addRecipeInformation=${true}&${readyTime}`)
    //     .then(response => response.json())
    //     .then(data => initialRender(data.results))
    //     .catch(error => console.log('error', error));
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
    let divForUl = document.createElement('div')
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