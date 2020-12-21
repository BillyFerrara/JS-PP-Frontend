const productForm = document.getElementById('product-form')
const productInput = document.getElementById('product-input')
const productList = document.getElementById('product-list')

productForm.addEventListener("submit", submitProduct);

function submitProduct(e){
    e.preventDefault()
    console.log("general kenobi")
    console.log(productInput.value)

    const li = document.createElement('li')
    const p = document.createElement('p')
    p.innerText = productInput.value
    

    const reviewForm = document.createElement('form')
    reviewForm.innerHTML += `<input type="text" id="review-input"><input type="submit">`

    reviewForm.addEventListener("submit", submitReview)

    li.append(p, reviewForm)
    productList.appendChild(li)

    productForm.reset();
    
}

function submitReview(e) {
    e.preventDefault()
    const reviewInput = e.target.children[0].value
    console.log(reviewInput)
}