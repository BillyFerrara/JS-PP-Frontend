// grabbing the elements needed from index.html
const productForm = document.getElementById('product-form')
const productInput = document.getElementById('product-input')
const productList = document.getElementById('product-list')

// Adding event listener to productForm
productForm.addEventListener("submit", submitProduct);

function submitProduct(e){
    e.preventDefault()
    //console.log("general kenobi")
    console.log(productInput.value)

    // Creates li that houses all Products posted
    // Creates p for posted Products in the li
    const li = document.createElement('li')
    const p = document.createElement('p')
    // Adds posted Product to the created p element
    p.innerText = productInput.value

    // Creates 'form' element for product Review 
    const reviewForm = document.createElement('form')
    // Creates actual form and adds it to the reviewForm element created above when a product is posted
    reviewForm.innerHTML += `<input type="text" id="review-input"><input type="submit">`
    // Adds event listener to reviewForm and calls submitReview as the action
    reviewForm.addEventListener("submit", submitReview)

    // Creates ul element for the reviewList
    const reviewList = document.createElement('ul')
    
    // Connects the created p element with the reviewForm and reviewList and attaches them all to the li created above
    li.append(p, reviewForm, reviewList)
    productList.appendChild(li)

    productForm.reset();
    
}
// ----------------------------------------------------

function submitReview(e) {
    e.preventDefault()
    // e.target is useful for when we are creating things dynamically. This way it creates what we need when we need it.
    const reviewInput = e.target.children[0].value
    const reviewList = e.target.nextElementSibling
   // console.log(reviewInput)

   const li = document.createElement('li')
   li.innerText = reviewInput
   reviewList.appendChild(li)

   e.target.reset()
}