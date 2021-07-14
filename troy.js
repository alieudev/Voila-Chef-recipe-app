
document.addEventListener('DOMContentLoaded', fetchData(), /*structure()*/) 

 // this function fetches all of my data!
    function fetchData(query){
        fetch('http://localhost:3000/results')
         .then(res=> res.json())
        .then(data => {loopData(data)})
      
        // const URL = 'https://api.spoonacular.com/recipes/complexSearch?apiKey='
        // let query1 = 'chicken'
        // const apiKey = 'c2f88f9f04b4489eb08dd64756ccef39'
        // // let info = '&addRecipeInformation=${info}true'
        //  fetch(`${URL}${apiKey}&query=${query1}`)
        // .then(response => response.json())
        // .then(data => console.log(data))
        // .catch(error => console.log('error', error));
    }


function loopData(data){
    //console.log(data)
    let body = document.querySelector('body')
    let buttonContainer = document.createElement('div')
    buttonContainer.id = "button-container"
    let buttonsContainer = document.createElement('div')
    buttonsContainer.id= "buttons-go-here"
    let buttonResultsContainer= document.createElement('div')
    buttonResultsContainer.id = "button-results-container"
    let h3RecipeTitle = document.createElement('h3')
    let imgResult = document.createElement('img')
    let h4Time = document.createElement('h4')
    let h5Summary= document.createElement('h5')

    let quickMealButton = document.createElement('button')
    quickMealButton.id = "quick-meals-button"
    quickMealButton.textContent="Quick Meals"
    let healthyMealButton = document.createElement('button')
    healthyMealButton.id = "healthy-meals-button"
    healthyMealButton.textContent = "Healthy Meals"

    buttonsContainer.append(quickMealButton, healthyMealButton, buttonResultsContainer)
    buttonContainer.append(buttonsContainer)
    body.append(buttonContainer)
    
   //console.log(data)
   quickMealButton.addEventListener('click', ()=> {
            data.forEach((meals)=>{
                if(meals.readyInMinutes <= 30){
                    h3RecipeTitle.textContent = meals.title
                    imgResult.src = meals.image
                    h4Time.textContent = `Ready in: ${meals.readyInMinutes} minutes`
                    h5Summary.innerHTML = `Summary: ${meals.summary}`
                    buttonResultsContainer.append(h3RecipeTitle, imgResult, h4Time, h5Summary)  
                } }) })
    // healthyMealButton.addEventListener('click', ()=> {
    //         data.forEach((meals)=>{
    //             console.log(meals.veryHealthy.true)
    //             if(meals.veryHealthy === 'true'){
    //                 h3RecipeTitle.textContent = meals.title
    //                 imgResult.src = meals.image
    //                 h4Time.textContent = `Ready in: ${meals.readyInMinutes} minutes`
    //                 h5Summary.innerHTML = `Summary: ${meals.summary}`
    //                 buttonResultsContainer.append(h3RecipeTitle, imgResult, h4Time, h5Summary)  
    //             } }) })
    
        }

// function structure(data){
//     //console.log(data)
//     console.log(document.querySelector('body'))
//     bodyContainer = document.querySelector('body')
//     buttonContainer = document.createElement('div')
//     buttonResults = document.createElement('div')
//     // bodyContainer.append(buttonContainer)
//     // buttonContainer.append(buttonResults)
    
// }

// function elements(data){
//     console.log(data)
   
    

// }





// function quickMealsButton(data){
//     let container = document.querySelector('body')
//     let buttonContainer = document.createElement('div')
//     // let h3ButtonTitle = document.createElement('h3')
//     let b15 = document.createElement('button')
//     let b30 = document.createElement('button')
//     let b45 = document.createElement('button')
//     let b1Hour = document.createElement('button')
//     let buttonResults = document.createElement('div')

//     //h3ButtonTitle.textContent = "How much time do you want to spend cooking today?"
//     b15.textContent = '15 minutes or less'
//     b15.id = 'button15min'
//     b30.textContent = '30 - 40 minutes'
//     b30.id = 'button30min'
//     b45.textContent = '45 - 50 minutes'
//     b45.id = 'button45min'
//     b1Hour.textContent = '1 hour or more'
//     b1Hour.id = 'button1hour'
//     buttonContainer.id="quickmeal-buttons"
//     buttonResults.id = "quickmeal-results"
    

//     buttonContainer.append( b15, b30, b45, b1Hour)
//     container.append(buttonContainer,buttonResults)
    
//     loopData(data);
// }
    
//     function loopData(data){
//         buttonsClick(data)
//         data.forEach((value)=>{buttonsClick(value)})
//     }
    
        
       
    

//     function buttonsClick(data){
//         let b15 =document.querySelector('#button15min')
//         let b30 = document.querySelector('#button30min')
//         let b45 =document.querySelector('#button45min')
//         let b1h =document.querySelector('#button1hour')
//         // container.innerHTML = ""
//         console.log(data)
        
//         //console.log(a)
//         // b30.addEventListener('click',()=>{  
//         //     (data.forEach((data)=>{
//         //        if(data.readyInMinutes >= 15 && data.readyInMinutes<=40){
//         //         // container.innerHTML = ""
//         //         container = document.querySelector('#quickmeal-results')
//         //          container.innerHTML = ""
//         //         let img = document.createElement('img')
//         //         let h3RecipeTitle = document.createElement('h3')
//         //         let h4DurationTitle = document.createElement('h4')
//         //         let h4ServingSizeTitle = document.createElement('h4')
//         //         //console.log(data.title)
//         //         h3RecipeTitle.textContent = data.title
//         //         h4DurationTitle.textContent = `Ready in ${data.readyInMinutes} minutes`
//         //         img.src = data.image
//         //         h4ServingSizeTitle.textContent = `Servings: ${data.servings}`
               
//         //         container.append(h3RecipeTitle, img, h4DurationTitle, h4ServingSizeTitle)
//         //        } })) })
      
       
//         //        b45.addEventListener('click',()=>{  
//         //         (data.forEach((data)=>{
//         //            if(data.readyInMinutes >= 45 && data.readyInMinutes<=50){
//         //             // container.innerHTML = ""
//         //             container = document.querySelector('#quickmeal-results')
//         //              container.innerHTML = ""
//         //             let img = document.createElement('img')
//         //             let h3RecipeTitle = document.createElement('h3')
//         //             let h4DurationTitle = document.createElement('h4')
//         //             let h4ServingSizeTitle = document.createElement('h4')
//         //             //console.log(data.title)
//         //             h3RecipeTitle.textContent = data.title
//         //             h4DurationTitle.textContent = `Ready in ${data.readyInMinutes} minutes`
//         //             img.src = data.image
//         //             h4ServingSizeTitle.textContent = `Servings: ${data.servings}`
                   
//         //             container.append(h3RecipeTitle, img, h4DurationTitle, h4ServingSizeTitle)
//         //            } })) })
//         //            b1h.addEventListener('click',()=>{  
//         //             (data.forEach((data)=>{
//         //                if(data.readyInMinutes >= 60){
//         //                 // container.innerHTML = ""
//         //                 container = document.querySelector('#quickmeal-results')
//         //                  container.innerHTML = ""
//         //                 let img = document.createElement('img')
//         //                 let h3RecipeTitle = document.createElement('h3')
//         //                 let h4DurationTitle = document.createElement('h4')
//         //                 let h4ServingSizeTitle = document.createElement('h4')
//         //                 //console.log(data.title)
//         //                 h3RecipeTitle.textContent = data.title
//         //                 h4DurationTitle.textContent = `Ready in ${data.readyInMinutes} minutes`
//         //                 img.src = data.image
//         //                 h4ServingSizeTitle.textContent = `Servings: ${data.servings}`
                       
//         //                 container.append(h3RecipeTitle, img, h4DurationTitle, h4ServingSizeTitle)
//         //                } })) })
//     }

  
    

//         // if(value.readyInMinutes >= 16 && data.readyInMinutes <= 40){
//         //  console.log(data.title)
//         // console.log(b[0])
//         //  let container = document.querySelector('#search-results')
//         //  let img = document.createElement('img')
//         //  let h3RecipeTitle = document.createElement('h3')
//         //  let h4DurationTitle = document.createElement('h4')
//         //  let h4ServingSizeTitle = document.createElement('h4')
 
//         //  h3RecipeTitle.textContent = value.title
//         //  h4DurationTitle.textContent = `Ready in ${value.readyInMinutes} minutes`
//         //  img.src = value.image
//         //  h4ServingSizeTitle.textContent = `Servings: ${value.servings}`
 
//         //  container.append(h3RecipeTitle, h4DurationTitle,h4ServingSizeTitle, img)
     
    


// // 

// // function loopData(data){
// //    let loopData = data.results
// //     loopData.forEach((data)=>{
// //     buttonFunctionality(data)
// //     })
// // }

// // function buttonFunctionality(data){
// //     let baseUri = "https://spoonacular.com/recipeImages/"
// //     let baseUrl = data.image
    
// //     let b15 =document.querySelector('#button15min')
// //     let b30 = document.querySelector('#button30min')
// //     let b45 =document.querySelector('#button45min')
// //     let b1h =document.querySelector('#button1hour')

// //    b15.addEventListener('click',(e)=>{
// //        e.preventDefault();
// //        if(data.readyInMinutes <= 15){
// //         // console.log(data.title)
// //         // console.log(data)
// //         let container = document.querySelector('#search-results')
// //         let img = document.createElement('img')
// //         let h3RecipeTitle = document.createElement('h3')
// //         let h4DurationTitle = document.createElement('h4')
// //         let h4ServingSizeTitle = document.createElement('h4')

// //         h3RecipeTitle.textContent = data.title
// //         h4DurationTitle.textContent = `Ready in ${data.readyInMinutes} minutes`
// //         img.src = `${baseUri}${baseUrl}`
// //         h4ServingSizeTitle.textContent = `Servings: ${data.servings}`

// //         container.append(h3RecipeTitle, h4DurationTitle,h4ServingSizeTitle, img)
// //     } })

//     // b30.addEventListener('click',(e)=>{
//     //     e.preventDefault();
//     //     if(data.readyInMinutes >= 16 && data.readyInMinutes <= 40){
//     //      console.log(data.title)
//     //      console.log(data)
//     //      let container = document.querySelector('#search-results')
//     //      let img = document.createElement('img')
//     //      let h3RecipeTitle = document.createElement('h3')
//     //      let h4DurationTitle = document.createElement('h4')
//     //      let h4ServingSizeTitle = document.createElement('h4')
 
//     //      h3RecipeTitle.textContent = data.title
//     //      h4DurationTitle.textContent = `Ready in ${data.readyInMinutes} minutes`
//     //      img.src = `${baseUri}${baseUrl}`
//     //      h4ServingSizeTitle.textContent = `Servings: ${data.servings}`
 
//     //      container.append(h3RecipeTitle, h4DurationTitle,h4ServingSizeTitle, img)
//     //  }})

// //      b45.addEventListener('click',(e)=>{
// //         e.preventDefault();
// //         if(data.readyInMinutes >= 45 && data.readyInMinutes <= 50 ){
// //          console.log(data.title)
// //          console.log(data)
// //          let container = document.querySelector('#search-results')
// //          let img = document.createElement('img')
// //          let h3RecipeTitle = document.createElement('h3')
// //          let h4DurationTitle = document.createElement('h4')
// //          let h4ServingSizeTitle = document.createElement('h4')
 
// //          h3RecipeTitle.textContent = data.title
// //          h4DurationTitle.textContent = `Ready in ${data.readyInMinutes} minutes`
// //          img.src = `${baseUri}${baseUrl}`
// //          h4ServingSizeTitle.textContent = `Servings: ${data.servings}`
 
// //          container.append(h3RecipeTitle, h4DurationTitle,h4ServingSizeTitle, img)
// //      }})

// //      b1h.addEventListener('click',(e)=>{
// //         e.preventDefault();
// //         if(data.readyInMinutes >= 51 ){
// //          console.log(data.title)
// //          console.log(data)
// //          let container = document.querySelector('#search-results')
// //          let img = document.createElement('img')
// //          let h3RecipeTitle = document.createElement('h3')
// //          let h4DurationTitle = document.createElement('h4')
// //          let h4ServingSizeTitle = document.createElement('h4')
 
// //          h3RecipeTitle.textContent = data.title
// //          h4DurationTitle.textContent = `Ready in ${data.readyInMinutes} minutes`
// //          img.src = `${baseUri}${baseUrl}`
// //          h4ServingSizeTitle.textContent = `Servings: ${data.servings}`
 
// //          container.append(h3RecipeTitle, h4DurationTitle,h4ServingSizeTitle, img)
// //      }})

// // }


                

// // function start(data){
// //     quickMealsButton();
// //     loopData(data)
// // }




























































// ///old code
// // const url = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=bowl&diet=vegetarian&number=10&offset=0&type=main%20course"

// // document.addEventListener('DOMContentLoaded', fetchData()) 

// // function fetchData(){ // this function fetches all of my data!
// // fetch(url, {
// // 	"method": "GET",
// // 	"headers":{"x-rapidapi-key":"7e599e728bmsh48fbeaf07cb689bp14a796jsn83e6008ec67c",
// // 	"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"}
// // })
// // .then(res=> res.json())
// // .then(data => {loopData(data);})
// // .catch(err => {console.error(err);});}

// // function loopData(recipe){ // this function loops my data!
// //     let loopMe = Object.values(recipe)[0]
// //     loopMe.forEach((data) => {testCard(data)})
    
// //     }
// //    ////////////////////////////////////////////////////////////////////
// //     function testCard(recipe){ // This function creates my elements
// //         //console.log(document.querySelector('#search-results'))
// //         //create elements
// //         console.log(recipe)
// //         let container = document.querySelector('#search-results')
// //         let title = document.createElement('h2')
// //         let h3Minutes = document.createElement('h3')
// //         let h4Serving = document.createElement('h4')
// //         let img = document.createElement('img')
// //         let btnDiv = document.createElement('div')
// //         let btnText = document.createElement('h3')
// //         let btn15 = document.createElement('button')
// //         let btn30 = document.createElement('button')
// //         let btn45 = document.createElement('button')
// //         let btn1hr = document.createElement('button')
    
// //         //add content to elements
// //         title.textContent = recipe.title
// //         img.src = `${recipe.image}${recipe.sourceUrl}`
// //         // console.log()
// //         h3Minutes.textContent = `Ready in: ${recipe.readyInMinutes} minutes!`
// //         h4Serving.textContent = `Servings: ${recipe.servings}`
// //         btn15.textContent = '15 minutes'
// //         btn30.textContent = '30 minutes'
// //         btn45.textContent = '45 minutes'
// //         btn1hr.textContent = '1 hour or more'
// //         btnText.textContent = 'How much time do you want to spend cooking today?'
// //         btn15.id = 'button15'
// //         btn30.id = 'button30'
// //         btn45.id = 'button45'
// //         btn1hr.id = 'button1hour'

// //         //append elements
// //         container.append(btnDiv, title, img, h3Minutes, h4Serving)
// //         btnDiv.append(btnText,btn15,btn30,btn45,btn1hr)
// //         // buttonFilter(recipe)
        
// //         // console.log(recipe)
// //         // attempt to add event listeners to buttons
// //         let b15 = document.querySelector('#button15')
// //         b15.addEventListener('click', ()=>{
// //             if(recipe.readyInMinutes <= 15){
// //                 console.log(recipe.title)
// //             }
// //         })
// //         let b30 = document.querySelector('#button30')
// //         b30.addEventListener('click', ()=>{
// //             if(recipe.readyInMinutes <= 30){
// //                 console.log(recipe.title)
// //             }
// //         })
// //         let b45 = document.querySelector('#button45')
// //         b45.addEventListener('click', ()=>{
// //             if(recipe.readyInMinutes <= 45){
// //                 console.log(recipe.title)
// //             }
// //         })
// //         let b1Hour = document.querySelector('#button1hour')
// //         b1Hour.addEventListener('click', ()=>{
// //             if(recipe.readyInMinutes >= 60){
// //                 console.log(recipe.title)
// //             }
// //         })
        
// //     }
// // ////////////////////////////////////////////////////////////////////
// // // function buttonFilter(recipe){
// // //    // console.log(recipe)
// // // //button creation 
// // //     let container = document.querySelector('#search-results')

// // //         let btnDiv = document.createElement('div')
// // //         let btnText = document.createElement('h3')
// // //         let btn15 = document.createElement('button')
// // //         let btn30 = document.createElement('button')
// // //         let btn45 = document.createElement('button')
// // //         let btn1hr = document.createElement('button')
        
// // //         btn15.textContent = '15 minutes'
// // //         btn30.textContent = '30 minutes'
// // //         btn45.textContent = '45 minutes'
// // //         btn1hr.textContent = '1 hour or more'
// // //         btnText.textContent = 'How much time do you want to spend cooking today?'
// // //         btn15.id = 'button15'
// // //         btn30.id = 'button30'
// // //         btn45.id = 'button45'
// // //         btn1hr.id = 'button1hour'

// // //         container.append(btnDiv)
// // //         btnDiv.append(btnText,btn15,btn30,btn45,btn1hr)



// // //    // button functionality
// // //    let b15 = document.querySelector('#button15')
// // //         b15.addEventListener('click', ()=>{
// // //             if(recipe.readyInMinutes <= 15){
// // //                 console.log(recipe.title)
// // //             }
// // //         })
// // //         let b30 = document.querySelector('#button30')
// // //         b30.addEventListener('click', ()=>{
// // //             if(recipe.readyInMinutes <= 30){
// // //                 console.log(recipe.title)
// // //             }
// // //         })
// // //         let b45 = document.querySelector('#button45')
// // //         b45.addEventListener('click', ()=>{
// // //             if(recipe.readyInMinutes <= 45){
// // //                 console.log(recipe.title)
// // //             }
// // //         })
// // //         let b1Hour = document.querySelector('#button1hour')
// // //         b1Hour.addEventListener('click', ()=>{
// // //             if(recipe.readyInMinutes >= 60){
// // //                 console.log(recipe.title)
// // //             }
// // //         })
// // //     let test = recipe 

// // //     console.log(test)
// // //     test.addEventListener('click',(data)=>{
// // //         console.log(data)
// // //     })
// // //    let btn15 = recipe
// // //    btn15.addEventListener('click',(data)=>{
// // //        console.log(data)
// // //    })
// // //     if (recipe.readyInMinutes <= 15){
// // //         console.log (recipe.title)
// // //     }
// // //     let btn15 = document.querySelector('#button15')
// // //     btn15.addEventListener('click', (recipe) => {})
// // //     let btn30 = document.querySelector('#button30')
// // //     let btn45 = document.querySelector('#button45')
// // //     let btn1hour = document.querySelector('#button1hour')
// // // }
    
