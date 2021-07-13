// const form = document.querySelector('#search-form')
// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     let query = e.target.search.value

//     fetchData(query)
// })

// function fetchData(query){
//     fetch('http://localhost:3000/results')
//     .then(res => res.json())
//     .then(data => data.forEach(renderMealsCard))
//     // .then(data => renderMealsCard(data))
//     // let requestOptions = {
//     //     method: 'GET',
//     //     redirect: 'follow'
//     //   };
    
//     // const URL = 'https://api.spoonacular.com/recipes/complexSearch?apiKey='
//     // query = query;
//     // const apiKey = '8e2d94c85e734ab5a2bea8f4a2b1f8bf'
    
//     // fetch(`${URL}${apiKey}&query=${query}`, requestOptions)
//     // .then(response => response.json())
//     // .then(data => renderMealsCard(data))
//     // .catch(error => console.log('error', error));
// }

// function renderMealsCard(mealInfo){
//     let divFrame = document.createElement('div')
//     let title = document.createElement('h2')
//     let img = document.createElement('img')
//     title.textContent = mealInfo.title
//     img.src = mealInfo.image

//     let container = document.querySelector('#search-results')
//     divFrame.append(title, img)
//     container.append(divFrame)
// }

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
