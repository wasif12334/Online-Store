let productBox = document.querySelector('.products-box');
let display=4;
async function getData() {
    let data = await fetch('https://fakestoreapi.in/api/products');
    let response = await data.json();
    console.log(response.products);
    for(let i=0;i<display;i++){
    let card = document.createElement('div');
    card.classList.add('shopping-card')
   
    card.innerHTML += `
    <img src="${response.products[i].image}" class="shop-img">
    <button class="btn shopbtn">${response.products[i].brand.toUpperCase()}<button>
    `
    productBox.appendChild(card);
    
    }
}
getData();