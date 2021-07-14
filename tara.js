
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
    //append all meal card data to the div container
    let container = document.querySelector('#search-results')
    container.append(divFrame)
    reviewForm.append(ul)
    divFrame.append(title, img, pRating, ratingStars, reviewForm)
}