 ///old query jusing json from troy.json 
 // fetch('http://localhost:3000/results')
// .then(res=> res.json())
// .then(data => {loopData(data) ,structure(data)})
// structure(data)

function fetchData(query){
    const URL = 'https://api.spoonacular.com/recipes/complexSearch?apiKey='
    let query1 = 'chicken'
    const apiKey = 'c2f88f9f04b4489eb08dd64756ccef39'
    let info = '&addRecipeInformation=${info}true'
    
    fetch(`${URL}${apiKey}&query=${query1}${info}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('error', error));}
 
 
 document.addEventListener('DOMContentLoaded', fetchData())

// function fetchData(query){
//     const URL = 'https://api.spoonacular.com/recipes/complexSearch?apiKey='
//     let query1 = 'pasta'
//     const apiKey = 'c2f88f9f04b4489eb08dd64756ccef39'
    
//     fetch(`${URL}${apiKey}&query=${query1}`)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log('error', error));}

    // console.log(document.querySelector('#search-form'))

    //let form = document.querySelector('#search-form')
// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     let query = e.target.search.value
// })
//     function renderMealsCard(mealInfo){
//     let divFrame = document.createElement('div')
//     let title = document.createElement('h2')
//     let img = document.createElement('img')
//     title.textContent = mealInfo.title
//     img.src = mealInfo.image

//     let container = document.querySelector('#search-results')
//     divFrame.append(title, img)
//     container.append(divFrame)
// }
