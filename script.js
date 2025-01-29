let productBox = document.querySelector('.products-box');



async function getData(size) {
    let data = await fetch('https://fakestoreapi.in/api/products');
    let response = await data.json();
    
    for(let i=0;i<size;i++){
    let card = document.createElement('div');
    card.classList.add('shopping-card')
   
    card.innerHTML += `
    <img src="${response.products[i].image}" class="shop-img">
    <button class="btn shopbtn">${response.products[i].brand.toUpperCase()}</button>
    `
    productBox.appendChild(card);
    card.addEventListener('click',()=>{
        let productId = response.products[i];
        GetInfo(productId);
    })
    }
}
getData(8);
function GetInfo(productId) {
    localStorage.setItem("product",JSON.stringify(productId));
    window.open("product.html", "_blank");
}